let buttonAdd = document.querySelector(".buttonAdd")
let buttonRemove = document.querySelector(".buttonRemove")
let buttonCalc = document.querySelector(".buttonCalc")
let buttonClean = document.querySelector(".buttonClean")

let input = document.querySelector("#tela")
let telaNumbers = document.querySelector("#numbers")

let mediaText = document.querySelector(".media")
let medianaText = document.querySelector(".mediana")


let numbers = []


let add = () => {

    let valorInput = input.value

    if (valorInput != "") {
        numbers.push(parseFloat(valorInput))
        mostrarNumbers()
    }

    input.value = ""
    input.focus()
  
}

let remove = () => {
    numbers.pop()
    mostrarNumbers()
}

let clean = () => {
    numbers = []
    telaNumbers.innerHTML = ""
    mediaText.innerHTML = ""
    medianaText.innerHTML = ""
}

let mostrarNumbers = () => {
    telaNumbers.innerHTML = ""

   numbers.forEach((number, index) => {
        if (index != 0) {
            telaNumbers.innerHTML += ` - ${number}`
        } else {
            telaNumbers.innerHTML += `${number}`
        }
        
   })
}


let calc  = () => {

    let calcularMedia = (numeros) => {

        let total = 0
        let quantidade = numeros.length

        numeros.forEach((number) => {
            total += number
        })

        let media = (total / quantidade)
        return media
    }

    let calcularMediana = (numbers) => {

        let mediana
        let numbersOrdenado = numbers.sort((a,b) => {
            return a - b
        })
        let quantidadeDeNumeros = numbersOrdenado.length
        

        if (quantidadeDeNumeros % 2 == 0) {

            let indiceMeio1 = (quantidadeDeNumeros/2) - 1
            let indiceMeio2 = indiceMeio1 + 1

            let soma = numbers[indiceMeio1] + numbers[indiceMeio2]

            mediana = soma / 2
            
        } else {

            let indice = ((quantidadeDeNumeros - 1) / 2) 
            mediana =  numbers[indice]

        }

        return mediana

    }

    if (numbers.length > 1) {
        let media = calcularMedia(numbers)
        let mediana = calcularMediana(numbers)

        console.log(` media ${media}  -  mediana ${mediana}`)

        mediaText.innerHTML = `Média: ${media}`
        medianaText.innerHTML = `Mediana: ${mediana}`


    }
}

buttonAdd.addEventListener('click', add)
buttonRemove.addEventListener('click',remove)
buttonClean.addEventListener('click', clean)
buttonCalc.addEventListener('click', calc)