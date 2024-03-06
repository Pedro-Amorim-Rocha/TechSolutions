const { pool } = require('../..')
const createUsers = require('../../mysql/migrations/createUsers')

async function migrationRun() {
    const schemas = [createUsers].join('')

    const tableName = `users`; 

    const verifyTableExists = `SHOW TABLES LIKE '${tableName}'`

    pool.execute(verifyTableExists, (err, results) => {
        if (err) {
            console.error('Erro ao Verificar a Existência da Tabela', err)
            pool.end()
            return;
        }
        if (results.length === 0) {
            pool.execute(schemas, (err) => {
                if (err) {
                    console.error('Erro ao criar a tabela', err)
                }
                else {
                    console.log("Tabela Criada com sucesso");
                }

            }
            )
        }
    }
    )
}

module.exports = migrationRun