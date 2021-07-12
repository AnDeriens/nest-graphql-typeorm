import { Field, Int, ObjectType } from "@nestjs/graphql";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Todo } from "./Todo";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column('varchar')
  @Field(() => String)
  name: string

  @OneToMany(() => Todo, todo => todo.user)
  @Field(() => [Todo], {
    nullable: true
  })
  todos: Todo[]
}
