// Import the Mongoose library to interact with MongoDB
import mongoose from 'mongoose';

// Check if a cached connection already exists on the global object 
let cached = global.mongoose;

if (!cached) {
    // If no cached object, initialize one with null connection and promise
    cached = global.mongoose = { conn: null, promise: null }; 
}

// Async function to connect to MongoDB
async function ConnectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false, // bufferCommands: false prevents Mongoose from storing operations in a queue while the connection is still being established
        };

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/ecom`, opts).then(mongoose => {
            return mongoose; 
        }); 
    }

    cached.conn = await cached.promise;

    return cached.conn;
}


export default ConnectDB;