const migrationRun = require("./src/database/mysql/migrations")
require("dotenv/config")
const cors = require("cors")
const routes = require("./src/routes")

const express = require('express')

const app = express()
app.use(cors())

app.use(express.json())
app.use(routes)
migrationRun()

const SERVER_PORT = process.env.PORT || 3000

app.listen(SERVER_PORT,  () => {
    console.log(`Server is running at ${SERVER_PORT}`);
})
