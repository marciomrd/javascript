var generate = document.getElementById('generate')

generate.addEventListener('click', calc)

function calc() {
    var txtnum = document.getElementById('inumber')
    var result = document.getElementById('iresult')
    var num = Number(txtnum.value)

    if(txtnum.value.length == ''){

        alert('Caixa de texto vazia, digite um número por favor!')

    }else {

        result.innerHTML = ''

        for(var count = 0; count <= 10; count++){
            var item = document.createElement('option')

            item.text = `${num} x ${count} = ${num*count}`
            item.value = `result${count}`

            result.appendChild(item)
        }
    }
}