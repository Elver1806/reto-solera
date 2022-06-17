const Values = [
  {
    message: "Se loguea Correctamente",
    typeTest: "Succes",
    username: "admin",
    password: "admin",
    orderTest: 1,
  },
  {
    message: "Usuario no encontrado",
    typeTest: "Error",
    username: "usuarioNoEsxite",
    password: "admin",
    orderTest: 2,
    message_expect: "Usuario no registrado",
  },
  {
    message: "Contraseña Erronea",
    typeTest: "Error",
    username: "admin",
    password: "123456",
    orderTest: 2,
    message_expect: "Contraseña erronea",
  },
];

module.exports = { Values };
