// import express from "express";
import express from "express";
import configViewEngine from "C:/python/backend/src/configs/viewEngine";
import initWebRoutes from "../src/routes/web";
import bodyParser from 'body-parser';

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);
// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRoutes(app);

app.listen(PORT, () => {
    console.log("COMPILED SUCCESSFULLY")
    console.log("Run", PORT);
})

