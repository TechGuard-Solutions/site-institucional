async function obterDados() {
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

onload = async function () {
    var dados = await obterDados();
    if (dados) {
        const perguntas = document.querySelectorAll(".baloon p");
        perguntas.forEach((pergunta, index) => {
            if (dados[index]) {
                pergunta.textContent = `${dados[index]}`;
            } else {
                pergunta.textContent = "Pergunta não encontrada.";
            }
        });
    }
};