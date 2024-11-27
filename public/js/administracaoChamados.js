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
        <p><strong>Data:</strong> ${new Date(chamado.data).toLocaleString()}</p>
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

async function criarChamado(tema, prioridade, descricao, fk_usuario) {
  try {
      const response = await fetch("http://localhost:3333/chamados/criar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              tema,
              prioridade,
              descricao,
              fk_usuario
          })
      });
      if (!response.ok) {
        throw new Error("Erro ao criar chamado no banco.");
      }
      alert("Chamado criado com sucesso no banco e enviado!");
  } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao criar o chamado no banco de dados.");
  }
}


listarChamados();
listarChamadosNaTela();

