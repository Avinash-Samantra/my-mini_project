import express from "express";
import 'dotenv/config'
import cors from "cors";
import path from "path";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";


const app = express();


const __dirname = path.resolve();

app.use(express.json()); 
app.use(cors());
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
	});
}
let port = process.env.PORT;
app.listen(port, () => {
	connectDB();
	console.log("Server started at " + port);
});
