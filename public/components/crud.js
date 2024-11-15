async function listarUsuarios() {
    try {
        const resposta = await fetch("/usuarios/listarUsuarios", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resposta.ok) {
            console.log(`Usuários recebidos:`, resposta);
            console.log("Dados obtidos com sucesso!");
            return await resposta.json();
        } else {
            console.log("Houve um erro ao obter dados!");
            throw new Error("Houve um erro ao obter dados!");
        }
    } catch (erro) {
        console.log(`#ERRO: ${erro}`);
        return null;
    }
}

async function listarUsuariosNaTela() {
    const resposta = await listarUsuarios();
    console.log(resposta);

    if (!resposta) {
        console.log("Não há dados para exibir.");
        return;
    }

    const container = document.getElementById("employee-list");
    container.innerHTML = ""; 
    let usuarioDiv = "";

    for (let i = 0; i < resposta.length; i++) {
        usuarioDiv += `
            <div class="employee-item" id="employee-${resposta[i].idUsuario}">
                <span>${resposta[i].NomeUsuario}</span>
                <span>${resposta[i].Cargo}</span>
                <button onclick="editarUsuario(${resposta[i].idUsuario})">Editar</button>
                <button onclick="deletarUsuario(${resposta[i].idUsuario})">Deletar</button>
            </div>`;
    }
    container.innerHTML = usuarioDiv;
}

function deletarUsuario(idUsuario){
    
}

listarUsuariosNaTela();
