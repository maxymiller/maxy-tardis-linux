//const bolaoValor = document.getElementById("bolao");

let bolao1 = true;
let bolao2 = true;
let bolao3 = true;
let bolao4 = true;

//let bolaoTFList = {}

start()

function start() {
    for(i = 1; i <= 4; i++) {
        bolao(i)
    }
}

function bolao(valor) {
    const bolaoValor = document.getElementById("bolao"+valor);
    let out;
    switch(valor) {
        case 1:
            if(bolao1) {
                bolao1 = false;
            } else {
                bolao1 = true;
            }
            out = bolao1;
            break;
        case 2:
            if(bolao2) {
                bolao2 = false;
            } else {
                bolao2 = true;
            }
            out = bolao2;
            break;
        case 3:
            if(bolao3) {
                bolao3 = false;
            } else {
                bolao3 = true;
            }
            out = bolao3;
            break;
        case 4:
            if(bolao4) {
                bolao4 = false;
            } else {
                bolao4 = true;
            }
            out = bolao4
            break;

    }
console.log(valor + ": " + out)
console.log(out)
    if(out) {
        //bolaoValor.style.display[valor] = "none"
        bolaoValor.style.display = "block"
    } else {
        //bolaoValor.style.display[valor] = "block"
        bolaoValor.style.display = "none"
    }
}