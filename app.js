const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

/* Middlewares */
/* Son funciones que se ejecutan siempre que levantamos el proyecto. */
app.use(express.static("public"));

/* Cors - Middlewares */
/*  Nos permite protejer de una manera superficial el servidor. */
app.use(cors());

/* Lectura y parseo del body  */
app.use(express.json());

app.use("/api/usuarios", require("./routers/usuarios"));

app.listen(process.env.PORT);
