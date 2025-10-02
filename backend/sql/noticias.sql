CREATE DATABASE IF NOT EXISTS jornal;
USE jornal;

DROP TABLE noticias;
CREATE TABLE IF NOT EXISTS noticias(
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(250) NOT NULL,
    conteudo TEXT,
    autor VARCHAR(100),
    data_publicacao DATE
);

SELECT * FROM noticias ORDER BY data_publicacao DESC;

INSERT INTO noticias (titulo,conteudo,autor,data_publicacao) VALUES ('Na Pressa', 'Homem sai de carro sem perceber que deixou a família para tras', 'Victor Henrrique', '2025-08-05');

INSERT INTO noticias (titulo,conteudo,autor,data_publicacao) VALUES 
('Tecnologia em Alta', 'Nova inteligência artificial promete revolucionar o mercado de trabalho', 'Ana Paula Costa', '2025-08-06'),
('Mercado Financeiro', 'Bolsa de valores fecha em alta após anúncio de medidas econômicas', 'Marcos Silva', '2025-08-06'),
('Esportes ao Vivo', 'Time local conquista vitória histórica em campeonato nacional', 'Carla Mendes', '2025-08-07'),
('Saúde em Foco', 'Pesquisadores desenvolvem vacina promissora contra doença rara', 'João Pedro Alves', '2025-08-07'),
('Educação Digital', 'Plataforma online oferece cursos gratuitos para estudantes', 'Fernanda Rocha', '2025-08-08'),
('Clima Extremo', 'Tempestade causa estragos em diversas cidades do interior', 'Lucas Martins', '2025-08-08'),
('Mundo Animal', 'Onça-pintada é resgatada após aparecer em área urbana', 'Patrícia Gomes', '2025-08-09'),
('Política em Debate', 'Congresso discute novas reformas para o próximo ano', 'Ricardo Oliveira', '2025-08-09'),
('Cinema e Cultura', 'Filme nacional estreia com grande bilheteria no primeiro fim de semana', 'Mariana Ferreira', '2025-08-10'),
('Trânsito Intenso', 'Rodovias registram congestionamento durante o feriado prolongado', 'Thiago Santos', '2025-08-10'),
('Avanço Científico', 'Cientistas descobrem molécula que pode prolongar a vida humana', 'Gabriela Souza', '2025-08-11'),
('Música no Topo', 'Cantor brasileiro alcança primeiro lugar em ranking internacional', 'André Lima', '2025-08-11'),
('Economia Local', 'Feira de pequenos produtores movimenta comércio regional', 'Sofia Almeida', '2025-08-12'),
('Segurança Pública', 'Operação policial resulta em queda de índice criminal na capital', 'Felipe Araújo', '2025-08-12'),
('Turismo em Crescimento', 'Cidade histórica recebe número recorde de visitantes em agosto', 'Isabela Nunes', '2025-08-13');
