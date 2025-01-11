var area = document.getElementById('area')

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    area.innerText  = 'Clicou!'
    area.style.background = 'blue'
}

function entrar() {
    area.innerText = 'Entrou!'
}

function sair() {
    area.innerText = 'Saiu!'
    area.style.background  = 'gray'
}