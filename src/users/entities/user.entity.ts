import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column('character varying', { generated: 'uuid', primary: true })
  uuid: string;
  @Column('character varying')
  firstName: string;
  @Column('character varying')
  lastName: string;
  @Column('character varying', { unique: true })
  username: string;
  @Column('character varying', { unique: true })
  email: string;
  @Column('character varying')
  password: string;
  @Column('boolean', { default: true })
  isActive: boolean;
}
