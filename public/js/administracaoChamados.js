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
        <p><strong>Usuário:</strong> ${chamado.nomeUsuario}</p>
        <p><strong>Email:</strong> ${chamado.emailUsuario}</p>
        <button onclick="deletarChamado('${chamado.id}')">Deletar</button>
      </div>
    `;
    listContainer.innerHTML += chamadoDiv;
  });
  console.log("Chamados exibidos na tela.");
}

async function deletarChamado(id) {
  try {
    const response = await fetch("/chamados/deletar", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idServer: id })
    });

    if (response.ok) {
      Swal.fire({
        title: "Chamado deletado com sucesso!",
        color: "#4ADC7C",
        background: "#10161c",
        confirmButtonColor: "#10161c",
        customClass: {
          confirmButton: 'meu-botao',
          popup: 'meu-alerta',
          icon: 'meu-icone'
        }
      });
      window.location.reload();
    } else {
      const data = await response.json();
      Swal.fire({
        title: `Erro ao deletar chamado! ${data.error || ''}`,
        icon: "error",
        color: "#f4796b",
        background: "#10161c",
        confirmButtonColor: "#10161c",
        customClass: {
          confirmButton: 'meu-botao',
          popup: 'meu-alerta',
          icon: 'meu-icone'
        }
      });
    }
  } catch (error) {
    Swal.fire({
      title: "Erro ao deletar chamado!",
      text: error.message || "Ocorreu um erro inesperado.",
      icon: "error",
      color: "#f4796b",
      background: "#10161c",
      confirmButtonColor: "#10161c",
      customClass: {
        confirmButton: 'meu-botao',
        popup: 'meu-alerta',
        icon: 'meu-icone'
      }
    });
  }
}


async function criarChamado(tema, prioridade, descricao, fk_usuario, nome_usuario, email_usuario) {
  try {
      const response = await fetch("http://localhost:3333/chamados/criar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              nome_usuario,
              email_usuario,
              tema,
              prioridade,
              descricao,
              fk_usuario
          })
      });
      if (!response.ok) {
        throw new Error("Erro ao criar chamado no banco.");
      }
      // alert("Chamado criado com sucesso no banco e enviado!");
      Swal.fire({
        title: "Chamado criado com sucesso!",
        color: "#4ADC7C",
        background: "#10161c",
        confirmButtonColor: "#10161c",
        customClass: {
            confirmButton: 'meu-botao',
            popup: 'meu-alerta',
            icon: 'meu-icone'
        }
    });
      
  } catch (error) {
      console.error("Erro:", error);
      Swal.fire({
        title: "Erro ao criar o chamado!",
        icon: "error",
        color: "#f4796b",
        background: "#10161c",
        confirmButtonColor: "#10161c",
        customClass: {
            confirmButton: 'meu-botao',
            popup: 'meu-alerta',
            icon: 'meu-icone'
        }
    });
      // alert("Erro ao criar o chamado no banco de dados.");
  }
}


listarChamados();
listarChamadosNaTela();

