var database = require("../database/config")
function obterDados() {
    console.log("DASHBOARD MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)");
    
    var instrucaoSql = `
        SELECT * FROM registros;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDados,
};