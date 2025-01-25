var button = document.getElementById('cont')

button.addEventListener('click', counter)

function counter () {
    var istart = document.getElementById('istart')
    var iend = document.getElementById('iend')
    var ipass = document.getElementById('ipass')
    var res = document.getElementById('result')

    var start = Number(istart.value)
    var end = Number(iend.value)
    var pass = Number(ipass.value)
    
    if(istart.value.length == '' || iend.value.lenght == '' || ipass.value.lengh == '') {
        res.innerHTML = `<p>Impossível contar!</p>`

    }else if(pass <= 0){
        alert('Passo inválido!')
    }
    else if(start < end){ //contagem crescente

        res.innerHTML = `Contando... <br>`

        for(var cont = start; cont <= end; cont += pass){
            res.innerHTML += ` ${cont} \u{1F449}`
        }

        res.innerHTML += ` \u{1F3C1}`

    }else if (start > end) {//contagem decrescente

        res.innerHTML = `Contando... <br>`

        for(var cont = start; cont >= end; cont -= pass){
            res.innerHTML += ` ${cont} \u{1F449}`
        }

        res.innerHTML += ` \u{1F3C1}`
    }

}