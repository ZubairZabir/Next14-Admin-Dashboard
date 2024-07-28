import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    console.log("Connecting to MongoDB with URI:", process.env.MONGO);

    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB:", connection.isConnected);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    console.error("Connection URI:", process.env.MONGO);
    throw new Error("Failed to connect to MongoDB");
  }
};
