import mongoose from "mongoose";
import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToDB();
    console.log("Fetching users from the database...");
    const users = await User.find();
    console.log("Users from DB:", users); // Log fetched users
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
    if (error instanceof mongoose.Error) {
      console.error("Mongoose error:", error);
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Failed to fetch users");
  }
};
