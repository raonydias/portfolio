function saudacao() {
    console.log("E aí, beleza?");
}

setTimeout(saudacao, 1000); // em milissegundos

let contador = 0;

const id = setInterval(() => {
    contador++;
    console.log("Tempo decorrido (em segundos):", contador);

    if (contador == 10) clearInterval(id);
}, 1000);
