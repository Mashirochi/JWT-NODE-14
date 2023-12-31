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
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUsers);
    router.post("/delete-user/:id", homeController.handleDeleteUser);
    router.get("/update-user/:id", homeController.getUpdateUserPage);
    router.post("/users/update-user", homeController.handleUpdateUser);
    return app.use("/", router);
}

export default initWebRoutes;