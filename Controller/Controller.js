let student = require("../Schema/Schema");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let signup = async (req, res) => {
  try {
    let { name, email, enroll, password } = req.body;
    let newPassword = await bcrypt.hash(password, 10);
    let newUser = new student({
      name,
      email,
      enroll,
      password: newPassword,
    });
    let data = await newUser.save();
    res.send({
      success: true,
      message: "User Created",
      data: data,
    });
  } catch (err) {
    res.send({
      success: false,
      message: "User creation failed",
    });
  }
};
let login = async (req, res) => {
  try {
    let { enroll, password } = req.body;
    let user = await student.findOne({ enroll });

    if (!user) {
      return res.send({
        success: false,
        message: "No register this enroll",
      });
    }
    let validpassword = await bcrypt.compare(password, user.password);
    if (!validpassword) {
      return res.send({
        success: false,
        message: "Invalid Password",
      });
    }
        let token = jwt.sign(
      { id: user._id, enroll: user.enroll },
      "mySecretKey",
      { expiresIn: "24h" }
    );
    res.send({
        success:true,
        message:"Login Successfully",
        token:token,
        user:{
            name:user.name,
            enroll:user.enroll,
            email:user.email
        }
    })
  } catch (error) {
    res.send({
        success:false,
        message:"Login failed ",
        error:error.message
    })
  }
};

module.exports = {signup, login};
