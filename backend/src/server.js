import express from "express";
import { ENV } from "./config/env.js"

const app = express();

app.listen(5001, () => console.log("Server running on PORT:5001"));