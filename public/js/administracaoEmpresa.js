async function listarEmpresas() {
  try {
    const resposta = await fetch("/usuarios/listarEmpresas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
    console.log(`Empresas recebidas:`, dados);
    console.log("Dados obtidos com sucesso!");
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
  const container = document.getElementById("employee-list");
  container.innerHTML = ""; // Limpa o container para evitar duplicações
  var isActive = "";
  empresas.forEach((empresa) => {
    // Quando for estilizar, coloque o ativo como "STATUS"
    if (!empresa.ativo) {
      isActive = "Inativo";
    } else {
      isActive = "Ativo"
    };
    const usuarioDiv = `
        <div class="employee-item" id="employee-${empresa.idEmpresa}">
          <div class="div-usuario"> 
          <div class="id-usuario"> 
          <span>${empresa.idEmpresa}</span>
          <span>${empresa.nomeEmpresa}</span>
          <span>${empresa.cep}</span>
          <span>${empresa.cnpj}</span>
          <span>${empresa.emailCorporativo}</span>
          <span>${empresa.telEmpresa}</span>
          <span>${isActive}</span>
          <button onclick="editarEmpresa(${empresa.idEmpresa})">Editar</button>
          <button onclick="ativarEmpresa(${empresa.idEmpresa})">Ativar</button>
          <button onclick="desativarEmpresa(${empresa.idEmpresa})">Desativar</button>
        </div>
      `;
    container.innerHTML += usuarioDiv;
  });
}
async function desativarEmpresa(idEmpresa) {
  if (idEmpresa === undefined || idEmpresa === null) {
    console.error("ID de empresa inválido");
    return;
  }
  const res = await fetch(`/usuarios/desativarEmpresa`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idEmpresaServer: idEmpresa,
    }),
  });
  if (res.ok) {
    console.log(`Empresa com ID ${idEmpresa} desativado com sucesso!`);
    listarEmpresasNaTela();
    return await res.json();
  } else {
    console.log("Houve um erro ao desativar a empresa.");
    throw new Error("Houve um erro ao desativar a empresa.");
  }
}
async function ativarEmpresa(idEmpresa) {
  if (idEmpresa === undefined || idEmpresa === null) {
    console.error("ID de empresa inválido");
    return;
  }
  const res = await fetch(`/usuarios/ativarEmpresa`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idEmpresaServer: idEmpresa,
    }),
  });
  if (res.ok) {
    console.log(`Empresa com ID ${idEmpresa} ativada com sucesso!`);
    listarEmpresasNaTela();
    return await res.json();
  } else {
    console.log("Houve um erro ao ativar a empresa.");
    throw new Error("Houve um erro ao ativar a empresa.");
  }
}
async function editarEmpresa(idEmpresa) {
  const empresa = await identificarEmpresas(idEmpresa);
  console.log(empresa)
  modal.style.display = "flex";
  nomeEmpresaModal.value = empresa.nomeEmpresa;
  cepEmpresaModal.value = empresa.cep;
  cnpjEmpresaModal.value = empresa.cnpj;
  emailEmpresaModal.value = empresa.emailCorporativo;
  telEmpresaModal.value = empresa.telEmpresa;
  sessionStorage.idDaEmpresaIdentificada = empresa.idEmpresa;
}
async function identificarEmpresas(idEmpresa) {
  try {
    const resposta = await fetch(`/usuarios/identificarEmpresas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idEmpresaServer: idEmpresa
      }),
    });
    if (!resposta.ok) {
      console.error(
        "Erro ao identificar empresa:",
        resposta.status,
        resposta.statusText
      );
      throw new Error("Houve um erro ao identificar o empresa.");
    }
    const empresa = await resposta.json();
    console.log("Empresa identificada:", empresa[0]);
    return empresa[0];
  } catch (erro) {
    console.error(`#ERRO: ${erro}`);
    return null;
  }
}
function salvar() {
  var idEmpresa = sessionStorage.idDaEmpresaIdentificada;
  var nomeEmpresa = nomeEmpresaModal.value;
  var cepEmpresa = cepEmpresaModal.value;
  var cnpjEmpresa = cnpjEmpresaModal.value;
  var emailEmpresa = emailEmpresaModal.value;
  var telEmpresa = telEmpresaModal.value;
  Swal.fire({
    title: "Você quer salvar as alterações dessa empresa?",
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
      confirmarEdicao(idEmpresa,
        nomeEmpresa,
        cepEmpresa,
        cnpjEmpresa,
        emailEmpresa,
        telEmpresa);
      modal.style.display = "none";
    }
  });
}
async function confirmarEdicao(idEmpresa, nomeEmpresa, cepEmpresa, cnpjEmpresa, emailEmpresa, telEmpresa) {
  if (idEmpresa === undefined || idEmpresa === null) {
    console.error("ID de empresa inválido");
    return;
  }
  const res = await fetch(`/usuarios/confirmarEdicaoEmpresa`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idEmpresaServer: idEmpresa,
      nomeEmpresaServer: nomeEmpresa,
      cepEmpresaServer:  cepEmpresa,
      cnpjEmpresaServer: cnpjEmpresa,
      emailEmpresaServer: emailEmpresa,
      telEmpresaServer: telEmpresa
    }),
  });
  if (res.ok) {
    console.log(`Empresa com ID ${idEmpresa} modificado com sucesso!`);
    listarEmpresasNaTela();
    return await res.json();
  } else {
    console.log("Houve um erro ao modificar o usuário.");
    throw new Error("Houve um erro ao modificar o usuário.");
  }
}
function cancelar() {
  modal.style.display = "none";
}
listarEmpresasNaTela();