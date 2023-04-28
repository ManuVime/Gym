//Raccogliamo tutti gli elementi
const day = document.querySelector(".day");
const exercise = document.querySelector(".exercise");
const serie = document.querySelector(".serie");
const ripetizione = document.querySelector(".ripetizione");
const img = document.querySelector(".exerciseImg");
const clock = document.querySelector(".clock");
const finished = document.querySelector(".finished");

let iExercise = 0;
let iSerie = 1;
let iDay=1;
const esercizio = source [iExercise];
exercise.innerHTML = `Esercizio ${esercizio.esercizio} di 6`;
serie.innerHTML = `Serie ${iSerie} di ${esercizio.serie}`;
ripetizione.innerHTML = `${esercizio.ripetizioni} Ripetizioni`;
img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
clock.innerHTML = `<h1 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h1>`;

function changeDay() {
    if (iDay === 4) {
        iDay = 1;
        day.innerHTML = `<h1>Lunedì</h1>`
        iExercise = 0;
        const esercizio = source [iExercise];
        exercise.innerHTML = `Esercizio ${esercizio.esercizio} di 6`;
        serie.innerHTML = `Serie ${iSerie} di ${esercizio.serie}`;
        ripetizione.innerHTML = `${esercizio.ripetizioni} Ripetizioni`;
        img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
        clock.innerHTML = `<h1 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h1>`;
    }
    else{
        iDay++;
        if (iDay === 2) {
            day.innerHTML = `<h1>Mercoledì</h1>`
            iExercise = 6;
        }
        if (iDay === 3) {
            day.innerHTML = `<h1>Venerdì</h1>`
            iExercise = 12;
        }
        if (iDay === 4) {
            day.innerHTML = `<h1>Sabato</h1>`
            iExercise = 18;
        }
        const esercizio = source [iExercise];
        exercise.innerHTML = `Esercizio ${esercizio.esercizio} di 6`;
        serie.innerHTML = `Serie ${iSerie} di ${esercizio.serie}`;
        ripetizione.innerHTML = `${esercizio.ripetizioni} Ripetizioni`;
        img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
        clock.innerHTML = `<h1 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h1>`;
    }
}



function startCountdown() {
    const esercizio = source [iExercise];
    var count = esercizio.rest; // 2 minutes in seconds
    var timer = setInterval(function() {
      count--;
      var minutes = Math.floor(count / 60);
      var seconds = count % 60;
      var countdownElement = document.getElementById("countdown");
      if (countdownElement) {
        countdownElement.innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
      }
      if (count == 0) {
        clearInterval(timer);
        // Do something when countdown is finished
        if (iExercise === 5 & iSerie===esercizio.serie){
            finished.classList.remove("hidden");
        }
        if (iSerie===esercizio.serie) {
            iSerie = 1;
            iExercise++;
            console.log(iSerie);
            console.log(iExercise);
            const esercizio = source [iExercise];
            exercise.innerHTML = `Esercizio ${esercizio.esercizio} di 6`;
            serie.innerHTML = `Serie ${iSerie} di ${esercizio.serie}`;
            ripetizione.innerHTML = `${esercizio.ripetizioni} Ripetizioni`;
            img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
            clock.innerHTML = `<h1 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h1>`;
        }
        else {
            iSerie++;
            console.log(iSerie);
            console.log(iExercise);
            const esercizio = source [iExercise];
            exercise.innerHTML = `Esercizio ${esercizio.esercizio} di 6`;
            serie.innerHTML = `Serie ${iSerie} di ${esercizio.serie}`;
            ripetizione.innerHTML = `${esercizio.ripetizioni} Ripetizioni`;
            img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
            clock.innerHTML = `<h1 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h1>`;
        }
      }
    }, 1000);
  }