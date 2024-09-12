var database = require("../database/config")
function cadastrarEmpresa(nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa);
    
    var instrucaoSql = `
        INSERT INTO empresa (nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa) VALUES ('${nomeEmpresa}', '${cep}', '${cnpj}', '${emailCorporativo}', '${telEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarUsuario(nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", nomeUsuario,senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario);
    
    var instrucaoSql = `
        INSERT INTO usuario (nomeUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) VALUES ('${nomeUsuario}', '${cpf}', '${senhaUsuario}' '${emailUsuario}', '${telUsuario}', '${fkEmpresa}', '${fkTipoUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(email, senha) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", emailUsuario, senhaUsuario)
    var instrucaoSql = `
        SELECT idUsuario, nomeUsuario, emailUsuario, fkEmpresa FROM usuario WHERE emailUsuario = '${emailUsuario}' AND senhaUsuario = '${senhaUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrarEmpresa,
    cadastrarUsuario
};