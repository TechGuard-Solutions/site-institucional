var database = require("../database/config");

function cadastrarEmpregado(nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario);
    
    var instrucaoSql = `
        INSERT INTO usuario (nomeUsuario, senhaUsuario, cpf,  emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) VALUES ('${nomeUsuario}', SHA2('${senhaUsuario}', 256), '${cpf}', '${emailUsuario}', '${telUsuario}', '${fkEmpresa}', '${fkTipoUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function alterarEmpregado(nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario);
    
    var instrucaoSql = `
        INSERT INTO usuario (nomeUsuario, senhaUsuario, cpf,  emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) VALUES ('${nomeUsuario}', SHA2('${senhaUsuario}', 256), '${cpf}', '${emailUsuario}', '${telUsuario}', '${fkEmpresa}', '${fkTipoUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function removerEmpregado(nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario);
    
    var instrucaoSql = `
        INSERT INTO usuario (nomeUsuario, senhaUsuario, cpf,  emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) VALUES ('${nomeUsuario}', SHA2('${senhaUsuario}', 256), '${cpf}', '${emailUsuario}', '${telUsuario}', '${fkEmpresa}', '${fkTipoUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarEmpregados(nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario);
    
    var instrucaoSql = `
        INSERT INTO usuario (nomeUsuario, senhaUsuario, cpf,  emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) VALUES ('${nomeUsuario}', SHA2('${senhaUsuario}', 256), '${cpf}', '${emailUsuario}', '${telUsuario}', '${fkEmpresa}', '${fkTipoUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarEmpregado,
    alterarEmpregado,
    removerEmpregado,
    listarEmpregados
};