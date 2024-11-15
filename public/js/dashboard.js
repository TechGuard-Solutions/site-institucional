initCharts();

async function obterDados() {
  try {
    const resposta = await fetch("/dashboard/obterDados", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (resposta.ok) {
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

async function contarPorCategoria(categoria, valor) {
  const json = await obterDados();
  if (json) {
    const quantidade = json.filter((item) => item[categoria] === valor).length;
    console.log(`Quantidade de ${valor}: `, quantidade);
    return quantidade;
  } else {
    console.log(`Não foi possível obter os dados para ${valor}.`);
    return null;
  }
}

async function qtdAttacks() {
  return await contarPorCategoria("attack_ou_disclosure", "Attack");
}

async function qtdDisclosures() {
  return await contarPorCategoria("attack_ou_disclosure", "Disclosure");
}

// Funções para 'modificados affect'
async function qtdSaA() {
  return await contarPorCategoria(
    "modificados_affect",
    "Software and Applications"
  );
}

async function qtdMaV() {
  return await contarPorCategoria(
    "modificados_affect",
    "Malware and Vulnerabilities"
  );
}

async function qtdFaL() {
  return await contarPorCategoria(
    "modificados_affect",
    "Frameworks and Libraries"
  );
}

async function qtdHaF() {
  return await contarPorCategoria(
    "modificados_affect",
    "Hardware and Firmware"
  );
}

async function qtdPaA() {
  return await contarPorCategoria("modificados_affect", "Protocols and APIs");
}

async function qtdDaP() {
  return await contarPorCategoria(
    "modificados_affect",
    "Development Tools and Packages"
  );
}

// Funções para 'modificados impact'
async function qtdDE() {
  return await contarPorCategoria("modificados_impact", "Data Extraction");
}

async function qtdRCE() {
  return await contarPorCategoria(
    "modificados_impact",
    "Remote Code Execution"
  );
}

async function qtdBA() {
  return await contarPorCategoria("modificados_impact", "Backdoor Access");
}

async function qtdDD() {
  return await contarPorCategoria("modificados_impact", "Data Damage");
}

async function qtdPD() {
  return await contarPorCategoria("modificados_impact", "Payment Diversion");
}

async function qtdOthers() {
  return await contarPorCategoria("modificados_impact", "Others");
}

// Funções para 'modificados downstream target'
async function qtdSpU() {
  return await contarPorCategoria(
    "modificados_downstream_target",
    "Systems and Platform Users"
  );
}

async function qtdSaL() {
  return await contarPorCategoria(
    "modificados_downstream_target",
    "Software Applications and Libraries"
  );
}

async function qtdCaO() {
  return await contarPorCategoria(
    "modificados_downstream_target",
    "companies and organizations"
  );
}

async function qtdCfU() {
  return await contarPorCategoria(
    "modificados_downstream_target",
    "Cryptocurrency and Finance Users"
  );
}

async function qtdGaN() {
  return await contarPorCategoria(
    "modificados_downstream_target",
    "Governments, Activists and Non-Governmental Organizations (NGOs)"
  );
}

async function qtdDaI() {
  return await contarPorCategoria(
    "modificados_downstream_target",
    "Developers and IT Professionals"
  );
}

async function initCharts() {
  const qtdAttacksValue = await qtdAttacks();
  const qtdDisclosuresValue = await qtdDisclosures();
  const qtdSaAValue = await qtdSaA();
  const qtdMaVValue = await qtdMaV();
  const qtdFaLValue = await qtdFaL();
  const qtdHaFValue = await qtdHaF();
  const qtdPaAValue = await qtdPaA();
  const qtdDaPValue = await qtdDaP();
  const qtdDEValue = await qtdDE();
  const qtdRCEValue = await qtdRCE();
  const qtdBAValue = await qtdBA();
  const qtdDDValue = await qtdDD();
  const qtdPDValue = await qtdPD();
  const qtdOthersValue = await qtdOthers();
  const qtdSpUValue = await qtdSpU();
  const qtdSaLValue = await qtdSaL();
  const qtdCaOValue = await qtdCaO();
  const qtdCfUValue = await qtdCfU();
  const qtdGaNValue = await qtdGaN();
  const qtdDaIValue = await qtdDaI();

  const ctx = document.getElementById("myChart").getContext("2d");
  const ctx2 = document.getElementById("myChart2").getContext("2d");

  let tituloAffect = [
    "Aplicações e Softwares",
    "Vulnerabilidades e Malware",
    "Bibliotecas e Frameworks",
    "Hardware e Firmware",
    "APIs e Protocolos",
    "Ferramentas e pacotes de desenvolvimento",
  ];

  let valuesAffect = [
    qtdSaAValue,
    qtdMaVValue,
    qtdFaLValue,
    qtdHaFValue,
    qtdPaAValue,
    qtdDaPValue,
  ];

  let tituloImpact = [
    "Extração de Dados",
    "Execução de código remoto",
    "Acesso Backdoor",
    "Dano aos Dados",
    "Fraudes Monetárias",
    "Outros",
  ];
  let valuesImpact = [
    qtdDEValue,
    qtdRCEValue,
    qtdBAValue,
    qtdDDValue,
    qtdPDValue,
    qtdOthersValue,
  ];

  let tituloDownstream = [
    "Sistemas e Plataformas de Usuários",
    "Bibliotecas e Aplicações de Softwares",
    "Empresas e Organizações",
    "Usuários de criptomoeda e finanças",
    "Governos, ativistas e organizações não governamentais (ONGs)",
    "Desenvolvedores e profissionais de TI",
  ];
  let valuesDownstream = [
    qtdSpUValue,
    qtdSaLValue,
    qtdCaOValue,
    qtdCfUValue,
    qtdGaNValue,
    qtdDaIValue,
  ];

  let Affects = valuesAffect.map((valor, index) => ({
    titulo: tituloAffect[index],
    valor: valor,
  }));
  Affects.sort((a, b) => a.valor - b.valor);
  console.log(Affects);

  let Impacts = valuesImpact.map((valor, index) => ({
    titulo: tituloImpact[index],
    valor: valor,
  }));
  Impacts.sort((a, b) => a.valor - b.valor);
  console.log(Impacts);

  let Downstream = valuesDownstream.map((valor, index) => ({
    titulo: tituloDownstream[index],
    valor: valor,
  }));
  Downstream.sort((a, b) => a.valor - b.valor);
  console.log(Downstream);

  let totalAttacksDisclosures = qtdAttacksValue + qtdDisclosuresValue;
  let pctgAtaques = ((qtdAttacksValue / totalAttacksDisclosures) * 100).toFixed(
    2
  );
  let pctgVazamentos = (
    (qtdDisclosuresValue / totalAttacksDisclosures) *
    100
  ).toFixed(2);

  const contentFocoAtaques = document.getElementById("contentFocoAtaques");
  contentFocoAtaques.innerHTML = `${Downstream[5].titulo} <p id="vejamais">VEJA MAIS!</p>`;

  console.log(Downstream);

  // Evento ao passar o mouse sobre a div
  kpiAtaques.addEventListener("mouseenter", function () {
    // Aumenta a altura da div
    kpiAtaques.style.height = "30vh"; // Defina a altura desejada

    // Adiciona mais conteúdo à div
    contentFocoAtaques.innerHTML = `
        1° ${Downstream[5].titulo}
        <br>
        <br>
        2° ${Downstream[4].titulo}
        <br>
        <br>
        3° ${Downstream[3].titulo}
    `;
    contentFocoAtaques.style.fontSize = '15px';
  });

  // Evento ao retirar o mouse da div
  kpiAtaques.addEventListener("mouseleave", function () {
    console.log("entrei no evento out");

    // Redefine a altura da div
    kpiAtaques.style.height = "25vh"; // Altura original

    // Restaura o conteúdo original
    contentFocoAtaques.innerHTML = `${Downstream[5].titulo} <p id="vejamais">VEJA MAIS!</p>`;
    contentFocoAtaques.style.fontSize = '25px';

  });

  contentTaxas.innerHTML = `<p class="tituloPctg info-kpis">Ataques:
                                  ${pctgAtaques}%</p>
                                  <p class="tituloPctg info-kpis">Vazamentos:
                                  ${pctgVazamentos}%</p`;
  if (Chart.getChart(ctx)) {
    Chart.getChart(ctx).destroy();
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        Affects[5].titulo,
        Affects[4].titulo,
        Affects[3].titulo,
        Affects[2].titulo,
        Affects[1].titulo,
        Affects[0].titulo,
      ],
      datasets: [
        {
          label: "Seis maiores ataques no ultimo mês",
          data: [
            Affects[5].valor,
            Affects[4].valor,
            Affects[3].valor,
            Affects[2].valor,
            Affects[1].valor,
            Affects[0].valor,
          ],
          borderWidth: 1,
          fill: true,
          borderColor: "white",
          backgroundColor: [
            "#005227",
            "#038554",
            "#03bb85",
            "#4ed2ad",
            "#73d9bc",
            "#9befd7",
          ],
          borderWidth: 2,
          tension: 0.1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: "#FFF", font: { size: 16 } },
          grid: { display: false, color: "#FFF" },
        },
        x: {
          ticks: { color: "#FFF", font: { size: 16 } },
          grid: { drawOnChart: true, color: "#FFF" },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Ataques mais frequentes",
          font: { size: 21 },
          color: "#FFF",
        },
        legend: {
          display: false,
          labels: { hidden: true, color: "#ffffff", font: { size: 21 } },
        },
      },
    },
  });

  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: [
        Impacts[5].titulo,
        Impacts[4].titulo,
        Impacts[3].titulo,
        Impacts[2].titulo,
        Impacts[1].titulo,
        Impacts[0].titulo,
      ],
      datasets: [
        {
          label: "Danos mais frequentes",
          data: [
            Impacts[5].valor,
            Impacts[4].valor,
            Impacts[3].valor,
            Impacts[2].valor,
            Impacts[1].valor,
            Impacts[0].valor,
          ],
          borderWidth: 1,
          fill: true,
          borderColor: "white",
          backgroundColor: [
            "#82c0ff",
            "#218eff",
            "#2A3BFA",
            "#002ABF",
            "#001CAD",
            "#010e8a",
          ],
          borderWidth: 2,
          tension: 0.1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: "#FFF", font: { size: 16 } },
          grid: { display: false, color: "#FFF" },
        },
        x: {
          ticks: { color: "#FFF", font: { size: 16 } },
          grid: { drawOnChart: true, color: "#FFF" },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Tipos de danos que mais ocorrem",
          font: { size: 21 },
          color: "#FFF",
        },
        legend: {
          display: false,
          labels: { hidden: true, color: "#ffffff", font: { size: 21 } },
        },
      },
    },
  });
}
