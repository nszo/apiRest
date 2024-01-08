// Importamos la función getConnection del módulo "../database/database".
import { getConnection } from "../database/database";
// Definimos una función asincrónica llamada getLanguages que toma dos parámetros: req (solicitud) y res (respuesta).
const getLanguages = async (req, res) => {
  try {
    // Dentro de un bloque try-catch, obtenemos una conexión a la base de datos mediante la función getConnection.
    const connection = await getConnection();
    // Ejecutamos una consulta SQL para seleccionar los campos 'id', 'name' y 'programmers' de la tabla 'language'.
    const result = await connection.query(
      "SELECT id, name, programmers FROM language"
    );
    // Enviamos el resultado como respuesta JSON al cliente.
    res.json(result);
    // Cerramos la conexión a la base de datos.
    connection.end();
  } catch (error) {
    // En caso de que ocurra un error, lo capturamos y manejamos aquí.
    console.error("Error in getLanguages:", error);
    // Enviamos una respuesta de error al cliente con un código de estado 500 (Error interno del servidor).
    res.status(500).send("Error in servingr");
  }
};
const getLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    // Dentro de un bloque try-catch, obtenemos una conexión a la base de datos mediante la función getConnection.
    const connection = await getConnection();
    // Ejecutamos una consulta SQL para seleccionar los campos 'id', 'name' y 'programmers' de la tabla 'language'.
    const result = await connection.query(
      "SELECT id, name, programmers FROM language WHERE id =?", id
    );
    // Enviamos el resultado como respuesta JSON al cliente.
    res.json(result);
    // Cerramos la conexión a la base de datos.
    connection.end();
  } catch (error) {
    // En caso de que ocurra un error, lo capturamos y manejamos aquí.
    console.error("Error in getLanguages:", error);
    // Enviamos una respuesta de error al cliente con un código de estado 500 (Error interno del servidor).
    res.status(500).send("Error in servingr");
  }
};
const addLanguages = async (req, res) => {
  try {
    const { name, programmers } = req.body;
    if (name === undefined || programmers === undefined) {
      res.status(404).json({ message: "Bad Request. please fill all" })
    }
    const language = { name, programmers };
    // Dentro de un bloque try-catch, obtenemos una conexión a la base de datos mediante la función getConnection.
    const connection = await getConnection();
    // Ejecutamos una consulta SQL para seleccionar los campos 'id', 'name' y 'programmers' de la tabla 'language'.
    await connection.query(
      "INSERT INTO language SET ?",
      language
    );
    // Enviamos el resultado como respuesta JSON al cliente.
    res.json({ messages: "Language added" });
    // Cerramos la conexión a la base de datos.
    connection.end();
  } catch (error) {
    // En caso de que ocurra un error, lo capturamos y manejamos aquí.
    console.error("Error in getLanguages:", error);
    // Enviamos una respuesta de error al cliente con un código de estado 500 (Error interno del servidor).
    res.status(500).send("Error in servingr");
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    // Dentro de un bloque try-catch, obtenemos una conexión a la base de datos mediante la función getConnection.
    const connection = await getConnection();
    // Ejecutamos una consulta SQL para seleccionar los campos 'id', 'name' y 'programmers' de la tabla 'language'.
    const result = await connection.query(
      "DELETE FROM language WHERE id =?", id
    );
    // Enviamos el resultado como respuesta JSON al cliente.
    res.json(result);
    // Cerramos la conexión a la base de datos.
    connection.end();
  } catch (error) {
    // En caso de que ocurra un error, lo capturamos y manejamos aquí.
    console.error("Error in getLanguages:", error);
    // Enviamos una respuesta de error al cliente con un código de estado 500 (Error interno del servidor).
    res.status(500).send("Error in servingr");
  }
};

const updateLanguage = async (req, res) => {
  try {
    const { name, programmers } = req.body;
    const { id } = req.params;
    if (id === undefined || name === undefined || programmers === undefined) {
      res.status(404).json({ message: "Bad Request. please fill all" })
    }
    const language = { id, name, programmers };
    // Dentro de un bloque try-catch, obtenemos una conexión a la base de datos mediante la función getConnection.
    const connection = await getConnection();
    // Ejecutamos una consulta SQL para seleccionar los campos 'id', 'name' y 'programmers' de la tabla 'language'.
    const result = await connection.query(
      "UPDATE language SET ? WHERE id =?", [language, id]
    );
    // Enviamos el resultado como respuesta JSON al cliente.
    res.json(result);
    // Cerramos la conexión a la base de datos.
    connection.end();
  } catch (error) {
    // En caso de que ocurra un error, lo capturamos y manejamos aquí.
    console.error("Error in getLanguages:", error);
    // Enviamos una respuesta de error al cliente con un código de estado 500 (Error interno del servidor).
    res.status(500).send("Error in servingr");
  }
};

// Exportamos un objeto llamado "methods" que contiene la función getLanguages.
export const methods = {
  getLanguages,
  getLanguage,
  addLanguages,
  deleteLanguage,
  updateLanguage
};
