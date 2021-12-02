var blueTemplarHP;
var blueTemplarPA;
var redTemplarHP;
var redTemplarPA;
var greenTemplarHP;
var greenTemplarPA;
var blackTemplarHP;
var blackTemplarPA;
var witchHP;
var blueTemplarAttack;

//Fonction d'initialisation des variables
function initialisation() {
    blueTemplarHP = 50;
    blueTemplarPA = 10;
    redTemplarHP = 40;
    redTemplarPA = 20;
    greenTemplarHP = 30;
    greenTemplarPA = 30;
    blackTemplarHP = 40;
    blackTemplarPA = 30;
    witchHP = 60;
    blueTemplarAttack = 8;
    nbTour = 1;
}

function round() {
    witchHP = witchHP - blueTemplarAttack;
    document.getElementById("combatLog").innerHTML = "Le templier inflige " + blueTemplarAttack + "dégâts !<br> Il reste a la sorcière " + witchHP + " PV !<br> <input type='button' onclick='witchStrikeBack()' value='NEXT'>";
}

function witchStrikeBack() {
    blueTemplarHP = blueTemplarHP - 6;
    document.getElementById("combatLog").innerHTML = "La sorcière inflige 6 dégâts !<br> Il reste au templier " + blueTemplarHP + "PV !<br> <input type='button' onclick='returnToStartingState()' value='NEXT'>";
    updateAllHPA();
}

function returnToStartingState() {
    nbTour++;
    document.getElementById("combatLog").innerHTML = "C'est le tour "+ nbTour + " !<br>C'est au tour du templier bleu.";
}

function updateAllHPA() {
    document.getElementById("blueTemplarHPA").innerHTML = "PV : " + blueTemplarHP + "/50<br>PA : " + blueTemplarPA + "/10";
    document.getElementById("redTemplarHPA").innerHTML = "PV : " + redTemplarHP + "/40 <br>PA : " + redTemplarPA + "/20";
    document.getElementById("greenTemplarHPA").innerHTML = "PV : " + greenTemplarHP + "/30<br>PA : " + greenTemplarPA + "/30";
    document.getElementById("blackTemplarHPA").innerHTML = "PV : " + blackTemplarHP + "/40<br>PA : " + blackTemplarPA + "/30";
}

function afficherHP() {

}