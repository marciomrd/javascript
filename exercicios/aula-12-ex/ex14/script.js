function change(){
    var mensage = document.getElementById('mensage')
    var img = document.getElementById('image')
    var time = new Date()
    var hour = time.getHours()

    mensage.innerHTML = `Agora são ${hour} horas.`

    if(hour >= 0 && hour < 12) {

        img.src = './images/manha.png'
        document.body.style.background = '#e2cd9f'

    }else if(hour >= 12 && hour <= 18) {
    
        img.src = './images/tarde.png'
        document.body.style.background = '#b9846f'

    }else {

        img.src = './images/noite.png'
        document.body.style.background = '#504491'
    }
}