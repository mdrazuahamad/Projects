const {registerService,loginService} = require('../service/auth')

const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;

  //Validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  try {
    const user = await registerService({name,email,password})
    return res.status(201).json({ message: "User Created Successfully", user });
  } catch (e) {
    next(e);
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = await loginService({email,password})
    return res.status(200).json({ message: "Login Successful", token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  registerController,
  loginController,
};
