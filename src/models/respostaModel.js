var database = require("../database/config");

function obterDados() {
    console.log("IA MODEL: Verifique se as credenciais do banco estão corretas.");

    var instrucaoSql1 = `SELECT idRespostaIA, resultado FROM respostaIA WHERE idRespostaIA = 1;`;
    var instrucaoSql2 = `SELECT idRespostaIA, resultado FROM respostaIA WHERE idRespostaIA = 2;`;
    var instrucaoSql3 = `SELECT idRespostaIA, resultado FROM respostaIA WHERE idRespostaIA = 3;`;

    return Promise.all([
        database.executar(instrucaoSql1),
        database.executar(instrucaoSql2),
        database.executar(instrucaoSql3)
    ]).then((resultados) => {
        return resultados.map(resultado => resultado[0]?.resultado || null);
    });
}

module.exports = {
    obterDados,
};