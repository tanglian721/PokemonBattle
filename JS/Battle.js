let scorbunny = {
    name: 'scorbunny',
    PHmax: 220,
    attackMax: 100,
    attackMin: 30,
    defense: 20,
    speed: 50,
    skipNum: 3,
    buff: 20,
    debuff: 10,
    skillName: 'double kick',
    levelOneImgPath: '../images/scorbunny-level1.png',
    levelTwoImgPath: '../images/scorbunny-level2.png',
    levelThreeImgPath: '../images/scorbunny-level3.png',
    backGroundPath: '../images/battle1Backgroud.jpg'
}
let kubfu = {
    name: 'kubfu',
    PHmax: 250,
    attackMax: 90,
    attackMin: 40,
    defense: 20,
    speed: 70,
    // skip: 3,
    // buff: 20,
    // debuff: 10,
    // skillName: 'double kick',
    levelOneImgPath: '../images/kubfu.png',
    // levelTwoImgPath: '../images/scorbunny-level2.png',
    // levelThreeImgPath: '../images/scorbunny-level3.png',
}


/* set user variable */
let userName = scorbunny.name;
let userPHmax = scorbunny.PHmax;
let userPHcurrent = userPHmax;
let userAttackMax = scorbunny.attackMax;
let userAttackMin = scorbunny.attackMin;
let userDefense = scorbunny.defense;
let userSpeed = scorbunny.speed;
let userSkipNum = scorbunny.skipNum;
let userBuff = scorbunny.buff;
let userDebuff = scorbunny.debuff;
let userSkillName = scorbunny.skillName;
let userLevelOneImgPath = scorbunny.levelOneImgPath;
let userLevelTwoImgPath = scorbunny.levelTwoImgPath;
let userLevelThreeImgPath = scorbunny.levelThreeImgPath;
let userBackGroundPath = scorbunny.backGroundPath;
let userAttack;
let userDamage;

let userNameDisplay = document.getElementById('PH-area-user-name');
let userHealthPrecent = userPHcurrent / userPHmax;
let userHealthBarDisplay = document.getElementById('PH-area-user-health-bar-content');
let userHealthPointDisplay = document.getElementById("PH-area-user-health-point-left");
let userHealthPointMax = document.getElementById('PH-area-user-health-point-max');

/* set com variable */
let comName = kubfu.name;
let comPHmax = kubfu.PHmax;
let comPHcurrent = comPHmax;
let comAttackMax = kubfu.attackMax;
let comAttackMin = kubfu.attackMin;
let comDefense = kubfu.defense;
let comSpeed = kubfu.speed;
let comLevelOneImgPath = kubfu.levelOneImgPath;
let comAttack;
let comDamage;

let comNameDisplay = document.getElementById('PH-area-com-name');
let comHealthPrecent = comPHcurrent / comPHmax;
let comHealthBarDisplay = document.getElementById('PH-area-com-health-bar-content');
let comHealthPointDisplay = document.getElementById("PH-area-com-health-point-left");
let comHealthPointMax = document.getElementById('PH-area-com-health-point-max');
console.log(comHealthPrecent);
/*declare other variable */
let userTimerNum = 0;
let comTimerNum = 0;
let userSpiritBar = document.getElementById('timer-user-bar-current');
let comSpiritBar = document.getElementById('timer-com-bar-current');
let userMoveBtn = document.getElementById('battle-area-user-btn');
let userArea = document.getElementById('battle-area-user');

/* status functions start*/
/* user health  display*/
function UserHealthDisplay() {
    userNameDisplay.innerHTML = userName.toUpperCase();
    userHealthPrecent = userPHcurrent / userPHmax;
    userHealthBarDisplay.style.width = userHealthPrecent * 60 + 'vw';
    if (userHealthPrecent >= 0.8) {
        userHealthBarDisplay.style.backgroundColor = "#33FF00";
    } else if (userHealthPrecent >= 0.6) {
        userHealthBarDisplay.style.backgroundColor = "#A2FF00";
    } else if (userHealthPrecent >= 0.4) {
        userHealthBarDisplay.style.backgroundColor = "#FFE100";
    } else if (userHealthPrecent >= 0.2) {
        userHealthBarDisplay.style.backgroundColor = "#FF5500";
    } else {
        userHealthBarDisplay.style.backgroundColor = "#FF0000";
    }
    userHealthPointDisplay.innerText = userPHcurrent;
    userHealthPointMax.innerText = userPHmax;
}

