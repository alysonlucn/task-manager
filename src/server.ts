import 'reflect-metadata';
import 'express-async-errors';

import { AppDataSource } from './shared/infra/database/dataSource';
import { app } from './shared/infra/http/app';

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');

    app.listen(3333, () => {
      console.log('Server running on port 3333');
    });
  })
  .catch(err => {
    console.error('Database connection error', err);
  });