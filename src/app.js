// Importamos los módulos necesarios
import express from "express"; // Importamos el framework Express
import morgan from "morgan"; // Importamos el middleware Morgan para el registro de solicitudes
import languageRoutes from "./routes/language.routes"; // Importamos las rutas relacionadas con los idiomas

// Creamos una instancia de la aplicación Express
const app = express();

// Configuración de la aplicación
app.set("port", 4000); // Establecemos el puerto en el que la aplicación escuchará

// Middleware
app.use(morgan("dev")); // Usamos el middleware Morgan para el registro detallado de solicitudes HTTP
app.use(express.json());

// Configuramos las rutas
app.use("/api/languages", languageRoutes); // Las rutas definidas en languageRoutes estarán bajo el prefijo "/api/languages"

// Exportamos la instancia de la aplicación Express como un módulo para su uso en otros archivos
export default app;
