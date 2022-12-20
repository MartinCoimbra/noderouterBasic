const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { limit = 10, page = 1, ...query } = req.query;
  res.status(200).json({
    get: "Api - Controlador",
    query,
    limit: Number(limit),
    page: Number(page),
  });
};

const usuarioPost = (req, res = response) => {
  const { name } = req.body;
  res.status(200).json({
    post: "Api - Controlador",
    name,
  });
};

const usuarioPut = (req, res = response) => {
  const { id } = req.params;
  res.status(200).json({
    put: "Api - Controlador",
    id,
  });
};

const usuarioDelete = (req, res = response) => {
  res.status(200).json({ delete: "Api - Controlador" });
};

module.exports = {
  usuariosGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
};
