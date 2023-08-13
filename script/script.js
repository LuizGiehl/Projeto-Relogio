const horas = document.getElementById('horas')
const minutos = document.getElementById('min')
const segundos = document.getElementById('seg')

function Time() {
    let horaAtual = new Date()
    let hora = horaAtual.getHours()
    let min = horaAtual.getMinutes()
    let seg = horaAtual.getSeconds()

    if (hora < 10) {
        hora = '0' + hora
    }
    if (min < 10){
        min = '0' + min
    }
    if (seg < 10) {
        seg = '0' + seg
    }

    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = seg;
}

const relogio = setInterval(Time)