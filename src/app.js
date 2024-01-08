import express from "express";
import morgan from "morgan";
import languageRoutes from "./routes/language.routes";

const app = express();
app.set("port", 4000);
app.use(morgan("dev"));
app.use(languageRoutes);
export default app;
