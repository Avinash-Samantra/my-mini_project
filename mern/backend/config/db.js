import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		let db = process.env.MONGO_URI;
		console.log("this is db ", db)
		const conn = await mongoose.connect(`${db}`);
		// console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); 
	}
};
