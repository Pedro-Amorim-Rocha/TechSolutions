const knex = require("../database/knex")

async function checkIsAdmin(req,res, next) {
    const {user_id} = req.params
    const user = await knex("users").where({id: user_id}).first()
    if (!user) {
        return res.status(400).json("Usuario não encontrado!")
    }
    if(user.isAdmin === 0) {
        return res.status(401).json("Você não tem acesso a este recurso!")
    }
    next()
}
module.exports = checkIsAdmin