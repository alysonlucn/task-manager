import { AppDataSource } from './dataSource';

export async function initializeDatabase(): Promise<void> {
  await AppDataSource.initialize();
  console.log('Database connected');
}