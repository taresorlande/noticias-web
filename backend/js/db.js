const mysql = require('mysql2/promise')

async function conectar() {
    const conexao = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'jornal'
    });
    return conexao;
}

async function desconectar(conexao){
    conexao.end();
}

module.exports = {conectar, desconectar};