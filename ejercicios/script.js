/*

Matemática SimpleEn este ejercicio deberás crear:

Una función que se llame triplicador que tome un número como input (osea, como Parámetro) y retorne el triple de ese valor.
Una función multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.
Una función division que tome dos números como Parámetros y devuelva el resultado de dividir el primero por el segundo.
Una función resto que tome dos números como Parámetros y devuelva el resultado del módulo del primero sobre el segundo.
Por último, calculá el valor de triplicar 5, luego multiplicar eso por 12, dividir por 12 y encontrar el resto de dividir eso en 3.*/
/*
function triplicador(num){
 return 3*num
}

function multiplicador(num1, num2){
return num1*num2
}


function divisor (num1, num2){
return num1/num2
}
function resto (num1, num2) {
  return num1%num2
}

console.log(resto(divisor(multiplicador(triplicador(5),12),12),3)
)
*/

/*
contarDeA_n
En este ejercicio deberás escribir una Función llamada contarDeA_n que tenga los Parámetros contar_de_a y contar_hasta. Además, deberá escribir en la consola los números desde el 1 hasta contar_hasta en intervalos de contar_de_a.


function contarDeA_n(contar_de_a, contar_hasta){
let i = 1
while (i <= contar_hasta){
    console.log(i)
    i+=contar_de_a
}
}
contarDeA_n(2,10)


*/


/*
¿Cuáles Eran las Instrucciones de Fizzbuzz?
show hint
En ese ejercicio escribiste un programa que imprimía en la consola los números del 1 al 100, teniendo en cuenta estos criterios:

Si el número era múltiplo de 3, imprimía "Fizz" en vez del número.
Si era múltiplo de 5, imprimía "Buzz".
Si era, a la vez, múltiplo de 3 y de 5, imprimía "FizzBuzz


let i = 0;
let input= prompt('ingrese numero limite')

function fizzBuzz2 (palabra1,palabra2, fizz_num, buzz_num) {
 
  while ( i<=input ) {

if (i % fizz_num == 0 && i % buzz_num == 0){
  console.log(i+" "+palabra1+' '+palabra2)
  }

  else if (i % fizz_num ==0 ){
    console.log(i+" "+palabra1)
  }

  else if (i % buzz_num == 0 ){
    console.log(i+" "+palabra2)
  }

  else {
  console.log(i)
  }
  i++
}
}
fizzBuzz2('fizz','buzz',2,3)
*/


//EJERCICIO FACTORIAS------------

let factiorial = num => {
  let i
  let resultado
  
}