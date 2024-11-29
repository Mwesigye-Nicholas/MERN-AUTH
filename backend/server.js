import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectBD from "./config/db.js";
const port = process.env.PORT || 5000;
connectBD();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("Server is ready"));

//* Error handling Middleware.
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}...`));
//* POST /api/users** Register a users
//* POST /api/users/auth** Authenticate a user and get token
//* POST /api/users/logout** logout user and clear cookie
//* GET /api/users/profile** Get user profile
//* PUT /api/users/profile** Update profile
