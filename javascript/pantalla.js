class Pantalla{
    constructor(pantallaValorAnterior, pantallaValorActual){
        this.pantallaValorActual = pantallaValorActual;
        this.pantallaValorAnterior = pantallaValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOper = undefined;
        this.valorActual = "";
        this.valorAnterior = "";
        this.signos = {
            sumar: "+",
            dividir: "/",
            multiplicar: "x",
            restar: "-",
        }
    }
    borrar() {
        /* borra la ultima posicion (0,-1) */ 
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTotal() {
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOper = undefined;
        this.imprimirValores();
    }
    computar(tipo) {
        this.tipoOper !== "igual" && this.calcular();
        this.tipoOper = tipo;
        /* muestra el valor que le sigue y cual no*/
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValores();
    }

    agregaNumero(numero) {
        /* el if lo pusimos para que solo halla solo un punto en la cal */
        if(numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    /*metodo para que muestre en pantalla*/
    imprimirValores(){
        this.pantallaValorActual.textContent = this.valorActual;
        this.pantallaValorAnterior.textContent =  `${this.valorAnterior} ${this.signos[this.tipoOper] || ''}`;
    }

        calcular() {
        /* parsefloat string vacio */
        const valorAnterior = parsefloat(this.valorAnterior);
        const valorActual = parsefloat(this.valorActual);
        /* si nuestra variable es NAN */ 
        if( isNanN(valorActual) || isNaN(valorAnterior) )  return
         this.valorActual = this.calculador[this.tipoOper](valorAnterior, valorActual);
        }   
}