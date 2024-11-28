var database = require("../database/config");

function cadastrarEmpresa(nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa, fkPlano) {
    var instrucao = `
        INSERT INTO empresa (nomeEmpresa, cep, cnpj, emailCorporativo, telEmpresa, fkPlano) 
        VALUES ('${nomeEmpresa}', '${cep}', '${cnpj}', '${emailCorporativo}', '${telEmpresa}', ${fkPlano});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarEmpresas() {
    var instrucao = `
        SELECT e.*, p.nomePlano 
        FROM empresa e
        LEFT JOIN plano p ON e.fkPlano = p.idPlano
        ORDER BY e.nomeEmpresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarEmpresaPorId(idEmpresa) {
    var instrucao = `
        SELECT e.*, p.nomePlano 
        FROM empresa e
        LEFT JOIN plano p ON e.fkPlano = p.idPlano
        WHERE e.idEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarEmpresa(idEmpresa, nomeEmpresa, emailCorporativo, telEmpresa, cep, fkPlano) {
    var instrucao = `
        UPDATE empresa SET 
            nomeEmpresa = '${nomeEmpresa}',
            emailCorporativo = '${emailCorporativo}',
            telEmpresa = '${telEmpresa}',
            cep = '${cep}',
            fkPlano = ${fkPlano}
        WHERE idEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarEmpresa(idEmpresa) {
    // Primeiro, verificamos se existem usuários vinculados
    var verificacao = `
        SELECT COUNT(*) as total FROM Usuario WHERE fkEmpresa = ${idEmpresa};
    `;
    
    return database.executar(verificacao)
        .then(resultado => {
            if (resultado[0].total > 0) {
                throw new Error("Não é possível deletar a empresa pois existem usuários vinculados.");
            }
            
            // Se não houver usuários, podemos deletar a empresa
            var instrucao = `
                DELETE FROM empresa WHERE idEmpresa = ${idEmpresa};
            `;
            return database.executar(instrucao);
        });
}

function buscarEmpresaPorCNPJ(cnpj) {
    var instrucao = `
        SELECT * FROM empresa WHERE cnpj = '${cnpj}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Função adicional para listar empresas com estatísticas
function listarEmpresasComEstatisticas() {
    var instrucao = `
        SELECT 
            e.*,
            p.nomePlano,
            COUNT(u.idUsuario) as totalUsuarios
        FROM empresa e
        LEFT JOIN plano p ON e.fkPlano = p.idPlano
        LEFT JOIN Usuario u ON e.idEmpresa = u.fkEmpresa
        GROUP BY e.idEmpresa, e.nomeEmpresa
        ORDER BY e.nomeEmpresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarEmpresa,
    listarEmpresas,
    buscarEmpresaPorId,
    atualizarEmpresa,
    deletarEmpresa,
    buscarEmpresaPorCNPJ,
    listarEmpresasComEstatisticas
};