

import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDataBase } from "./config/dbConnect.js";

dotenv.config({ path: "backend/config/config.env" });


//connecting to database
connectDataBase();


//import all routes
import productRoutes from "./routes/products.js";

app.use("/api", productRoutes)



app.listen(process.env.PORT, () => {
    console.log(`Server started on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})