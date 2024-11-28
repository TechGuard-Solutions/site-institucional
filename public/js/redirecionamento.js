function redirecionamentoErro() {
    if (sessionStorage.fkTipoUsuario == 1)  {
        window.location.href = 'erro.html';
    } 
}

function redirecionamentoCrud() {
    if (sessionStorage.fkEmpresa == 1) {
        window,location.href = 'administracaoEmpresa.html';
    }
}