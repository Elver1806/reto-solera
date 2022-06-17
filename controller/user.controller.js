const serviceUser = require("../services/user.service");
const validateUser = async (req, res) => {
  try {
    const { username, password } = req.query;
    let response = await serviceUser.obtainFullName(username, password);
    return res.json(response);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = { validateUser };
