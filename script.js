let counter;
let intervalId = null;
let originalCounter;
let myProgressBar=document.getElementById("progressBar") ;

function playAudio() {
    document.getElementById("audio").play();
}
function progressBar(){
    barWidth= counter*100/originalCounter;
    myProgressBar.style.width=barWidth+"%";
}
function start() {
    // console.log(Number.isNaN(counter));
    // if (!Number.isNaN(counter)) {
    if (intervalId === null) {
        //Recupération de la valeur de l'utilisateur
        counter = document.getElementById("timing").value;
        //keep orginal value for progress bar
        originalCounter=counter;
        // Modif de l'html
        document.getElementById("bip").innerHTML = counter;
        document.getElementById("btn").innerHTML = "Compteur en cours";
        //Set de l'intervalle d'execution setInterval(functionARejouer[function()],IntervalleDeRepetitionEnMs[Number])
        intervalId = setInterval(count, 1000);
    }
}

function count() {
    if (counter == 1) {
        counter = 0;
        playAudio()
        finish();
        return
    };
    counter--;
    progressBar();
    document.getElementById("bip").innerHTML = counter;
    
}

function finish() {
    
    document.getElementById("bip").innerHTML = counter;
    clearInterval(intervalId);
    // Modif de l'html
    myProgressBar.style.width=0+"%";
    document.getElementById("btn").innerHTML = "Relancer le compteur";
    counter = document.getElementById("timing").value;
    //play the sound 
    
    //Reset de l'intervalle
    intervalId = null;
}
