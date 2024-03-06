const { Router } = require('express')

const usersRoutes = require('./users.routes')
const contactsRoutes = require('./contacts.routes')

// const postsRoutes = require('./posts.routes')
// const tagsRoutes = require('./tags.routes')

const routes = Router()


routes.use('/users', usersRoutes)
routes.use('/contacts', contactsRoutes)

// routes.use('/notes', postsRoutes)
// routes.use('/tags', tagsRoutes)

module.exports = routes