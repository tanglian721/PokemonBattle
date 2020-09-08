let userCharacter;
let userPokemon;
userCharacter = Cookies.get('UserCharacterCookie');
userPokemon = Cookies.get('UserPokemonCookie');
defaultDisplay();

function defaultDisplay() {
    if (userCharacter !== undefined) {
        document.getElementById(userCharacter).style.filter = "brightness(100%)";
    } else if (userPokemon !== undefined) {
        document.getElementById(userPokemon).style.filter = "brightness(100%)";
    }
}

function StartBattle() {
    if (Cookies.get('UserCharacterCookie') === undefined) {
        document.getElementById("Victor").style.display = "none";
        document.getElementById("Gloria").style.display = "none";
        let result = document.createElement("p");
        result.innerHTML = 'You Have not Choose Character!';
        document.getElementById('characterSelect').append(result);
        document.getElementById('characterSelect').style.gridTemplateColumns = "1fr";
        let i = document.getElementsByTagName('p')[0];
        console.log(i);
        i.style.animation = "Twinkle 0.3s linear infinite";
        setTimeout(() => {
            document.getElementById("Victor").style.display = "block";
            document.getElementById("Gloria").style.display = "block";
            document.getElementById('characterSelect').style.gridTemplateColumns = "1fr 1fr";
            i.remove();
        }, 800);
    } else if (Cookies.get('UserPokemonCookie') === undefined) {
        document.getElementById("scorbunny").style.display = "none";
        document.getElementById("grookey").style.display = "none";
        document.getElementById("sobble").style.display = "none";
        let result = document.createElement("p");
        result.innerHTML = 'You Have not Choose pokemon!';
        document.getElementById('pokemonSelect').append(result);
        document.getElementById('pokemonSelect').style.gridTemplateColumns = "1fr";
        let i = document.getElementsByTagName('p')[0];
        console.log(i);
        i.style.animation = "Twinkle 0.3s linear infinite";
        setTimeout(() => {
            document.getElementById("scorbunny").style.display = "block";
            document.getElementById("grookey").style.display = "block";
            document.getElementById("sobble").style.display = "block";
            document.getElementById('pokemonSelect').style.gridTemplateColumns = "1fr 1fr 1fr";
            i.remove();
        }, 800);
    } else {
        document.getElementById("Victor").style.display = "none";
        document.getElementById("Gloria").style.display = "none";
        document.getElementById(userCharacter).style.display = "block";
        document.getElementById('characterSelect').style.gridTemplateColumns = "1fr";
        document.getElementById("scorbunny").style.display = "none";
        document.getElementById("grookey").style.display = "none";
        document.getElementById("sobble").style.display = "none";
        document.getElementById(userPokemon).style.display = "block";
        document.getElementById('pokemonSelect').style.gridTemplateColumns = "1fr";

        setTimeout(() => {
            window.open("../Battle.html", '_self');
        }, 1000);
    }
}

function CharacterSelect(name) {
    document.getElementById("Victor").style.filter = "brightness(50%)"
    document.getElementById("Gloria").style.filter = "brightness(50%)"
    document.getElementById(name).style.filter = "brightness(100%)"
    userCharacter = document.getElementById(name).getAttribute("value");
    console.log(userCharacter);
    Cookies.set('UserCharacterCookie', userCharacter);
}


function PokemonSelect(name) {
    document.getElementById("scorbunny").style.filter = "brightness(50%)"
    document.getElementById("grookey").style.filter = "brightness(50%)"
    document.getElementById("sobble").style.filter = "brightness(50%)"
    document.getElementById(name).style.filter = "brightness(100%)"
    userPokemon = document.getElementById(name).getAttribute("value");
    console.log(userPokemon);
    Cookies.set('UserPokemonCookie', userPokemon);
}

function Clear() {
    Cookies.remove('UserCharacterCookie');
    Cookies.remove('UserPokemonCookie');
    window.open("../index.html", '_self');
    Cookies.remove('userPHcurrent');
    Cookies.remove('userAttackMax');
    Cookies.remove('userAttackMin');
    Cookies.remove('userDefense');
    Cookies.remove('userSpeed');
    Cookies.remove('userSpiritPoint');
    Cookies.remove('userRestStopRound');
    Cookies.remove('userRestBuffRound');
    Cookies.remove('comPHcurrent');
    Cookies.remove('comAttackMax');
    Cookies.remove('comAttackMin');
    Cookies.remove('comDefense');
    Cookies.remove('comSpeed');
}