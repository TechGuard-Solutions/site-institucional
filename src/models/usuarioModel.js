var database = require("../database/config")
function cadastrarEmpresa(nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)", nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa);
    
    var instrucaoSql = `
        INSERT INTO empresa (nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa, ativo) VALUES ('${nomeEmpresa}', '${cep}', '${cnpj}', '${emailCorporativo}', '${telEmpresa}', true);
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
    console.log(
        "USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)",
        emailUsuario, senhaUsuario
    );

    // Query SQL ajustada com base no seu script SQL
    var instrucaoSql = `
        SELECT 
            usuario.idUsuario, 
            usuario.nomeUsuario, 
            usuario.emailUsuario, 
            usuario.fkEmpresa, 
            usuario.fkTipoUsuario, 
            tipoUsuario.tipo AS cargo,
            empresa.nomeEmpresa 
        FROM 
            usuario 
        JOIN 
            empresa 
        ON 
            usuario.fkEmpresa = empresa.idEmpresa 
        JOIN 
            tipoUsuario 
        ON 
            usuario.fkTipoUsuario = tipoUsuario.idTipoUsuario 
        WHERE 
            usuario.emailUsuario = '${emailUsuario}' 
        AND 
            usuario.senhaUsuario = SHA2('${senhaUsuario}', 256);
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

function listarUsuarios(fkEmpresa) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)",)
    var instrucaoSql = `SELECT u.idUsuario, u.nomeUsuario AS NomeUsuario, t.tipo AS Cargo FROM usuario u JOIN tipoUsuario t ON u.fkTipoUsuario = t.idTipoUsuario WHERE fkEmpresa = ${fkEmpresa}`; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function confirmarEdicao(idUsuario, emailUsuario, cargo) {
    var instrucaoSql = `
        UPDATE usuario
        SET emailUsuario = '${emailUsuario}', fkTipoUsuario =  ${cargo} WHERE idUsuario = '${idUsuario}';
    `;
    return database.executar(instrucaoSql);
}

function deletarUsuario(idUsuario) {
    console.log("ID do usuário para exclusão:", idUsuario);
    
    var instrucaoSql = `DELETE FROM usuario WHERE idUsuario = ${idUsuario}`;  
    return database.executar(instrucaoSql, [idUsuario]);
}

function identificarUsuario(idUsuario) {
    var instrucaoSql = `SELECT * FROM usuario WHERE idUsuario = '${idUsuario}';`;
    return database.executar(instrucaoSql);
}

function listarEmpresas() {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)",)
    var instrucaoSql = `SELECT * FROM empresa;`; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function desativarEmpresa(idEmpresa) {
    console.log("ID da para desativação:", idEmpresa);
    
    var instrucaoSql = `UPDATE empresa SET ativo = false WHERE idEmpresa = ${idEmpresa}`;  
    return database.executar(instrucaoSql, [idEmpresa]);
}

function ativarEmpresa(idEmpresa) {
    console.log("ID da para ativação:", idEmpresa);
    
    var instrucaoSql = `UPDATE empresa SET ativo = true WHERE idEmpresa = ${idEmpresa}`;  
    return database.executar(instrucaoSql, [idEmpresa]);
}

function identificarEmpresas(idEmpresa) {
    console.log("USUÁRIO MODEL: Se der ECONREFUSED, verificar credenciais de acesso ao banco, caso contrário confirme os valores:/n/n)",)
    var instrucaoSql = `SELECT * FROM empresa WHERE idEmpresa = ${idEmpresa};`; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function confirmarEdicaoEmpresa(idEmpresa, nomeEmpresa, cepEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa) {
    var instrucaoSql = `
        UPDATE empresa SET nomeEmpresa = '${nomeEmpresa}', cep =  '${cepEmpresa}', cnpj = '${cnpjEmpresa}', emailCorporativo = '${emailEmpresa}', telEmpresa = '${telEmpresa}'  WHERE idEmpresa = '${idEmpresa}';
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrarEmpresa,
    cadastrarUsuario,
    identificarEmpresa,
    listarUsuarios,
    confirmarEdicao,
    deletarUsuario,
    identificarUsuario,
    listarEmpresas,
    identificarEmpresas,
    confirmarEdicaoEmpresa,
    desativarEmpresa,
    ativarEmpresa
};