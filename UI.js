var blueTemplarHP;
var redTemplarHP;
var greenTemplarHP;
var blackTemplarHP;
var witchHP;
var blueTemplarAttack;

//Fonction d'initialisation des variables
function initialisation() {
    blueTemplarHP = 50;
    redTemplarHP = 40;
    greenTemplarHP = 30;
    blackTemplarHP = 40;
    witchHP = 60;
    blueTemplarAttack = 8;
    nbTour = 1;
}

function attack() {
    witchHP = witchHP - blueTemplarAttack;
    document.getElementById("combatLog").innerHTML = "Le templier inflige " + blueTemplarAttack + "dégâts !<br> Il reste a la sorcière " + witchHP + " PV !<br> <input type='button' onclick='witchStrikeBack()' value='NEXT'>";
}

function witchStrikeBack() {
    blueTemplarHP = blueTemplarHP - 6;
    document.getElementById("combatLog").innerHTML = "La sorcière inflige 6 dégâts !<br> Il reste au templier " + blueTemplarHP + "PV !<br> <input type='button' onclick='returnToStartingState()' value='NEXT'>";
}

function returnToStartingState() {
    nbTour++;
    document.getElementById("combatLog").innerHTML = "C'est le tour "+ nbTour + " !<br>C'est au tour du templier bleu.";
}