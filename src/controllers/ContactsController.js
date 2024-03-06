const knex = require("../database/knex")

class ContactsController {
    async create(req, res) {
        const {name, email, message} = req.body
        await knex("clientes").insert({
            name, email, message
        })
        res.status(201).json("Contato Criado com Sucesso")
    }

    async listAllContacts(req, res) {
       
        const rows = await knex('clientes').select()
        res.status(200).json(rows)
    }
}

module.exports = ContactsController