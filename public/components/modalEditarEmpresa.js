class ModalEditarEmpresa extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container-modal">
        <div class="content">
            <div class="center">
                <h3 class="tituloModal">Editar Empresa</h3>
            
            <label for="nomeEmpresaModal" class="labelModal">
               NOME:
                <input type="text" class="inputModal" id="nomeEmpresaModal">
            </label>

            <label for="cepEmpresaModal" class="labelModal">
                CEP:
                <input type="text" class="inputModal" id="cepEmpresaModal">
            </label>

             <label for="cnpjEmpresaModal" class="labelModal">
                CNPJ:
                <input type="text" class="inputModal" id="cnpjEmpresaModal">
            </label>

             <label for="emailEmpresaModal" class="labelModal">
                EMAIL:
                <input type="text" class="inputModal" id="emailEmpresaModal">
            </label>

            <label for="telEmpresaModal" class="labelModal">
                TEL:
                <input type="text" class="inputModal" id="telEmpresaModal">
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
customElements.define('modal-editar-empresa', ModalEditarEmpresa);