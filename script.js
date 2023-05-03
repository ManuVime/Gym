//Raccogliamo tutti gli elementi
const day = document.querySelector(".day");
const exercise = document.querySelector(".exercise");
const serie = document.querySelector(".serie");
const ripetizione = document.querySelector(".ripetizione");
const img = document.querySelector(".exerciseImg");
const img2 = document.querySelector(".exerciseImg2");
const clock = document.querySelector(".clock");
const finished = document.querySelector(".finished");
const body = document.querySelector(".body");

let iExercise = 0;
let iSerie = 1;
let iDay=1;
var timer; //la definisco quì perché altrimenti non posso usarla in changeDay
const esercizio = source [iExercise];
const nextEsercizio = source [iExercise+1];
exercise.innerHTML = `<h4>Esercizio ${esercizio.esercizio} di 6</h4>`;
serie.innerHTML = `<h4>Serie ${iSerie} di ${esercizio.serie}</h4>`;
ripetizione.innerHTML = `<h4>${esercizio.ripetizioni} Ripetizioni</h4>`;
img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
img2.innerHTML = `<img class "img2" src ="${nextEsercizio.immagine}" alt = "${nextEsercizio.nome}">`;
clock.innerHTML = `<h5 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h5>`;

function changeDay() {
    clearInterval(timer);
    if (iDay === 4) {
        iDay = 1;
        day.innerHTML = `<h1>Lunedì</h1>`
        iExercise = 0;
        iSerie = 0;
        const esercizio = source [iExercise];
        const nextEsercizio = source [iExercise+1];
        exercise.innerHTML = `<h4>Esercizio ${esercizio.esercizio} di 6</h4>`;
        serie.innerHTML = `<h4>Serie ${iSerie} di ${esercizio.serie}</h4>`;
        ripetizione.innerHTML = `<h4>${esercizio.ripetizioni} Ripetizioni</h4>`;
        img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
        img2.innerHTML = `<img class "img2" src ="${nextEsercizio.immagine}" alt = "${nextEsercizio.nome}">`;
        clock.innerHTML = `<h5 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h5>`;
    }
    else{
        iDay++;
        if (iDay === 2) {
            day.innerHTML = `<h1>Mercoledì</h1>`
            iExercise = 6;
            iSerie = 0;
        }
        if (iDay === 3) {
            day.innerHTML = `<h1>Venerdì</h1>`
            iExercise = 12;
            iSerie = 0;
        }
        if (iDay === 4) {
            day.innerHTML = `<h1>Sabato</h1>`
            iExercise = 18;
            iSerie = 0;
        }
        const esercizio = source [iExercise];
        const nextEsercizio = source [iExercise+1];
        exercise.innerHTML = `<h4>Esercizio ${esercizio.esercizio} di 6</h4>`;
        serie.innerHTML = `<h4>Serie ${iSerie} di ${esercizio.serie}</h4>`;
        ripetizione.innerHTML = `<h4>${esercizio.ripetizioni} Ripetizioni</h4>`;
        img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
        img2.innerHTML = `<img class "img2" src ="${nextEsercizio.immagine}" alt = "${nextEsercizio.nome}">`;
        clock.innerHTML = `<h5 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h5>`;
    }
}



function startCountdown() {
    const esercizio = source [iExercise];
    var count = esercizio.rest; // 2 minutes in seconds
    timer = setInterval(function() {
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
        if ((iExercise+1)%6 === 0 & iSerie>=esercizio.serie){
            finished.classList.remove("hidden");
            body.classList.add("hidden");
        }
        if (iSerie>=esercizio.serie) {
            iSerie = 1;
            iExercise++;
            console.log(iSerie);
            console.log(iExercise);
            const esercizio = source [iExercise];
            const nextEsercizio = source [iExercise+1];
            exercise.innerHTML = `<h4>Esercizio ${esercizio.esercizio} di 6</h4>`;
            serie.innerHTML = `<h4>Serie ${iSerie} di ${esercizio.serie}</h4>`;
            ripetizione.innerHTML = `<h4>${esercizio.ripetizioni} Ripetizioni</h4>`;
            img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
            if ((iExercise+1)%6 === 0) {
                img2.innerHTML = `<img class "img2" src ="images/plank.jpg" alt = "plank">`;
            }
            else {
                img2.innerHTML = `<img class "img2" src ="${nextEsercizio.immagine}" alt = "${nextEsercizio.nome}">`;
            }
            clock.innerHTML = `<h5 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h5>`;
        }
        else {
            iSerie++;
            console.log(iSerie);
            console.log(iExercise);
            const esercizio = source [iExercise];
            const nextEsercizio = source [iExercise+1];
            exercise.innerHTML = `<h4>Esercizio ${esercizio.esercizio} di 6</h4>`;
            serie.innerHTML = `<h4>Serie ${iSerie} di ${esercizio.serie}</h4>`;
            ripetizione.innerHTML = `<h4>${esercizio.ripetizioni} Ripetizioni</h4>`;
            img.innerHTML = `<img class "img" src ="${esercizio.immagine}" alt = "${esercizio.nome}">`;
            if ((iExercise+1)%6 === 0) {
                img2.innerHTML = `<img class "img2" src ="images/plank.jpg" alt = "plank">`;
            }
            else {
                img2.innerHTML = `<img class "img2" src ="${nextEsercizio.immagine}" alt = "${nextEsercizio.nome}">`;
            }
            clock.innerHTML = `<h2 id="countdown">${("0" + Math.floor(esercizio.rest / 60)).slice(-2) + ":" + ("0" + esercizio.rest % 60).slice(-2)}</h2>`;
        }
      }
    }, 1000);
  }