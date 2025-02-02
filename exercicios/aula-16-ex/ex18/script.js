let add = document.querySelector('input#add')
let fin = document.querySelector('input#finish')
let num = document.querySelector('input#inum')
let list = document.querySelector('select#iview')
let res = document.querySelector('div#result')
let values = []


add.addEventListener('click', adicionar)
fin.addEventListener('click', finalizar)

function isNumber(n) {

    if(Number(n) >= 0 && Number(n) <= 100){

        return true

    } else {

        return false

    }
}

function inList(n, v) {

    if(v.indexOf(Number(n)) != -1){

        return true

    } else {

        return false

    }
}

function adicionar() {

    if(num.value.length == ''){

        alert('Valor inválido! Digite um valor')

    }else if(isNumber(num.value) && !inList(num.value, values)) {
        
        let item = document.createElement('option')

        values.push(Number(num.value))

        item.text = `Valor ${num.value} adicionado`

        list.appendChild(item)

        res.innerHTML = ''

    } else {

        alert('Número inválido ou já adicionado à lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar() {

    if(values.length == 0) {
        
        alert('A lista está vazia! Por favor insira valores.')

    } else {

        let total = values.length
        let maior = values[0]
        let menor = values[0]
        let soma = 0
        let media = 0

        for(let pos in values){

            soma += values[pos]

            if(values[pos] > maior) {

                maior = values[pos]

            }

            if(values[pos] < menor) {

                menor = values[pos]
                
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} número cadastrados.</p>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores da lista é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores da lista é ${media}.</p>`
    }
}