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
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", nomeUsuario, senhaUsuario, cpf, emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario);
    
    var instrucaoSql = `
        INSERT INTO usuario (nomeUsuario, senhaUsuario, cpf,  emailUsuario, telUsuario, fkEmpresa, fkTipoUsuario) VALUES ('${nomeUsuario}', SHA2('${senhaUsuario}', 256), '${cpf}', '${emailUsuario}', '${telUsuario}', '${fkEmpresa}', '${fkTipoUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(emailUsuario, senhaUsuario) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", emailUsuario, senhaUsuario)
    var instrucaoSql = `
        SELECT idUsuario, nomeUsuario, emailUsuario, fkEmpresa, fkTipoUsuario empresa.nomeEmpresa FROM usuario JOIN empresa on fkEmpresa = idEmpresa WHERE emailUsuario = '${emailUsuario}' AND senhaUsuario = SHA2('${senhaUsuario}', 256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function identificarEmpresa(cnpj) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", cnpj)
    var instrucaoSql = `
        SELECT idEmpresa FROM empresa WHERE cnpj = '${cnpj}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarUsuarios() {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)",)
    var instrucaoSql = 'SELECT u.idUsuario, u.nomeUsuario AS NomeUsuario, t.tipo AS Cargo FROM Usuario u JOIN tipoUsuario t ON u.fkTipoUsuario = t.idTipoUsuario;'; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarUsuario(idUsuario, nomeUsuario, emailUsuario, senhaUsuario, cargo) {
    var instrucaoSql = `
        UPDATE usuario
        SET nomeUsuario = '${nomeUsuario}', emailUsuario = '${emailUsuario}', senhaUsuario = '${senhaUsuario},fkTipoUsuario =  ${cargo} WHERE idUsuario = '${idUsuario}';
    `;
    return database.executar(instrucaoSql);
}

function deletarUsuario(idUsuario) {
    var instrucaoSql = `DELETE FROM usuario WHERE idUsuario = '${idUsuario}';`;
    return database.executar(instrucaoSql);
}

function identificarUsuario(idUsuario) {
    var instrucaoSql = `SELECT * FROM usuario WHERE idUsuario = '${idUsuario}';`;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrarEmpresa,
    cadastrarUsuario,
    identificarEmpresa,
    listarUsuarios,
    editarUsuario,
    deletarUsuario,
    identificarUsuario
};