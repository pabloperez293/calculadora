const pantallaValorAnterior = document.getElementById("valor-anterior");
const pantallaValorActual = document.getElementById("valor-actual");
const botonesNum = document.querySelectorAll(".numero");
const botonesOp = document.querySelectorAll(".operador");

const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual);

botonesNum.forEach(boton => {
    boton.addEventListener("click", () => pantalla.agregaNumero(boton.innerHTML));
});

botonesOp.forEach(boton => {
    boton.addEventListener("click", () => pantalla.computar(boton.value))
});