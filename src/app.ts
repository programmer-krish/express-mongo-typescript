import express from 'express';
import { connectDb } from './config/connection';
import employeeRoute from './routes/employee.routes';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

const app = express();
const swaggerDocs = require('../swagger.json');

connectDb();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', employeeRoute);
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.stack = '401';
    next(error);
});
export { app };
