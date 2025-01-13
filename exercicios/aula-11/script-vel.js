function calcular(){
    var vel = document.getElementById('ivel')
    var res = document.getElementById('result')
    var km = Number(vel.value)

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${km}km/h</strong></p>`

    if(km > 60) {
        res.innerHTML += '<p>Você foi <strong>MULTADO</strong> por excesso de velocidade!</p>'
    }else {
        res.innerHTML += '<p>Dirija sempre com cinto de segurança!</p>'
    }
}