import Countdown from "./countdown.js";

let botao = document.querySelector('.botao > button');
let botao2 = document.querySelector('.countdown_menu > button');
let countDownInterval;


botao.addEventListener('click', (e) => {
    e.preventDefault();

    clearInterval(countDownInterval)

    const diasFaltando = document.querySelector('.countdown_menu > p');
    let dataEntrada = document.getElementById("date_counter");
    const [dia, mes, ano] = dataEntrada.value.split("/");
    const newData = new Date(`${ano}, ${mes}, ${dia}`);
    const tempoDesejado = new Countdown(newData); 
    const tempos = document.querySelectorAll('[data-time]');

    if(dataEntrada.value == "") {
        alert('Por favor, insira uma data');
    } else if(tempoDesejado._timeStampDiff >0){

        function mostrarTempo(){
            tempos.forEach((tempo, index) =>{
                tempo.innerHTML = tempoDesejado.total[index]
            });
        }
    
        setTimeout(() =>{
            let teste = document.querySelector('.countdown');
            let rect = teste.getBoundingClientRect().bottom;
            window.scrollTo(0, rect);
        }, 1000);
        
        diasFaltando.innerHTML = `Contagem para ${dataEntrada.value}`;
        countDownInterval = setInterval(mostrarTempo, 1000);
        dataEntrada.value=''
    }

    

    

    
})

botao2.addEventListener('click', (element) => {
    element.preventDefault();
    clearInterval(countDownInterval);

    const tempos = document.querySelectorAll('[data-time]');
    tempos.forEach(tempo => tempo.innerHTML = '00');

})












