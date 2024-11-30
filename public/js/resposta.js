let respostas;

async function obterDados() {
    try {
        const resposta = await fetch("/resposta/obterRespostas", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resposta.ok) {
            console.log("Dados obtidos com sucesso!");
            return await resposta.json();
        } else {
            console.error("Houve um erro ao obter dados!");
            throw new Error("Houve um erro ao obter dados!");
        }
    } catch (erro) {
        console.error(`#ERRO: ${erro}`);
        return null;
    }
}



onload = async function () {
    var perguntas = await obterDadosPerguntas();
    respostas = await obterDados();
    const respostaArea = document.querySelector(".ia-response");
    respostaArea.addEventListener('input', function () {
        changes;
        adjustTextareaHeight(this);
    });

    if (perguntas) {
        const baloes = document.querySelectorAll(".baloon p");
        baloes.forEach((balao, index) => {
            if (perguntas[index]) {
                balao.textContent = `${perguntas[index]}`;
            } else {
                balao.textContent = "Pergunta não encontrada";
            }
        });

    }
};
// function adjustTextareaHeight(textarea) {
//     textarea.style.height = "auto";
//     textarea.style.height = (textarea.scrollHeight - 1500) + "px";
// }

function resposta1() {
    const respostaArea = document.querySelector(".ia-response");
    const respostaTexto = respostas ? respostas[0] : "Resposta não encontrada.";
    respostaArea.value = respostaTexto.replace(/\*/g, "");
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight - 1500) + "px";
}

function resposta2() {
    const respostaArea = document.querySelector(".ia-response");
    const respostaTexto = respostas ? respostas[1] : "Resposta não encontrada.";
    respostaArea.value = respostaTexto.replace(/\*/g, "");
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight - 1500) + "px";
}

function resposta3() {
    const respostaArea = document.querySelector(".ia-response");
    const respostaTexto = respostas ? respostas[2] : "Resposta não encontrada.";
    respostaArea.value = respostaTexto.replace(/\*/g, "");
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight - 1500) + "px";
}

async function obterDadosPerguntas() {
    try {
        const resposta = await fetch("/ia/obterDados", {
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