import { Field, Int, ObjectType } from "@nestjs/graphql";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";

@Entity()
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column('varchar')
  @Field(() => String)
  title: string

  @Column()
  userId: number

  @ManyToOne(() => User, user => user.todos)
  @JoinColumn({ name: 'userId' })
  user: User
}
