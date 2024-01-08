// Importamos la biblioteca 'promise-mysql'.
import mysql from "promise-mysql";

// Importamos el objeto de configuración de la base de datos desde el archivo '../config.js'.
import config from "../config";

// Aquí se define una función asincrónica llamada 'getConnection'.
const getConnection = async () => {
  try {
    // Dentro de un bloque 'try-catch', creamos una conexión a la base de datos utilizando las configuraciones del archivo 'config.js'.
    const connection = await mysql.createConnection({
      host: config.host,
      database: config.database,
      user: config.user,
      password: config.password,
    });

    // Devolvemos la conexión establecida.
    return connection;
  } catch (error) {
    // En caso de que ocurra un error al conectarse a la base de datos, lo capturamos y lo manejamos aquí.
    console.error("Error al obtener la conexión:", error);

    // Podemos elegir lanzar el error nuevamente o manejarlo según sea necesario para la aplicación.
    throw error; // En este caso, lanzamos el error nuevamente.
  }
};

// Exportamos la función 'getConnection' para que pueda ser utilizada en otros módulos.
export { getConnection };