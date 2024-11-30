class SidebarMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="menu-lateral" id="menu-lateral">
                <div class="menu-item" onclick="abrir()">
                    <span class="material-symbols-outlined">menu</span>
                    <span class="text">Fechar</span>
                </div>
                <div class="menu-item">
                    <span class="material-symbols-outlined" onclick="window.location.href='dashboard.html'">bar_chart</span>
                    <span class="text" onclick="window.location.href='dashboard.html'">Gráficos</span>
                </div>
                <div class="menu-item">
                    <span class="material-symbols-outlined" onclick="window.location.href='chat.html'">forum</span>
                    <span class="text" onclick="window.location.href='chat.html'">Chat com IA</span>
                </div>
                <div class="menu-item">
                    <span class="material-symbols-outlined" onclick="redirecionamentoCrud()">supervisor_account</span>
                    <span class="text" onclick="redirecionamentoCrud()">Administração</span>
                </div>
                <div class="menu-item">
                    <span class="material-symbols-outlined" onclick="window.location.href='suporte.html'">help</span>
                    <span class="text" onclick="window.location.href='suporte.html'">Ajuda</span>
                </div>
                <div class="menu-item">
                    <span class="material-symbols-outlined" onclick="sair()">logout</span>
                    <span class="text" onclick="sair()'">Sair</span>
                </div>
            </div>`;
    }
}
customElements.define('sidebar-menu', SidebarMenu);

function abrir() {
    var menuLateral = document.getElementById('menu-lateral');
    menuLateral.classList.toggle('expanded');
}

function sair() {
    sessionStorage.clear();
    window.location.href='index.html';
}

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