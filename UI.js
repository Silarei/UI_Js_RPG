var blueTemplarHP;
var blueTemplarPA;
var blueTemplarArmor;
var blueTemplarAttack;
var blueTemplarStunned;
var redTemplarHP;
var redTemplarPA;
var redTemplarArmor;
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
    blueTemplarArmor = 10;
    blueTemplarAttack = 10;
    blueTemplarStunned = false;   
    redTemplarHP = 40;
    redTemplarPA = 20;
    redTemplarArmor = 5;
    redTemplarAttack = 15;
    redTemplarStunned = false;
    greenTemplarHP = 30;
    greenTemplarPA = 30;
    greenTemplarArmor = 10;
    greenTemplarAttack = 15;
    greenTemplarStunned = false;
    blackTemplarHP = 40;
    blackTemplarPA = 30;
    blackTemplarArmor = 10;
    blackTemplarAttack = 15;
    blackTemplarStunned = false;
    witchHP = 80;
    nbTour = 1;
    compteurRound = 0;
}

function round() {
    if (compteurRound == 0) {

        if (!blueTemplarStunned && blueTemplarHP > 0) {
            tourTemplier("bleu", blueTemplarAttack, blueTemplarPA);    
        }
        else if (blueTemplarHP <= 0) {
            document.getElementById("combatLog").innerHTML = "Le templier bleu est mort et ne peux plus attaquer !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
        }
        else {
            document.getElementById("combatLog").innerHTML = "Le templier bleu est incapable d'attaquer ce tour !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
        }
    }
    else if (compteurRound == 1) {
        if (!redTemplarStunned && redTemplarHP > 0) {
            tourTemplier("rouge", redTemplarAttack, redTemplarPA);
        }
        else if (redTemplarHP <= 0) {
            document.getElementById("combatLog").innerHTML = "Le templier rouge est mort et ne peux plus attaquer !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
        }
        else {
            document.getElementById("combatLog").innerHTML = "Le templier rouge est incapable d'attaquer ce tour !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
        }
    }
    else if (compteurRound == 2) {
        if (!greenTemplarStunned && greenTemplarHP > 0) {
            tourTemplier("vert", greenTemplarAttack, greenTemplarPA);
        }
        else if (greenTemplarHP <= 0) {
            document.getElementById("combatLog").innerHTML = "Le templier vert est mort et ne peux plus attaquer !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
        }
        else {
            document.getElementById("combatLog").innerHTML = "Le templier vert est incapable d'attaquer ce tour !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
        }
    }
    else if (compteurRound == 3) {
        if (!blackTemplarStunned && blackTemplarHP > 0) {
            tourTemplier("noir", blackTemplarAttack, blackTemplarPA);
        }
        else if (blackTemplarHP <= 0) {
            document.getElementById("combatLog").innerHTML = "Le templier noir est mort et ne peux plus attaquer !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
        }
        else {
            document.getElementById("combatLog").innerHTML = "Le templier noir est incapable d'attaquer ce tour !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
        }
    }
}

function tourTemplier(templarName, templarAttack, templarPA) {
    document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " se prépare à agir ! <br> <input type='button' onclick='templarAttackMonster(\""+templarName+"\","+templarAttack+")' value='Attaque'> <input type='button' onclick='templarDefend(\""+templarName+"\")' value='Defense'> <input type='button' onclick='templarSpecialAttack(\""+templarName+"\","+templarAttack+","+templarPA+")' value='Attaque Speciale'> ";
}

function templarAttackMonster(templarName, templarAttack) {
    witchHP = witchHP - templarAttack;
    document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " inflige " + templarAttack + "dégâts !<br> Il reste a la sorcière " + witchHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
}

function templarDefend(templarName) {
    if (templarName == "bleu") {
        blueTemplarArmor = blueTemplarArmor *2
    }
    else if (templarName == "rouge") {
        redTemplarArmor = redTemplarArmor *2
    }
    else if (templarName == "vert") {
        greenTemplarArmor = greenTemplarArmor *2
    }
    else {
        blackTemplarArmor = blackTemplarArmor *2
    }
    document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " se prépare à se défendre !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
}

function templarSpecialAttack(templarName, templarAttack, templarPA) {
    if (templarPA < 5) {
        document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " n'a pas suffisament de point d'action ! <br> <input type='button' onclick='templarAttackMonster(\""+templarName+"\","+templarAttack+")' value='Attaque'> <input type='button' onclick='templarDefend(\""+templarName+"\")' value='Defense'>";
    }
    else if (templarName == "bleu") {
        blueTemplarArmor = blueTemplarArmor * 3;
        redTemplarArmor = redTemplarArmor * 3;
        greenTemplarArmor = greenTemplarArmor * 3;
        blackTemplarArmor = blackTemplarArmor * 3;
        document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " protège ses alliés !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
    }
    else if (templarName == "rouge") {
        document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " attaque aveuglément !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
    }
    else if (templarName == "vert") {
        document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " joint les mains en prière et soigne ses alliés !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
    }
    else {
        document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " exécute sa juste vengeance !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
    }
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
    if (compteurRound == 4) {
        nbTour++;
        compteurRound == 0;
    }
    document.getElementById("combatLog").innerHTML = "C'est le tour "+ nbTour + " !<br> <input type='button' onclick='round()' value='NEXT'>";
}

function updateAllHPA() {
    document.getElementById("blueTemplarHPA").innerHTML = "PV : " + blueTemplarHP + "/50<br>PA : " + blueTemplarPA + "/10";
    document.getElementById("redTemplarHPA").innerHTML = "PV : " + redTemplarHP + "/40 <br>PA : " + redTemplarPA + "/20";
    document.getElementById("greenTemplarHPA").innerHTML = "PV : " + greenTemplarHP + "/30<br>PA : " + greenTemplarPA + "/30";
    document.getElementById("blackTemplarHPA").innerHTML = "PV : " + blackTemplarHP + "/40<br>PA : " + blackTemplarPA + "/30";
}

function afficherHP() {

}