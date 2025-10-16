import "../sass/main.scss"


const botonGenerarPassword = document.getElementById('botonGenerarPassword');
let longitud = document.getElementById('longitud');
const resultado = document.getElementById('resultado');


function generarPassword(longitud){
  const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
  const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const caracteresEspeciales = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const todosCaracteres = letrasMinusculas + letrasMayusculas + numeros + caracteresEspeciales;

  let password = '';

  for (let i=0;i<longitud;i++){
    const indice = Math.floor(Math.random() * todosCaracteres.length);
    password += todosCaracteres[indice];
  }

  return password;
}


botonGenerarPassword.addEventListener('click',()=>{
    let longitudPassword = parseInt(longitud.value);
    try{
        if (longitudPassword<4) throw new Error ('La longitud debe ser mayor o igual a 4');
        else{
            let password = generarPassword(longitudPassword);
            resultado.innerHTML = "Contraseña: " + password;
        }
    }
    catch (error){
        resultado.innerHTML = "Error: " + error.message;
    }
})