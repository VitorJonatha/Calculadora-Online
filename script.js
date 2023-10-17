var valor1 = 0
var valor2 = 0
var mudar = false
var operador = null
var operador2 = null
var newValor
var resetPonto
var input = document.getElementById('input');
var input2 = document.getElementById('input2');
//FUNCTIONS QUE SERÃO USADOS MAIS DE UMA VEZ
function apagarTudo() { //função para apagar tudo
    input.value = ""
    input2.value = ""
    valor1 = ""
    valor2 = ""
}
function ultimoCaractere() { //função para pegar o último caractere
    let ultimoCaractere = input.value.charAt(input.value.length - 1)
    return ultimoCaractere
}
function tituloPadrao() { //função para alterar o título para o padrão
    let titulo = document.getElementById('titulo')
    titulo.textContent = 'Conte!';
    titulo.style.fontSize = "47px";
    titulo.style.fontWeight = "bold";
}
function tituloMaxCaracteres() { //função para alterar o título, avisando que o número máximo de caracteres atingido.
    let titulo = document.getElementById('titulo')
    titulo.textContent = 'Número máximo de caracteres atingido!!';
    titulo.style.fontSize = "23px";
    titulo.style.fontWeight = "bold";
}
function igualRes() { //função que calcula a resposta ultilizando os dois valores e o operador
    let numValor1 = Number(valor1)
    let numValor2 = Number(valor2)
    if (operador == "+") {
        newValor = numValor2 + numValor1
    } else if (operador == "-") {
        newValor = numValor2 - numValor1
    } else if (operador == "×") {
        newValor = numValor2 * numValor1
    } else if (operador == "/") {
        newValor = numValor2 / numValor1
    } else if (operador == "%") {
        newValor = (numValor2 / 100) * numValor1
    }
    return String(newValor)
}
//Adicionar números aos inputs, mais algumas validações
function adicionarNumero(numero) {
    let consteAi
    if (ultimoCaractere() == "+" || ultimoCaractere() == "-" || ultimoCaractere() == "×" || ultimoCaractere() == "/" || ultimoCaractere() == "%") consteAi = true
    if (input.value.length < 16 || consteAi) {
        if (ultimoCaractere() == 0 && input.value.length == 1) {
            input.value = ""
            valor1 = ""
        }
        if (ultimoCaractere() == "+" && input2.value == "" || ultimoCaractere() == "-" && input2.value == "" || ultimoCaractere() == "×" && input2.value == "" || ultimoCaractere() == "/" && input2.value == "" || ultimoCaractere() == "%" && input2.value == "") {
            //não precisa mudar de variável, pois não tem um operador ainda
            tituloPadrao()
            input2.value = input.value
            valor2 = valor1
            input.value = ""
            valor1 = input.value
            valor1 += numero
            input.value = valor1
            console.log(`Valor1 = ${valor1}`)
            console.log(`Valor2 = ${valor2}`)
        } else if (ultimoCaractere() == "+" && input2.value != "" || ultimoCaractere() == "-" && input2.value != "" || ultimoCaractere() == "×" && input2.value != "" || ultimoCaractere() == "/" && input2.value != "" || ultimoCaractere() == "%" && input2.value != "") {
            console.log(newValor)
            valor2 = newValor
            operador = operador2
            newValor += operador2
            input2.value = newValor
            valor1 = numero
            input.value = valor1
        } else {
            valor1 = input.value
            valor1 += numero
            input.value = valor1
            console.log(`Valor1 = ${valor1}`)
            console.log(`Valor2 = ${valor2}`)
        }
    } else {
        tituloMaxCaracteres()
    }
}
//Apagar o último caractere
var backspace = document.getElementById('backspace')
backspace.addEventListener("click", function () {
    if (input.value.length > 0) {
        if (input.value.length == 16) {
            tituloPadrao()
        }
        if (ultimoCaractere() == "+" || ultimoCaractere() == "-" || ultimoCaractere() == "×" || ultimoCaractere() == "/" || ultimoCaractere() == "%") {
            newValor = input.value.slice(0, -1)
            input.value = newValor
            operador = null
            console.log(valor1)
        } else {
            String(valor1)
            newValor = valor1.slice(0, -1)
            valor1 = newValor
            input.value = valor1
            console.log(valor1)
            if (valor1.length == 0) {
                resetPonto = true
            }
        }
    }
})
//Limpar o visor
var limpar = document.getElementById('limpar')
limpar.addEventListener("click", function () {
    apagarTudo()
    tituloPadrao()
})
//Adiciona um ponto ao valor
ponto.addEventListener("click", function () {
    if (input.value.length < 15 || consteAi) {
        valor1 = input.value;
        var regex = /[+\-/×%.]/;
        var ultimoCaractere = input.value.charAt(input.value.length - 1);
        if (valor1.indexOf(".") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere)) {
            valor1 += "."
            input.value = valor1
            console.log(".")
        }
    }
})
//Adiciona o operador de adição +
var adicao = document.getElementById('adicao')
adicao.addEventListener("click", function () {
    valor1 = input.value;
    let regex = /[+\-/×%.]/;
    if (input2.value.length == 0) {
        if (valor1.indexOf("+") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            operador = "+"
            input.value += "+"
        }
    } else {
        if (valor1.indexOf("+") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            input.value += "+"
            operador2 = "+"
            newValor = igualRes()
            console.log(`resp: ${newValor}`)

        }
    }
})
//Adiciona o operador de subtração -
var subtracao = document.getElementById('subtracao')
subtracao.addEventListener("click", function () {
    valor1 = input.value;
    let regex = /[+\-/×%.]/;
    if (input2.value.length == 0) {
        if (valor1.indexOf("-") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            operador = "-"
            input.value += "-"
        }
    } else {
        if (valor1.indexOf("-") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            input.value += "-"
            operador2 = "-"
            newValor = igualRes()
            console.log(`resp: ${newValor}`)

        }
    }
})
//Adiciona o operador de multiplicação ×
var multiplicacao = document.getElementById('multiplicacao')
multiplicacao.addEventListener("click", function () {
    valor1 = input.value;
    let regex = /[+\-/×%.]/;
    if (input2.value.length == 0) {//Quer dizer que não tem operador ainda
        if (valor1.indexOf("×") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            operador = "×"
            input.value += "×"
        }
    } else {//Quer dizer que já tem operador, então devemos somar de uma vez e salvar a resposta no input2 e no valor2 para esvaziar o input e o valor1
        if (valor1.indexOf("×") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            input.value += "×"
            operador2 = "×"
            newValor = igualRes()
            console.log(`resp: ${newValor}`)

        }
    }
})
//Adiciona o operador de divisão /
var divisao = document.getElementById('divisao')
divisao.addEventListener("click", function () {
    valor1 = input.value;
    let regex = /[+\-/×%.]/;
    if (input2.value.length == 0) {
        if (valor1.indexOf("/") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            operador = "/"
            input.value += "/"
        }
    } else {
        if (valor1.indexOf("/") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            input.value += "/"
            operador2 = "/"
            newValor = igualRes()
            console.log(`resp: ${newValor}`)

        }
    }
})
//Adiciona o operador de porcentagem %
var porcentagem = document.getElementById('porcentagem')
porcentagem.addEventListener("click", function () {
    valor1 = input.value;
    let regex = /[+\-/×%.]/;
    if (input2.value.length == 0) {
        if (valor1.indexOf("%") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            operador = "%"
            input.value += "%"
        }
    } else {
        if (valor1.indexOf("%") === -1 && valor1.length > 0 && !regex.test(ultimoCaractere())) {
            input.value += "%"
            operador2 = "%"
            newValor = igualRes()
            console.log(`resp: ${newValor}`)

        }
    }
})
//Finaliza a operação, e retornando o resposta
var igual = document.getElementById('igual')
igual.addEventListener("click", function () {
    var regex = /[+\-/×%.]/;
    var ultimoCaractere = input.value.charAt(input.value.length - 1);
    if (!regex.test(ultimoCaractere) && input.value != "" && input2.value != "") {
        newValor = igualRes()
        valor1 = String(newValor)
        input.value = valor1
        console.log(`Resposta: ${newValor}`)
        console.log(`Valor1: ${valor1}`)
        input2.value = ""
        mudar = false
        return String(newValor)
    }
})