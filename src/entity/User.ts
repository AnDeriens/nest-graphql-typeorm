import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Todo } from "./Todo";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  name: string

  @OneToMany(() => Todo, todo => todo.user)
  todos: Todo[]
}
