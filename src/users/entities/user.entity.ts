// src/users/entities/user.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string; // Make sure to hash the password before saving it
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
