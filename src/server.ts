import { app } from './shared/infra/http/app';
import { initializeDatabase } from './shared/infra/database';

const PORT = 3333;

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Database connection error', error);
  });