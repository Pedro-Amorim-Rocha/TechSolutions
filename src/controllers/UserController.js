const knex = require("../database/knex")

class UserController {
    async create(req, res) {
        const {name, email, password} = req.body
        const isAdmin = false
        await knex("users").insert({
            name, email, password, isAdmin
        })
        res.status(201).json("Usuário cadastrado com sucesso")
    }

    async listAllUser(req, res) {
        const [rows] = await knex('users').select()
        res.status(200).json(rows)
    }
    async deleteUser(req, res) {
        const {id} = req.params
        await knex ('users').where({id}).delete()

        res.status(200).json("usuário Deletado com sucesso")
    }
    async updateUser(req, res) {
        const {name, email} = req.body
        const {id} = req.params
        const [user] = await knex('users').where({id})

        if(!user) {
            throw new Error()
        }
        user.name = name ?? user.name
        user.email = email ?? user.email

        await knex('users')
        .where({id})
        .update({name, email}),[user.name, user.email]
        res.status(200).json()

    }
}

module.exports = UserController