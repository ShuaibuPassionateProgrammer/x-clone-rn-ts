import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.listen(ENV.port, () => console.log("Server running on PORT:", ENV.port));