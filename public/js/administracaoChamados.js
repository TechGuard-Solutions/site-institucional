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
      throw new Error("Houve um erro ao obter os chamados");
    }

    const dados = await resposta.json();
    console.log(`Chamados recebidos:`, dados);
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

async function deletarChamado(id) {
  const response = await fetch("/chamados/deletar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  });

  const data = await response.json();
  if (response.ok) {
    alert("Chamado deletado com sucesso!");
    window.reload(); 
    listarChamadosNaTela(); 
  } else {
    alert("Erro ao deletar chamado: " + data.error);
  }
}

listarChamados();
listarChamadosNaTela();

