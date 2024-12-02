function goToAddUser() {
  window.location.href = "./adicionarUsuario.html";
}

async function listarUsuarios() {
  nomeUsuario.innerHTML = sessionStorage.nomeUsuario;
  cargoUsuario.innerHTML = sessionStorage.cargo;
  try {
    const resposta = await fetch("/usuarios/listarUsuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fkEmpresaServer: sessionStorage.fkEmpresa,
      }),
    });

    if (!resposta.ok) {
      console.error(
        "Erro ao listar usuários:",
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

async function listarUsuariosNaTela() {
  const usuarios = await listarUsuarios();

  if (!usuarios) {
    console.log("Não há dados para exibir.");
    return;
  }

  const container = document.getElementById("employee-list");
  container.innerHTML = ""; // Limpa o container para evitar 

  usuarios.forEach((usuario) => {
    const usuarioDiv = `
      <div class="employee-item">
        <div class="id-usuario"> 
          <span>${usuario.idUsuario}</span>
        </div>
        <div class="nome-usuario"> 
          <span>${usuario.NomeUsuario}</span>
        </div>
        <div class="cargo-usuario"> 
          <span>${usuario.Cargo}</span>
        </div>
        <div class="acoes">
          <button onclick="editarUsuario(${usuario.idUsuario})">
            <img src="./assets/pontos.png" alt="Editar" width="20px"/>
          </button>
          <button onclick="deletarUsuario(${usuario.idUsuario})">
            <img src="./assets/excluir.png" alt="Excluir" width="20px"/>
          </button>
        </div>
      </div>
    `;

   container.innerHTML += usuarioDiv;
  });  
}

async function identificarUsuario(idUsuario) {
  try {
    const resposta = await fetch(`/usuarios/identificarUsuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuarioServer: idUsuario,
      }),
    });

    if (!resposta.ok) {
      console.error(
        "Erro ao identificar usuário:",
        resposta.status,
        resposta.statusText
      );
      throw new Error("Houve um erro ao identificar o usuário.");
    }

    const usuario = await resposta.json();
    console.log("Usuário identificado:", usuario);
    return usuario;
  } catch (erro) {
    console.error(`#ERRO: ${erro}`);
    return null;
  }
}

async function deletarUsuario(idUsuario) {
  if (idUsuario === undefined || idUsuario === null) {
    console.error("ID de usuário inválido");
    return;
  }
  const res = await fetch(`/usuarios/deletarUsuario`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idUsuarioServer: idUsuario,
    }),
  });
  if (res.ok) {
    console.log("teste");
    console.log(`Usuário com ID ${idUsuario} deletado com sucesso!`);
    Swal.fire({
      title: "Usuário deletado com sucesso!",
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
    return await res.json();
  } else {
    console.log("Houve um erro ao deletar o usuário.");
    Swal.fire({
      title: "Erro ao deletar usuário!",
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
    throw new Error("Houve um erro ao deletar o usuário.");
  }
}

function cancelar() {
  modal.style.display = "none";
}

async function editarUsuario(idUsuario) {
  const usuario = await identificarUsuario(idUsuario);
  modal.style.display = "flex";
  emailModal.value = usuario.emailUsuario;
  selectModal.value = usuario.fkTipoUsuario;

  sessionStorage.idDoUsuarioIdentificado = usuario.idUsuario;
}

function salvar() {
  var idUsuario = sessionStorage.idDoUsuarioIdentificado;
  var emailUsuario = emailModal.value;
  var cargo = selectModal.value;
  console.log(idUsuario, emailUsuario, cargo);
  Swal.fire({
    title: "Você quer salvar as alterações desse usuário?",
    showDenyButton: true,
    confirmButtonText: "Salvar",
    denyButtonText: `Cancelar`,
    color: "#4ADC7C",
    background: "#10161c",
    confirmButtonColor: "#10161c",
    denyButtonColor: "#10161c",
    customClass: {
      confirmButton: "meu-botao",
      denyButton: "meu-botao",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      confirmarEdicao(idUsuario, emailUsuario, cargo);
      modal.style.display = "none";
      
    }
  });
}

async function confirmarEdicao(idUsuario, emailUsuario, cargo) {
  if (idUsuario === undefined || idUsuario === null) {
    console.error("ID de usuário inválido");
    return;
  }
  const res = await fetch(`/usuarios/confirmarEdicao`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idUsuarioServer: idUsuario,
      emailUsuarioServer: emailUsuario,
      fkTipoUsuarioServer: cargo,
    }),
  });
  if (res.ok) {
    console.log(`Usuário com ID ${idUsuario} modificado com sucesso!`);
    Swal.fire({
      title: "Usuário modificado com sucesso!",
      color: "#4ADC7C",
      background: "#10161c",
      confirmButtonColor: "#10161c",
      customClass: {
          confirmButton: 'meu-botao',
          popup: 'meu-alerta',
          icon: 'meu-icone'
      }
  });
    listarUsuariosNaTela();
    return await res.json();
  } else {
    console.log("Houve um erro ao modificar o usuário.");
    Swal.fire({
      title: "Erro ao modificar chamado!",
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
    throw new Error("Houve um erro ao modificar o usuário.");
  }
}

function cancelar() {
  modal.style.display = "none";
}

listarUsuariosNaTela();
