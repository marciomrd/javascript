function somar() {
    var inumber1 = document.getElementById('inumber1')
    var inumber2 = document.querySelector('input#inumber2')
    var result = document.getElementById('result')
    var number1 = Number(inumber1.value)
    var number2= Number(inumber2.value)

    var sum = number1 + number2

    result.innerHTML = `A soma entre ${number1} e ${number2} é ${sum}`

}