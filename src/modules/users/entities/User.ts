import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
import { Task } from '../../tasks/entities/Task';

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id?: string;

  @Column()
  name?: string;

  @Column({ unique: true })
  email?: string;

  @Column()
  password!: string;

  @OneToMany(() => Task, task => task.user)
  tasks!: Task[];

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}