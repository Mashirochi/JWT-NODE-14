// import express from "express";
import express from "express";
import configViewEngine from "C:/python/backend/src/configs/viewEngine";
import initWebRoutes from "../src/routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("Run", PORT);
})