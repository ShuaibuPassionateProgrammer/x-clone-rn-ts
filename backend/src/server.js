import express from "express";
import { ENV } from "./config/env.js";


const app = express();

app.listen(ENV.port, () => console.log("Server running on PORT:", ENV.port));