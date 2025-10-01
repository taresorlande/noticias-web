function alternar_tema() {
    document.body.classList.toggle('tema-escuro');
}

function abrirLightbox(imgElement) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = imgElement.src;
    lightbox.style.display = "flex";
}

function fecharLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

async function exibir_noticias() {
    const container = document.getElementById("noticias");
    container.innerHTML = "<p>Carregando notícias...</p>";

    try {
        const resposta = await fetch("http://localhost:3000/noticias");
        if (!resposta.ok) throw new Error("Erro ao buscar notícias");

        const noticias = await resposta.json();

        let html = "";
        noticias.forEach(noticia => {
            html += `
                <article class="noticia">
                    <button class="btn-excluir" onclick="excluirNoticia(${noticia.id})">Excluir</button>
                    <img src="../img/noticia.jpg" onclick="abrirLightbox(this)" alt="${noticia.id}">
                    <h2>${noticia.titulo}</h2>
                    <p>${noticia.conteudo}</p>
                    <small>Por ${noticia.autor} - ${new Date(noticia.data_publicacao).toLocaleDateString()}</small>
                </article>
            `;
        });

        container.innerHTML = html || "<p>Nenhuma notícia encontrada.</p>";

    } catch (erro) {
        console.error(erro);
        container.innerHTML = "<p>Erro ao carregar notícias.</p>";
    }
}

async function cadastrar_noticia() {
    const noticia = {
        titulo: document.getElementById("titulo").value,
        conteudo: document.getElementById("conteudo").value,
        autor: document.getElementById("autor").value,
        data_publicacao: document.getElementById("data_publicacao").value
    };

    try {
        const resposta = await fetch("http://localhost:3000/noticia", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(noticia)
        });

        if (!resposta.ok) throw new Error("Erro ao cadastrar notícia");

        alert("Notícia cadastrada com sucesso!");
        document.getElementById("formNoticia").reset();
        exibir_noticias(); // Recarrega a lista de notícias

    } catch (erro) {
        console.error(erro);
        alert("Falha ao cadastrar notícia.");
    }
}

async function cadastrar_noticia() {
    const noticia = {
        titulo: document.getElementById("titulo").value,
        conteudo: document.getElementById("conteudo").value,
        autor: document.getElementById("autor").value,
        data_publicacao: document.getElementById("data_publicacao").value
    };

    try {
        const resposta = await fetch("http://localhost:3000/noticia", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(noticia)
        });

        if (!resposta.ok) throw new Error("Erro ao cadastrar notícia");

        alert("Notícia cadastrada com sucesso!");
        document.getElementById("formNoticia").reset();
        exibir_noticias(); // Recarrega a lista de notícias

    } catch (erro) {
        console.error(erro);
        alert("Falha ao cadastrar notícia.");
    }
}

async function excluirNoticia(id) {
    if (!confirm(`Tem certeza que deseja excluir esta notícia?`)) return;

    try {
        const resposta = await fetch(`http://localhost:3000/noticia/${id}`, {
            method: "DELETE"
        });

        if (!resposta.ok) throw new Error("Erro ao excluir notícia");

        alert("Notícia excluída com sucesso!");
        exibir_noticias(); // recarrega a lista de notícias

    } catch (erro) {
        console.error(erro);
        alert("Erro ao excluir a notícia.");
    }
}
