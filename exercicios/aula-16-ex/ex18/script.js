let add = document.querySelector('input#add')
let num = document.querySelector('input#inum')
let list = document.querySelector('select#iview')
let res = document.querySelector('div#result')
let values = []


add.addEventListener('click', adicionar)

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

   if(isNumber(num.value) && !inList(num.value, values)) {

        alert('Tudo ok!')

    } else {

        alert('Número inválido ou já adionado à lista.')
    }
}