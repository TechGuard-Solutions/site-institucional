async function listarEmpresas() {
    try {
        const resposta = await fetch("/empresas/listar", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!resposta.ok) {
            console.error(
                "Erro ao listar empresas:",
                resposta.status,
                resposta.statusText
            );
            throw new Error("Houve um erro ao obter os dados das empresas.");
        }

        const dados = await resposta.json();
        console.log("Empresas recebidas:", dados);
        return dados;
    } catch (erro) {
        console.error(`#ERRO: ${erro}`);
        return null;
    }
}

async function listarEmpresasNaTela() {
    const empresas = await listarEmpresas();

    if (!empresas) {
        console.log("Não há dados para exibir.");
        return;
    }

    const container = document.getElementById("company-list");
    container.innerHTML = ""; 

    empresas.forEach((empresa) => {
        const empresaDiv = `
        <div class="company-item" id="company-${empresa.idEmpresa}">
          <span>${empresa.idEmpresa}</span>
          <span>${empresa.nomeEmpresa}</span>
          <span>${empresa.cnpj}</span>
          <button onclick="editarEmpresa(${empresa.idEmpresa})">Editar</button>
          <button onclick="deletarEmpresa(${empresa.idEmpresa})">Deletar</button>
        </div>
      `;
        container.innerHTML += empresaDiv;
    });
}

async function adicionarEmpresa(novaEmpresa) {
    try {
        const resposta = await fetch("/empresas/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novaEmpresa),
        });

        if (resposta.ok) {
            console.log("Empresa adicionada com sucesso!");
            listarEmpresasNaTela();
        } else {
            console.log("Houve um erro ao adicionar a empresa.");
            throw new Error("Houve um erro ao adicionar a empresa.");
        }
    } catch (erro) {
        console.error(`#ERRO: ${erro}`);
    }
}

async function identificarEmpresa(idEmpresa) {
    try {
        const resposta = await fetch(`/empresas/buscar/${idEmpresa}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resposta.ok) {
            const empresa = await resposta.json();
            console.log("Empresa identificada:", empresa);
            return empresa;
        } else {
            console.log("Erro ao identificar empresa.");
            throw new Error("Erro ao identificar empresa.");
        }
    } catch (erro) {
        console.error(`#ERRO: ${erro}`);
        return null;
    }
}

async function editarEmpresa(idEmpresa) {
    const empresa = await identificarEmpresa(idEmpresa);
    modal.style.display = "flex";
    nomeEmpresaModal.value = empresa.nomeEmpresa;
    emailCorporativoModal.value = empresa.emailCorporativo;

    sessionStorage.idDaEmpresaIdentificada = empresa.idEmpresa;
}

async function confirmarEdicaoEmpresa(idEmpresa, nomeEmpresa, emailCorporativo) {
    try {
        const resposta = await fetch(`/empresas/atualizar/${idEmpresa}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeEmpresa: nomeEmpresa,
                emailCorporativo: emailCorporativo,
            }),
        });

        if (resposta.ok) {
            console.log(`Empresa com ID ${idEmpresa} modificada com sucesso!`);
            listarEmpresasNaTela();
        } else {
            console.log("Houve um erro ao modificar a empresa.");
            throw new Error("Houve um erro ao modificar a empresa.");
        }
    } catch (erro) {
        console.error(`#ERRO: ${erro}`);
    }
}

async function deletarEmpresa(idEmpresa) {
    if (!idEmpresa) {
        console.error("ID de empresa inválido");
        return;
    }
    try {
        const resposta = await fetch(`/empresas/deletar/${idEmpresa}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resposta.ok) {
            console.log(`Empresa com ID ${idEmpresa} deletada com sucesso!`);
            listarEmpresasNaTela();
        } else {
            console.log("Houve um erro ao deletar a empresa.");
            throw new Error("Houve um erro ao deletar a empresa.");
        }
    } catch (erro) {
        console.error(`#ERRO: ${erro}`);
    }
}

listarEmpresasNaTela();
