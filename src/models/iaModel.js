var database = require("../database/config");

function obterDados() {
    var instrucaoSql1 = `SELECT idPerguntaIA, prompt FROM perguntaIA WHERE idPerguntaIA = 1`;
    var instrucaoSql2 = `SELECT idPerguntaIA, prompt FROM perguntaIA WHERE idPerguntaIA = 2`;
    var instrucaoSql3 = `SELECT idPerguntaIA, prompt FROM perguntaIA WHERE idPerguntaIA = 3`;

    return Promise.all([
        database.executar(instrucaoSql1),
        database.executar(instrucaoSql2),
        database.executar(instrucaoSql3)
    ]).then((resultados) => {
        return resultados.map(resultado => resultado[0]?.prompt || null);
    });
}

module.exports = {
    obterDados,
};