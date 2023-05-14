const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const hpp = require('hpp');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');
const authorRouter = require('./routes/authors.routes');

const app = express();

const limiter = rateLimit({
  max: 100000,
  windowMS: 60 * 60 * 1000,
  message: 'too many request from this IP, please try again in one our!',
});

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(xss());
app.use(hpp());

app.use('/api/v1', limiter);

//rutas...

app.use('/api/v1/authors', authorRouter);

//expciones de rutas no encontradas...
app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

//controlador d emanejo de errores...
app.use(globalErrorHandler);

module.exports = app;
