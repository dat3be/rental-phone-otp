import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/api';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

export default app;
