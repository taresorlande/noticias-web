const express = require('express');
const cors = require('cors'); // <-- Importa o CORS
const { listarNoticias, inserirNoticia, excluirNoticia } = require("./controller");

const app = express();

app.use(cors()); // <-- Habilita CORS para todas as origens
app.use(express.json());

app.get('/noticias', async (req, res) => {
    const noticias = await listarNoticias();
    res.send(noticias);
});

app.post('/noticia', async (req, res) => {
    try {
        const novaNoticia = req.body;
        await inserirNoticia(novaNoticia);
        res.status(201).send({ mensagem: 'Notícia inserida com sucesso!' });
    } catch (err) {
        res.status(500).send({ erro: err.message });
    }
});

app.delete('/noticia/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await excluirNoticia(id);
        res.status(200).send({ mensagem: 'Notícia excluída com sucesso!' });
    } catch (err) {
        res.status(500).send({ erro: err.message });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

