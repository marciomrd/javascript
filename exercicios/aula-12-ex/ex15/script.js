function verify (){
    var fyear = document.getElementById('iyear')
    var date = new Date()
    var year = date.getFullYear()
    var res = document.getElementById('result')

    if(fyear.value.length == 0 || Number(fyear.value) > year){
        window.alert("[ERRO] Digite um ano válido e tente novamente!")
    }else {
        var fsex = document.getElementsByName('sex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')

        if(fsex[0].checked) {
            gender = 'Homem'

            if(age >= 0 && age < 10) {

                img.setAttribute('src', './images/crianca-m.png')

            }else if(age < 21) {

                img.setAttribute('src', './images/jovem-m.png')

            }else if(age < 50) {

                img.setAttribute('src', './images/adulto-m.png')

            }else {

                img.setAttribute('src', './images/idoso-m.png')

            }

        }else if (fsex[1].checked) {
            gender = 'Mulher'

            if(age >= 0 && age < 10) {

                img.setAttribute('src', './images/crianca-f.png')

            }else if(age < 21) {

                img.setAttribute('src', './images/jovem-f.png')

            }else if(age < 50) {

                img.setAttribute('src', './images/adulto-f.png')

            }else {
                
                img.setAttribute('src', './images/idoso-f.png')

            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
        res.appendChild(img)
    }
}