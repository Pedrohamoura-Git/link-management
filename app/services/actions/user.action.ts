"use server";

import { connectToDB } from "../mongoose";
import User, { UserSchemaType } from "../models/user.model";
import mongoose from "mongoose";

interface params extends UserSchemaType {}

export async function createUser({
  username,
  name,
  email,
  password,
}: params): Promise<void> {
  connectToDB();

  try {
    await User.create({
      _id: new mongoose.Types.ObjectId(),
      username: username.toLowerCase(),
      name,
      email,
      password,
    });

    console.log(`Successfully create user : [${username}]`);
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}
