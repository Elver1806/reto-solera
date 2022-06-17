const Users = require("../models/Users.model");
const bcrypt = require("bcrypt");
const obtainFullName = async (username, password) => {
  try {
    const users = await Users.findOne({
      where: {
        user: username,
      },
    });
    if (!users) {
      throw "Usuario no registrado";
    }
    let comparePassword = await bcrypt.compare(password, users.password);
    if (!comparePassword) {
      throw "Contraseña erronea";
    }
    return {
      name: users.fullName,
    };
  } catch (error) {
    throw "Error al intentar consultar el usuario";
  }
};

module.exports = { obtainFullName };
