

import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDataBase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";


dotenv.config({ path: "backend/config/config.env" });

//handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down  due to uncaught exceptions`);
    process.exit(1);
})



//connecting to database
connectDataBase();


//import all routes
import productRoutes from "./routes/products.js";

app.use("/api", productRoutes)


//using error middleware
app.use(errorMiddleware);



const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})


//handle unhandle promise promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});