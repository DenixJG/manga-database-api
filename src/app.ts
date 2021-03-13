import express from "express";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import compression from "compression";

const app = express();

import mangaRoutes from "./routes/manga.routes";
import indexRoutes from "./routes/index.routes";

// Ajustes
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
app.use(compression())

// Rutas
app.use("/api", mangaRoutes);
app.use("/", indexRoutes);

// Local data
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
