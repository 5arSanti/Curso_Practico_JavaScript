//Para seleccionar por el nombre de la etiqueta: h1, p, span, section, img
const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const texto = document.querySelector("#texto");

/*
form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
    console.log(event);
    event.preventDefault(); 
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}
*/

form.addEventListener("click", sumarInputValues);

function sumarInputValues(event) {
    //console.log(event);
    //event.preventDefault(); 
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}

texto.addEventListener("mouseover", textoCambiado);
function textoCambiado(){
    texto.innerText = "Como Estas";
}
texto.addEventListener("mouseout", textoCambiado2);
function textoCambiado2(){
    texto.innerText = "hola";
}