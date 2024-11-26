console.log('javascript rodando')

async function listarChamados() {
  try {
    const resposta = await fetch("/chamados/listar", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (!resposta.ok) {
      console.error(
        "Erro ao listar chamados:",
        resposta.status,
        resposta.statusText
      );
      throw new Error("Houve um erro ao obter os dados dos usuários.");
    }

    const dados = await resposta.json();
    console.log(`Usuários recebidos:`, dados);
    console.log("Dados obtidos com sucesso!");
    return dados;
  } catch (erro) {
    console.error(`#ERRO: ${erro}`);
    return null;
  }
}

async function listarChamadosNaTela() {
  const chamados = await listarChamados();

  const listContainer = document.getElementById("chamado-list");
  listContainer.innerHTML = ""; 

  chamados.forEach(chamado => {
    const chamadoDiv = `
      <div class="chamado-item">
        <p><strong>ID:</strong> ${chamado.id}</p>
        <p><strong>Descrição:</strong> ${chamado.descricao}</p>
        <p><strong>Prioridade:</strong> ${chamado.prioridade}</p>
        <p><strong>Tema:</strong> ${chamado.tema}</p>
        <p><strong>Data:</strong> ${new Date(chamado.data).toLocaleDateString()}</p>
        <button onclick="deletarChamado('${chamado.id}')">Deletar</button>
      </div>
    `;
    listContainer.innerHTML += chamadoDiv;
  });
  console.log("Chamados exibidos na tela.");
}

// Função para deletar um chamado
async function deletarChamado(id) {
  const response = await fetch("/chamados/deletar", {
    method: "POST", // Agora estamos utilizando POST
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }) // Passamos o ID no corpo da requisição
  });

  const data = await response.json();
  if (response.ok) {
    alert("Chamado deletado com sucesso!");
    listarChamadosNaTela(); // Atualiza a lista de chamados
  } else {
    alert("Erro ao deletar chamado: " + data.error);
  }
}

listarChamados();
listarChamadosNaTela();

