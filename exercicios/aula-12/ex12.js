var now = new Date()
var time = now.getHours()

console.log(`Agora são ${time} horas`)

if(time < 12) {
    console.log('Bom dia!')
}else if(time <= 18){
    console.log('Boa tarde!')
}else if(time < 5 || time > 18){
    console.log('Boa noite!')
}