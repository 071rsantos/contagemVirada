const days = document.querySelector('#dias')
const hours = document.querySelector('#horas')
const minutes = document.querySelector('#minutos')
const seconds = document.querySelector('#segundos')

// 1. `new Date()` cria um objeto de data que representa a data e a hora atual. 2. `new Date().getFullYear()` obtém o ano atual deste objeto de data. 3. `new Date().getFullYear() + 1` soma 1 ao ano atual, o que representa o ano seguinte. 4. `nova data(nova data().getFullYear() + 1, 0, 1)
const fimDoAno = new Date(new Date().getFullYear() + 1, 0, 1)

// configura um intervalo que atualiza o relógio a cada segundo
const tempo = setInterval(function(){
    //obtém a data e a hora atual
    const agora = new Date()

    // calcula a diferença de tempo entre a data atual e o fim do ano
    const diferenca = fimDoAno - agora
    const diasRestantes = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    const horasRestantes = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosRestantes = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)) 
    const segundosRestantes = Math.floor((diferenca % (1000 * 60)) / 1000)

    days.textContent = diasRestantes < 10 ? "0" + diasRestantes : diasRestantes
    hours.textContent = horasRestantes < 10 ? "0" + horasRestantes : horasRestantes
    minutes.textContent = minutosRestantes < 10 ? "0" + minutosRestantes : minutosRestantes
    seconds.textContent = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes

    if (diferenca <= 0) {
        clearInterval(tempo)
        days.textContent = "00"
        hours.textContent = "00"
        minutes.textContent = "00"
        seconds.textContent = "00"
    }
}, 1000)