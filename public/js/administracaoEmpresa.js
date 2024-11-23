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
  container.innerHTML = ""; // Limpa o container para evitar duplicações

  usuarios.forEach((usuario) => {
    const usuarioDiv = `
        <div class="employee-item" id="employee-${usuario.idUsuario}">
          <span>${usuario.idUsuario}</span>
          <span>${usuario.NomeUsuario}</span>
          <span>${usuario.Cargo}</span>
          <button onclick="editarUsuario(${usuario.idUsuario})">Editar</button>
          <button onclick="deletarUsuario(${usuario.idUsuario})">Deletar</button>
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
    window.location.reload();
    return await res.json();
  } else {
    console.log("Houve um erro ao deletar o usuário.");
    throw new Error("Houve um erro ao deletar o usuário.");
  }
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
    listarUsuariosNaTela();
    return await res.json();
  } else {
    console.log("Houve um erro ao modificar o usuário.");
    throw new Error("Houve um erro ao modificar o usuário.");
  }
}

function cancelar() {
  modal.style.display = "none";
}

listarUsuariosNaTela();