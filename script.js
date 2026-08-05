"use strict";

//MOLDE
class Parquimetro {

    constructor() {
        this.valorPago = 0;
        this.tempo = 0;
        this.troco = 0;
        this.mensagem = "";
    }

    //MÉTODO
    calcularTempo() {
        this.tempo = 0;
        this.troco = 0;
        this.mensagem = "";

        if (this.valorPago >= 3) {
            this.tempo = 120;
            this.troco = this.valorPago - 3;
        } else if (this.valorPago >= 1.75) {
            this.tempo = 60;
            this.troco = this.valorPago - 1.75;
        } else if (this.valorPago >= 1) {
            this.tempo = 30;
            this.troco = this.valorPago - 1;
        } else {
            this.tempo = 0;
            this.troco = 0;
            this.mensagem = "Valor insuficiente";
        }
    }
}

//OBJETO
let parquimetro = new Parquimetro();

function calcular() {

    //ENTRADA
    let valor = Number(document.getElementById("valor").value);

    //VALIDAÇÃO
    if (valor <= 0) {
        alert("Digite o valor a ser pago!");
        return;
    }

    //RESET VISUAL
    document.getElementById("tempo").innerText = "";
    document.getElementById("troco").innerText = "";
    document.getElementById("mensagem").innerText = "";

    //alterando a propriedade do objeto
    parquimetro.valorPago = valor;

    parquimetro.calcularTempo();

    //SAÍDA
    if (parquimetro.mensagem !== "") {
        document.getElementById("mensagem").innerText = parquimetro.mensagem;
        document.getElementById("tempo").innerText = "";
        document.getElementById("troco").innerText = "";
    } else {
        document.getElementById("tempo").innerText = `Seu tempo é ${parquimetro.tempo} minutos`;
        document.getElementById("troco").innerText = `O troco é R$ ${parquimetro.troco.toFixed(2)}`;
        document.getElementById("mensagem").innerText = parquimetro.mensagem;
    }

    //LIMPAR CAMPOS
    document.getElementById("valor").value = "";
}

//EVENTO DE CLICK
document.getElementById("calculo").addEventListener("click", calcular);

//EVENTO DO TECLADO
document.getElementById("valor").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calcular()
    }
})

//MODO ESCURO
function mudarTema() {
    document.body.classList.toggle("escuro");

    let botaoTema = document.getElementById("tema");

    botaoTema.classList.add("girar");

    if (document.body.classList.contains("escuro")) {
        botaoTema.innerHTML = "☀️";
    } else {
        botaoTema.innerHTML = "🌙"
    }

    setTimeout(function () {
        botaoTema.classList.remove("girar");
    }, 500);
}

//EVENTO DE TEMA
document.getElementById("tema").addEventListener("click", mudarTema);