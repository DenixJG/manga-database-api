import express from "express";
import morgan from "morgan";
import path from "path";

const app = express();

import indexRoutes from "./routes/index";

// Ajustes
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/api", indexRoutes);

// Local data
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