/* com health display*/
function ComHealthDisplay() {
    comNameDisplay.innerHTML = comName.toUpperCase();
    comHealthPrecent = comPHcurrent / comPHmax;
    comHealthBarDisplay.style.width = comHealthPrecent * 60 + 'vw';
    if (comHealthPrecent >= 0.8) {
        comHealthBarDisplay.style.backgroundColor = "#33FF00";
    } else if (comHealthPrecent >= 0.6) {
        comHealthBarDisplay.style.backgroundColor = "#A2FF00";
    } else if (comHealthPrecent >= 0.4) {
        comHealthBarDisplay.style.backgroundColor = "#FFE100";
    } else if (comHealthPrecent >= 0.2) {
        comHealthBarDisplay.style.backgroundColor = "#FF5500";
    } else {
        comHealthBarDisplay.style.backgroundColor = "#FF0000";
    }
    comHealthPointDisplay.innerText = comPHcurrent;
    comHealthPointMax.innerText = comPHmax;
}

/* timer display */
function TimerStart() {
    userMoveBtn.style.display = "none";
    userArea.style.transform = 'scale(1.2)';
    userArea.style.left = "10vw";
    let userTimer = setInterval(UserTimer, userSpeed);
    let comTimer = setInterval(ComTimer, comSpeed);

    function UserTimer() {
        userTimerNum++;
        if (userTimerNum > 60) {
            userTimerNum = 0;
            userArea.style.transform = 'scale(1)';
            setTimeout(() => {
                userMoveBtn.style.display = "block";
                userArea.style.left = "0";
            }, 200);
            clearInterval(comTimer);
            clearInterval(userTimer);
            // setTimeout(clearInterval(userTimer), 2000);
            // setTimeout(clearInterval(comTimer), 2000);
        } else {
            userSpiritBar.style.height = userTimerNum + "vh";
            console.log(userTimerNum);
        }
    }

    function ComTimer() {
        comTimerNum++;
        if (comTimerNum > 60) {
            comTimerNum = 0;
            ComAttack();
            clearInterval(comTimer);
            clearInterval(userTimer);
            // setTimeout(clearInterval(userTimer), 2000);
            // setTimeout(clearInterval(comTimer), 2000);
        } else {
            comSpiritBar.style.height = comTimerNum + "vh";
            console.log(comTimerNum);
        }
    }


}


/* status functions end*/





/*set background status */
document.body.style.backgroundImage = "URL('../images/battle1Backgroud.jpg')"; //How to use a variable in right quote?

userNameDisplay.innerHTML = userName.toUpperCase(); //user name display
UserHealthDisplay(); //initial user health display

comNameDisplay.innerHTML = comName.toUpperCase(); //com name display
ComHealthDisplay(); //initial com health display
userMoveBtn.style.display = "none";



/* move function */
function UserAttack() {
    userAttack = Math.floor(Math.random() * (userAttackMax - userAttackMin)) + userAttackMin;
    comDamage = userAttack - comDefense;
    comPHcurrent = comPHcurrent - comDamage;
    ComHealthDisplay();
    console.log(comPHcurrent);
    console.log(comHealthPrecent);
    setTimeout(TimerStart, 2000);


}

function ComAttack() {
    comAttack = Math.floor(Math.random() * (comAttackMax - comAttackMin)) + comAttackMin;
    userDamage = comAttack - userDefense;
    userPHcurrent = userPHcurrent - userDamage;
    UserHealthDisplay();
    setTimeout(TimerStart, 2000);

}