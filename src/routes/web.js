import express from "express";
import homeController from "../controler/homeController";
const router = express.Router()
    /**
     * 
     * @param {*} app : express app
     */
    ;
const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld);
    router.get("/users", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUsers);
    return app.use("/", router);
}

export default initWebRoutes;