let counter;
let intervalId = null;

function start() {
    // console.log(Number.isNaN(counter));
    // if (!Number.isNaN(counter)) {
    if (intervalId === null) {
        //Recupération de la valeur de l'utilisateur
        counter = document.getElementById("timing").value;
        // Modif de l'html
        document.getElementById("bip").innerHTML = counter;
        document.getElementById("btn").classList.remove("btn-primary");
        document.getElementById("btn").innerHTML = "Compteur en cours";
        //Set de l'intervalle d'execution setInterval(functionARejouer[function()],IntervalleDeRepetitionEnMs[Number])
        intervalId = setInterval(count, 1000);
    }
}

function count() {
    counter--;
    if (counter == 0) finish();
    else {
        document.getElementById("bip").innerHTML = counter;
    }
}

function finish() {
    clearInterval(intervalId);
    document.getElementById("bip").innerHTML = counter;
    // Modif de l'html
    document.getElementById("btn").classList.add("btn-primary");
    document.getElementById("btn").classList.remove("btn-secondary");
    document.getElementById("btn").innerHTML = "Relancer le compteur";
    counter = document.getElementById("timing").value;
    //Reset de l'intervalle
    intervalId = null;
}