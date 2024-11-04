class SidebarMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="menu-lateral" id="menu-lateral">
                <div class="menu-item" onclick="abrir()">
                    <span class="material-symbols-outlined">menu</span>
                    <span class="text">Fechar</span>
                </div>
                <div class="menu-item">
                    <span class="material-symbols-outlined">bar_chart</span>
                    <span class="text">Gráficos</span>
                </div>
                <div class="menu-item">
                    <span class="material-symbols-outlined">forum</span>
                    <span class="text">Chat com IA</span>
                </div>
                <div class="menu-item">
                    <span class="material-symbols-outlined">supervisor_account</span>
                    <span class="text">Usuários</span>
                </div>
                <div class="menu-item">
                    <span class="material-symbols-outlined">help</span>
                    <span class="text">Ajuda</span>
                </div>
            </div>`;
    }
}
customElements.define('sidebar-menu', SidebarMenu);

function abrir() {
    var menuLateral = document.getElementById('menu-lateral');
    menuLateral.classList.toggle('expanded');
}