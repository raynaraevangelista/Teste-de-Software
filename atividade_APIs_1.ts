
async function cafe(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Café pronto!");
        }, 19000);
    });
}

async function cafeExemplo() {
    const resultado = await cafe();
    console.log(resultado);
    const resultadoAguardado = await cafe();
    console.log(resultadoAguardado);
}

cafeExemplo();

type Cep = {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

async function buscarCep(): Promise<Cep> {
    const resposta = await fetch(`https://viacep.com.br/ws/01001000/json/`);
    const dados: Cep = await resposta.json();
    return dados;
}

async function exemploCep() {
    const resultado = await buscarCep();
    console.log(resultado);
}

exemploCep();

async function criarCep(): Promise<Cep> {
    const response = await fetch(`https://viacep.com.br/ws/01001000/json/`);
    method: "Post"
    Headers: {
        "Content-Type"; "application/json"
    }

    body: JSON.stringify({
        cep: "01001000",
        logradouro: "Praça da Sé",
        complemento: "lado ímpar",
        unidade: "",
        bairro: "Sé",
        localidade: "São Paulo",
        uf: "SP",
        estado: "São Paulo",
        regiao: "Sudeste",
        ibge: "3550308",
        gia: "1004",
        ddd: "11",
        siafi: "7107"
    })
    const dados: Cep = await response.json();
    return dados;
}


async function apagarCep(): Promise<void> { //Delete
    const response = await fetch(`https://viacep.com.br/ws/01001000/json/`, {
        method: "delete"
    });

    if (response.ok) {
        console.log("Cep apagado com sucesso!");
    } else {
        console.log("Erro ao apagar")
    }
}
