function redirecionamentoErro() {
    if (sessionStorage.fkTipoUsuario == 1)  {
        window.location.href = 'erro.html';
    } 
}

function redirecionamentoCrud() {
    if (sessionStorage.fkEmpresa == 1) {
        window.location.href = 'redirecionamento.html';
    } else {
        window.location.href = 'administracaoUsuario.html';
    }
}

function redirecionamentoErroParaEmpresas() {
    if (sessionStorage.fkEmpresa != 1 || sessionStorage.fkTipoUsuario != 2)  {
        window.location.href = 'erro.html';
    } 
}