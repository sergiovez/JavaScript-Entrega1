import "../sass/main.scss"

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultadoFinal = document.getElementById("resultado");


function calcular(operacion){
    try{
        const numero_1 = parseFloat(numero1.value);
        const numero_2 = parseFloat(numero2.value);

        if (isNaN(numero_1)||isNaN(numero_2)) throw new Error ('Por favor, introduce ambos numeros');

        let resultado;
        switch (operacion){
            case "sumar":
                resultado = numero_1 + numero_2;
                break;
            case "restar":
                resultado = numero_1 - numero_2;
                break;
            case "multiplicar":
                resultado = numero_1 * numero_2;
                break;
            case "dividir":
                if (numero_2 == 0) throw new Error ('No se puede dividir por 0');
                resultado = numero_1 / numero_2;
                break;
        }
        resultadoFinal.innerHTML = `Resultado: ${resultado}`;
    }
    catch (error){
        resultadoFinal.innerHTML = "Error: " + error.message;
    }

}


document.getElementById("botonSumar").addEventListener("click", () => calcular("sumar"));
document.getElementById("botonRestar").addEventListener("click", () => calcular("restar"));
document.getElementById("botonMultiplicar").addEventListener("click", () => calcular("multiplicar"));
document.getElementById("botonDividir").addEventListener("click", () => calcular("dividir"));