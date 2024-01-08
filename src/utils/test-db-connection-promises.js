// Importar el paquete promise-mysql
const mysql = require("promise-mysql");

// Función asíncrona para probar la conexión y realizar una consulta
async function testDatabaseConnection() {
  let connection;
  try {
    // Crear una conexión a la base de datos
    connection = await mysql.createConnection({
      host: "localhost", // o la dirección IP si es remoto
      user: "root",
      password: "tu_contraseña", // Reemplaza con la contraseña real
      database: "tu_base_de_datos", // Reemplaza con el nombre de tu base de datos
    });

    // Mostrar mensaje de conexión exitosa
    console.log("Conexión exitosa a la base de datos.");

    // Realizar una consulta de prueba
    const result = await connection.query("SELECT 1 + 1 AS solution");
    console.log(
      "El resultado de la prueba de la consulta es: ",
      result[0].solution
    );
  } catch (err) {
    // Manejar cualquier error que ocurra durante la conexión o la consulta
    console.error("Error al conectar a la base de datos:", err);
  } finally {
    // Cerrar la conexión si existe
    if (connection) connection.end();
  }
}

// Ejecutar la función de prueba
testDatabaseConnection();
