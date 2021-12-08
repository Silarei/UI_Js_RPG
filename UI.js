var blueTemplarHP;
var blueTemplarPA;
var blueTemplarAttack;
var blueTemplarStunned;
var redTemplarHP;
var redTemplarPA;
var redTemplarAttack;
var redTemplarStunned;
var greenTemplarHP;
var greenTemplarPA;
var blackTemplarHP;
var blackTemplarPA;
var witchHP;
var compteurRound;


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
    witchHP = 80;
    blueTemplarAttack = 10;
    blueTemplarStunned = false;   
    redTemplarAttack = 15;
    redTemplarStunned = false;
    nbTour = 1;
    compteurRound = 0;
}

function round() {
    if (compteurRound == 0) {
        if (!blueTemplarStunned && blueTemplarHP > 0) {
            tourTemplier("bleu", blueTemplarAttack);    
        }
        else if (blueTemplarHP <= 0) {
            document.getElementById("combatLog").innerHTML = "Le templier bleu est mort et ne peux plus attaquer !";
        }
        else {
            document.getElementById("combatLog").innerHTML = "Le templier bleu est incapable d'attaquer ce tour !";
        }
    }
    else if (compteurRound == 1) {
        if (!redTemplarStunned && redTemplarHP > 0) {
            tourTemplier("rouge", redTemplarAttack);
        }
        else if (redTemplarHP <= 0) {
            document.getElementById("combatLog").innerHTML = "Le templier rouge est mort et ne peux plus attaquer !";
        }
        else {
            document.getElementById("combatLog").innerHTML = "Le templier rouge est incapable d'attaquer ce tour !";
        }
    }
}

function tourTemplier(templarName, templarAttack) {
    document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " se prépare à agir ! <br> <input type='button' onclick='templarAttackMonster(\""+templarName+"\","+templarAttack+")' value='Attaque'> <input type='button' onclick='templarDefend("+templarName+")' value='Defense'> <input type='button' onclick='templarSpecialAttack("+templarName+")' value='Attaque Speciale'> ";
}

function templarAttackMonster(templarName, templarAttack) {
    witchHP = witchHP - templarAttack;
    document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " inflige " + templarAttack + "dégâts !<br> Il reste a la sorcière " + witchHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
}

function templarDefend(templarName) {
    increaseCounter()
}

function templarSpecialAttack(templarName) {
    increaseCounter()
}

function increaseCounter() {
    compteurRound = compteurRound + 1;
    returnToStartingState()
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