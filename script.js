/* Control de flujo y manejo de errores */

// if...else
function verificarNumero() {
    var numero = parseInt(document.getElementById('numeroIngresado').value);
    if (isNaN(numero)) {
        document.getElementById('resultado').textContent = 'Por favor, ingrese un número.';
    } else {
        if (numero % 2 === 0) {
            document.getElementById('resultado').textContent = 'El número ingresado es par.';
        } else {
            document.getElementById('resultado').textContent = 'El número ingresado es impar.';
        }
    }
}

// switch
function mostrarValor() {
    var numeroInput = document.getElementById("numero");
    var numero = parseInt(numeroInput.value);
    var resultadoSwitch = document.getElementById("resultadoSwitch");

    switch (numero) {
        case 1:
            resultadoSwitch.textContent = "Uno";
            break;
        case 2:
            resultadoSwitch.textContent = "Dos";
            break;
        case 3:
            resultadoSwitch.textContent = "Tres";
            break;
        case 4:
            resultadoSwitch.textContent = "Cuatro";
            break;
        case 5:
            resultadoSwitch.textContent = "Cinco";
            break;
        default:
            resultadoSwitch.textContent = "Por favor, introduce un número del 1 al 5.";
            break;
    }
}

// try/catch/throw   
function verificarNumeroTry() {
    try {
        var numeroInput = document.getElementById('numeroIngresadoTry').value;
        var numero = parseInt(numeroInput);
        
        if (isNaN(numero)) {
            throw new Error('Por favor, ingrese un número válido.');
        } else if (numero % 2 === 0) {
            document.getElementById('resultadoTryCatch').textContent = 'El número ingresado es par.';
        } else {
            document.getElementById('resultadoTryCatch').textContent = 'El número ingresado es impar.';
        }
    } catch (error) {
        document.getElementById('resultadoTryCatch').textContent = error.message;
    }
}

// Objetos de error
function dividir(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero.');
    }
    return a / b;
}

function realizarDivision() {
    var numeroA = document.getElementById('numeroA').value;
    var numeroB = document.getElementById('numeroB').value;

    try {
        const resultadoObjeto = dividir(parseFloat(numeroA), parseFloat(numeroB));
        document.getElementById('resultadoObjetoError').textContent = 'El resultado de la división es: ' + resultadoObjeto;
    } catch (error) {
        document.getElementById('resultadoObjetoError').textContent = 'Ha ocurrido un error: ' + error.message;
    }
}

/* Bucles e iteración */

// for
function printNumbers() {
    var start = parseInt(document.getElementById('startInput').value);
    var end = parseInt(document.getElementById('endInput').value);
    var numbers = '';
    for (var i = start; i <= end; i++) {
        numbers += i + ', ';
    }
    document.getElementById('numbers').textContent = numbers.slice(0, -2);
}

// while
function sumarNumeros() {
    var numero = parseInt(document.getElementById('numeroIngresadoWhile').value);
    var suma = 0;
    var i = 1;

    while (i <= numero) {
        suma += i;
        i++;
    }
    document.getElementById('resultadoWhile').textContent = 'La suma de los números desde 1 hasta ' + numero + ' es: ' + suma;
}

// do...while  //REVISAR
function verificarNumeroSimple() {
    var numero;
    var resultado = document.getElementById('resultadoDoWhile');
    var inputNumero = document.getElementById('numeroIngresadoDoWhile').value;

    do {
        numero = parseInt(inputNumero);
        if (isNaN(numero) || numero <= 5) {
            resultado.textContent = 'El número ingresado no es válido. Por favor, ingrese un número mayor que 5.';
        } else {
            resultado.textContent = 'El número ingresado (' + numero + ') es válido.';
        }
    } while (isNaN(numero) || numero <= 5);
}

/* Funciones */
function saludar() {
    var name = document.getElementById('nameInput').value;
    document.getElementById('greeting').textContent = '¡Hola, ' + name + '!';
}

/* Expresiones y operadores */
function calculate() {
    var num1 = parseInt(document.getElementById('num1Input').value);
    var num2 = parseInt(document.getElementById('num2Input').value);
    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;
    document.getElementById('calculation').textContent = 'Suma: ' + sum + ', Diferencia: ' + difference + ', Producto: ' + product + ', Cociente: ' + quotient;
}

/* Números y fechas */
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumber').textContent = 'Número aleatorio: ' + randomNumber;
}

function getCurrentDate() {
    let currentDate = new Date();
    document.getElementById('currentDate').textContent = 'Fecha actual: ' + currentDate;
}

/* Formateo de texto */
function concatenateStrings() {
    let string1 = document.getElementById('string1Input').value;
    let string2 = document.getElementById('string2Input').value;
    let concatenatedString = string1 + ' ' + string2;
    document.getElementById('concatenatedString').textContent = 'Cadenas concatenadas: ' + concatenatedString;
}

/* Colecciones indexadas */
function manipulateArray() {
    let array = ['Manzana', 'Banana', 'Cereza'];
    array.push('Durazno');
    array.pop();
    document.getElementById('array').textContent = 'Arreglo manipulado: ' + array;
}

/* DOM */
function getElementByID() {
    let element = document.getElementById('elementByID');
    element.textContent = 'Elemento encontrado por ID: ' + element.tagName;
}

function getElementsByTag() {
    let elements = document.getElementsByTagName('p');
    document.getElementById('elementsByTag').textContent = 'Elementos encontrados por nombre de etiqueta: ' + elements.length;
}

function getElementsByClass() {
    let elements = document.getElementsByClassName('elementsByClass');
    document.getElementsByClassName('elementsByClass')[0].textContent = 'Elementos encontrados por nombre de clase: ' + elements.length;
}

function getElementsBySelector() {
    let elements = document.querySelectorAll('#elementsBySelector');
    document.getElementById('elementsBySelector').textContent = 'Elementos encontrados por selectores CSS: ' + elements.length;
}

function getElementsByCollection() {
    let elements = document.forms;
    document.getElementById('elementsByCollection').textContent = 'Elementos encontrados por colecciones de objetos HTML: ' + elements.length;
}