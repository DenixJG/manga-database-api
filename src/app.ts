import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

const app: Application = express();

// Importamos las rutas
import indexRoutes from './routes/index.routes';
import authorRoutes from './routes/author.routes';
import artistRoutes from './routes/artist.routes';
import mangaRoutes from './routes/manga.routes';
import dashboardRoute from './routes/dashboard.routes'

// Ajustes
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors())
app.use(compression());

// Rutas
app.use('/', indexRoutes);
app.use('/api', authorRoutes);
app.use('/api', artistRoutes);
app.use('/api', mangaRoutes);
app.use('/api', dashboardRoute);

// Local data
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
