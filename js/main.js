const relogio = document.querySelector('.relogio');
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

document.addEventListener("click",(e) => {
    const elemento = e.target;

    if(elemento.classList.contains("iniciar")){
        clearInterval(cronometro);
        iniciaCronometro();
        relogio.classList.remove('zerou')
        relogio.classList.remove('parou')
        relogio.classList.add('iniciou')
    }

    if(elemento.classList.contains("pausar")){
        clearInterval(cronometro);
        relogio.classList.remove('iniciou')
        relogio.classList.remove('zerou')
        relogio.classList.add('parou')
    }

    if(elemento.classList.contains("zerar")){
        clearInterval(cronometro);
        relogio.innerHTML = `00:00:00`
        segundos = 0;
        relogio.classList.remove('iniciou')
        relogio.classList.remove('parou')
        relogio.classList.add('zerou')
    }
})
