const {Router} = require("express")
const ContactsController = require("../controllers/ContactsController")
const checkIsAdmin = require("../middlewares/checkIsAdmin")

const contactsRoutes = Router()
const contactsController = new ContactsController()

contactsRoutes.post("/",contactsController.create)
contactsRoutes.get("/:user_id", checkIsAdmin, contactsController.listAllContacts)

module.exports = contactsRoutes
