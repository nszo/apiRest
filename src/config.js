// Importamos la función 'config' del módulo 'dotenv'.
import { config } from "dotenv";

// Llamamos a la función 'config' para cargar las variables de entorno definidas en un archivo '.env' en el proyecto.
config();

// Exportamos un objeto con las configuraciones de la base de datos.
export default {
  // La propiedad 'host' obtiene su valor de la variable de entorno 'HOST'. Si 'HOST' no está definida, se usa una cadena vacía como valor predeterminado.
  host: process.env.HOST || "",

  // La propiedad 'database' obtiene su valor de la variable de entorno 'DATABASE'. Si 'DATABASE' no está definida, se usa una cadena vacía como valor predeterminado.
  database: process.env.DATABASE || "",

  // La propiedad 'user' obtiene su valor de la variable de entorno 'USER'. Si 'USER' no está definida, se usa una cadena vacía como valor predeterminado.
  user: process.env.USER || "",

  // La propiedad 'password' obtiene su valor de la variable de entorno 'PASSWORD'. Si 'PASSWORD' no está definida, se usa una cadena vacía como valor predeterminado.
  password: process.env.PASSWORD || "",
};
