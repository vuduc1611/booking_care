import express from "express";
import homeController from "../controllers/homeController";
import useController from "../controllers/userController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage)

    router.get('/crud', homeController.getCRUD)
    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayGetCRUD)
    router.get('/edit-crud', homeController.getEditCRUD)

    router.post('/put-crud', homeController.putCRUD)
    router.get('/delete-crud', homeController.deleteCRUD)

    router.post('/api/login', useController.handleLogin)
    router.get('/api/get-all-users', useController.handleGetAllUsers)
    router.post('/api/create-new-user', useController.handleCreateNewUser)
    router.put('/api/edit-user', useController.handleEditUser)
    router.delete('/api/delete-user', useController.handleDeleteUser) // REST API



    return app.use("/", router);
}

module.exports = initWebRoutes;