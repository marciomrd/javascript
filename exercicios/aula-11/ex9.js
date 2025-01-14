function verify() {
    var txtcountry = document.getElementById('icountry')
    var result  = document.getElementById('result')
    var country = txtcountry.value

    if(country == 'Brasil') {
        result.innerHTML = `<p>Seu país é ${country} e você é Brasileiro.</p>`
    }else {
        result.innerHTML = `<p>Seu país é ${country} e você não é Brasileiro.</p>`
    }
}