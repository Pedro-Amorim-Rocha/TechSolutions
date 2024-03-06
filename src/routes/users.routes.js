const {Router} = require("express")
const UserController = require("../controllers/UserController")
const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/",userController.create)
userRoutes.get("/",userController.listAllUser)
userRoutes.delete("/:id",userController.deleteUser)
userRoutes.put("/:id",userController.updateUser)

module.exports = userRoutes