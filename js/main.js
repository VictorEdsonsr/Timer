const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let cronometro;

const segundosParaHoras = (segundos) => {
    const date = new Date(segundos * 1000);
    return date.toLocaleTimeString('pt-BR',{hour12:false, timeZone:'UTC'})
}

const iniciaCronometro = () => {
    cronometro = setInterval( () => {
        segundos++
        relogio.innerHTML = segundosParaHoras(segundos)
    },1000)
}

iniciar.addEventListener("click",(e) => {
    clearInterval(cronometro);
    iniciaCronometro();
    relogio.classList.remove('zerou')
    relogio.classList.remove('parou')
    relogio.classList.add('iniciou')
})

pausar.addEventListener("click",(e) => {
    clearInterval(cronometro);
    relogio.classList.remove('iniciou')
    relogio.classList.remove('zerou')
    relogio.classList.add('parou')
})

zerar.addEventListener("click",(e) => {
    clearInterval(cronometro);
    relogio.innerHTML = `00:00:00`
    segundos = 0;
    relogio.classList.remove('iniciou')
    relogio.classList.remove('parou')
    relogio.classList.add('zerou')
})