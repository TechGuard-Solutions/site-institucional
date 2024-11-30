class ModalEditarUsuario extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container-modal">
        <div class="content">
            <div class="center">
                <h3 class="tituloModal">Editar Usuário</h3>
            
            <label for="emailModal" class="labelModal">
                Email:
                <input type="text" class="inputModal" id="emailModal">
            </label>
            <label for="selectModal" class="labelModal">
                Cargo:
                <select name="" class="selectModal" id="selectModal">
                    <option value="1">Padrão</option>
                    <option value="2">Administrador</option>
                </select>
            </label>

            <div class="buttons">
                <button class="btn" onclick="salvar()">SALVAR</button>
                <button class="btn" onclick="cancelar()">CANCELAR</button>
            </div>
            </div>
        </div>
    </div>`;
    }
}
customElements.define('modal-editar', ModalEditarUsuario);