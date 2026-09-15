//Atividade 1



let pelopidasriodoce: string = "Av. Brasil";
pelopidasriodoce = "Nelson"

if (pelopidasriodoce == "Av. Brasil") {
    console.log("Chegaremos cedo")
} else {
    console.log("Andaremos muito")
}


//Atividade 2



type Nara = {
    pos: string;
    temPaciencia: boolean;
    facul: string;
    fap: string;
    aws: string;
}
const perfil: Nara = {
    pos: "Engenharia de Qualidade de Software",
    temPaciencia: false,
    facul: "IFPE",
    fap: "Cansativo",
    aws: "Em conclusão"
}

function descreverPerfil(perfil: Nara) {
    return `Ela faz pós em ${perfil.pos};\n Ela tem paciência? ${perfil.temPaciencia};\n Faz faculdade no ${perfil.facul};\n Acha o FAP ${perfil.fap};\n Está ${perfil.aws} no curso AWS`
}
console.log(descreverPerfil(perfil))



// atividade 3


let valor1: number = 7
let valor2: number = 0

while (valor2 <= 500) {
    console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`)
    valor2++

}

// atividade 4

for (let i = 0; i < 500; i++) {
    console.log("Dá pontuação máxima pra gente, Breno");
}