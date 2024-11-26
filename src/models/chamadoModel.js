var database = require("../database/config");

// Função para gerar um ID aleatório com letras e números de 6 dígitos
function gerarIdChamado() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
        id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return id;
}

function cadastrarChamado(descricao, prioridade, fk_usuario, tema) {
    console.log("CHAMADO MODEL: Cadastrando chamado com os valores:", descricao, prioridade, fk_usuario, tema);
    const idChamado = gerarIdChamado();

    var instrucaoSql = `
        INSERT INTO chamados (id, descricao, prioridade, fk_usuario, tema) 
        VALUES ('${idChamado}', '${descricao}', '${prioridade}', '${fk_usuario}', '${tema}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarChamados() {
    console.log("CHAMADO MODEL: Listando todos os chamados...");
    
    var instrucaoSql = `
        SELECT 
            id, 
            descricao, 
            prioridade, 
            fk_usuario, 
            tema, 
            data
        FROM 
            chamados;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarChamado(idChamado) {
    console.log("ID do chamado para exclusão:", idChamado);
    
    var instrucaoSql = `DELETE FROM chamados WHERE id = '${idChamado}'`;  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function identificarChamado(idChamado) {
    console.log("ID do chamado para busca:", idChamado);
    
    var instrucaoSql = `SELECT * FROM chamados WHERE id = '${idChamado}';`;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarChamado,
    listarChamados,
    deletarChamado,
    identificarChamado
};
