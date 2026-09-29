const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
    // Reuse existing connection if ready
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    if (!process.env.MONGO_URI) {
        console.warn('⚠️ Warning: MONGO_URI is not configured in environment variables.');
        return;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        isConnected = true;
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        // Do not call process.exit(1) in serverless environments
        throw error;
    }
};

module.exports = connectDB;
