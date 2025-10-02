const { conectar, desconectar } = require("./db");


async function criarTabelas() {
    const conexao = await conectar();

    let query = `
        CREATE TABLE IF NOT EXISTS noticias(
        id INT PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(250) NOT NULL,
        conteudo TEXT,
        autor VARCHAR(100),
        data_publicacao DATE
    )`
    await conexao.execute(query);
    await desconectar(conexao);
}

async function listarNoticias() {
    const conexao = await conectar();
    let query = "SELECT * FROM noticias ORDER BY data_publicacao DESC";
    const [resultado] = await conexao.execute(query);
    await desconectar(conexao);
    return resultado;
}

async function inserirNoticia(noticia) {
    const conexao = await conectar();
    let query = `
        INSERT INTO noticias (titulo, conteudo, autor, data_publicacao)
        VALUES (?, ?, ?, ?)
    `;
    let parametros = [
        noticia.titulo,
        noticia.conteudo,
        noticia.autor,
        noticia.data_publicacao
    ];
    await conexao.execute(query, parametros);
    await desconectar(conexao);
}

async function excluirNoticia(id) {
    const conexao = await conectar();
    var query = "DELETE FROM noticias WHERE id = ?";
    var parametros = [id];
    await conexao.execute(query, parametros);
    await desconectar(conexao);
}

module.exports = { listarNoticias, inserirNoticia, excluirNoticia, criarTabelas };