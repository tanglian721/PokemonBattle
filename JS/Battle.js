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
    skillAttack: 'userAttack * 2',
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
let userPHcurrent = userPHmax; //need cookie
let userAttackMax = scorbunny.attackMax; //need cookie
let userAttackMin = scorbunny.attackMin; //need cookie
let userDefense = scorbunny.defense; //need cookie
let userSpeed = scorbunny.speed; //need cookie
let userSkipNum = scorbunny.skipNum; //need cookie
let userBuff = scorbunny.buff;
let userDebuff = scorbunny.debuff;
let userSkillName = scorbunny.skillName;
let userImgPath = scorbunny.levelOneImgPath; //need cookie
let userBackGroundPath = scorbunny.backGroundPath;
let userSkillAttack;
let userAttack;
let userDamage;
let userSpiritPoint = 0; //need cookie
let userRestStopRound = -1;
let userRestBuffRound = -1;

let userNameDisplay = document.getElementById('PH-area-user-name');
let userHealthPrecent = userPHcurrent / userPHmax;
let userHealthBarDisplay = document.getElementById('PH-area-user-health-bar-content');
let userHealthPointDisplay = document.getElementById("PH-area-user-health-point-left");
let userHealthPointMax = document.getElementById('PH-area-user-health-point-max');
let userSpiritPiontDisplay = document.getElementById('spirit-bar-max-current');
let userSkillBtnName = document.getElementById('skill-btn');

/* set com variable */
let comName = kubfu.name;
let comPHmax = kubfu.PHmax;
let comPHcurrent = comPHmax; //need cookie
let comAttackMax = kubfu.attackMax; //need cookie
let comAttackMin = kubfu.attackMin; //need cookie
let comDefense = kubfu.defense; //need cookie
let comSpeed = kubfu.speed; //need cookie
let comImgPath = kubfu.levelOneImgPath;
let comAttack;
let comDamage;

let comNameDisplay = document.getElementById('PH-area-com-name');
let comHealthPrecent = comPHcurrent / comPHmax;
let comHealthBarDisplay = document.getElementById('PH-area-com-health-bar-content');
let comHealthPointDisplay = document.getElementById("PH-area-com-health-point-left");
let comHealthPointMax = document.getElementById('PH-area-com-health-point-max');
let statusDisplay2 = document.getElementById('move-status-com-text2');
let userPHDamageDisplay = document.getElementById('user-PH-Damage');

/*declare other variable */
let userTimerNum = 0; //need cookie
let comTimerNum = 0; //need cookie
let userSpiritBar = document.getElementById('timer-user-bar-current');
let comSpiritBar = document.getElementById('timer-com-bar-current');
let userMoveBtn = document.getElementById('battle-area-user-btn');
let userArea = document.getElementById('battle-area-user');
let medicine = 50;



/*set background status */
document.body.style.backgroundImage = "URL('../images/battle1Backgroud.jpg')"; //How to use a variable in right quote?

userNameDisplay.innerHTML = userName.toUpperCase(); //user name display
UserHealthDisplay(); //initial user health display

comNameDisplay.innerHTML = comName.toUpperCase(); //com name display
ComHealthDisplay(); //initial com health display
// userMoveBtn.style.display = "none"; // do not display the move button 
// userSkillBtnName.style.display = "none"; // do not display the skill button
UserSpiritCheck(); //initial user spirit display
statusDisplay2.style.display = "none";
userPHDamageDisplay.style.display = "none";
console.log(userAttackMax);
console.log(userAttackMin);
/* status functions start*/
/* user health  display*/
function UserHealthDisplay() {
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
            // console.log(userTimerNum);
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
            // console.log(comTimerNum);
        }
    }


}

/*spirit gathering */
function UserSpiritGatheringBar() {
    userSpiritPoint = (Math.floor(Math.random() * (30 - 10)) + 10) + userSpiritPoint;
    console.log(userSpiritPoint);
    if (userSpiritPoint >= 100) {
        userSpiritPoint = 100;
    }
    UserSpiritCheck();
}

function UserSpiritCheck() {
    if (userSpiritPoint >= 100) {
        userSkillBtnName.style.display = "block";
        userSkillBtnName.innerHTML = userSkillName + " / T";
        userSpiritPiontDisplay.style.width = userSpiritPoint / 2 + "vw";
    } else {
        userSpiritPiontDisplay.style.width = userSpiritPoint / 2 + "vw";

        if (userSpiritPoint === 100) {
            userSpiritPiontDisplay.style.backgroundColor = "#FF0000";
        } else if (userSpiritPoint >= 75) {
            userSpiritPiontDisplay.style.backgroundColor = "#FF4000";
            console.log(userSpiritPoint);
        } else if (userSpiritPoint >= 50) {
            userSpiritPiontDisplay.style.backgroundColor = "#FF5E00";
        } else if (userSpiritPoint >= 25) {
            userSpiritPiontDisplay.style.backgroundColor = "#FFB300";
        } else {
            userSpiritPiontDisplay.style.backgroundColor = "#FFFF00";
        }
    }


}
/* Stop round check */
function StopRoundCheck() {
    if (userRestStopRound < 0) {
        userRestStopRound = -1;
        statusDisplay2.style.display = 'none';
        comSpeed = kubfu.speed;
    } else if (userRestStopRound === 0) {
        statusDisplay2.style.display = 'block';
        statusDisplay2.innerHTML = 'Stop round left : ' + userRestStopRound;
        userRestStopRound--;
        comSpeed = kubfu.speed;
        setTimeout(() => {
            statusDisplay2.style.display = 'none';
        }, 2000);
    } else {
        statusDisplay2.style.display = 'block';
        statusDisplay2.innerHTML = 'Stop round left : ' + userRestStopRound;
        userRestStopRound--;
    }
}

/* Buff Round Check */
function BuffRoundCheck() {
    if (userRestBuffRound === 0) {
        userRestBuffRound = -1;
        userAttackMax = userAttackMax - userBuff;
        userAttackMin = userAttackMin - userBuff;
        comDefense = comDefense + userDebuff;
    } else {
        userRestBuffRound--;
    }
}
/* status functions end*/







/* move function */
function UserAttack() { // user noraml attack
    console.log(userAttackMax);
    console.log(userAttackMin);
    console.log(userRestBuffRound);
    StopRoundCheck();
    BuffRoundCheck();
    console.log(userAttackMax);
    console.log(userAttackMin);
    userAttack = Math.floor(Math.random() * (userAttackMax - userAttackMin)) + userAttackMin;
    comDamage = userAttack - comDefense;
    comPHcurrent = comPHcurrent - comDamage;
    ComHealthDisplay();
    UserSpiritGatheringBar();
    setTimeout(TimerStart, 2000);
}

function ComAttack() { // com normal  attack
    comAttack = Math.floor(Math.random() * (comAttackMax - comAttackMin)) + comAttackMin;
    userDamage = comAttack - userDefense;
    userPHcurrent = userPHcurrent - userDamage;
    UserHealthDisplay();
    setTimeout(TimerStart, 2000);
}
/* user skill attack */
function UserSkillAttack() {
    StopRoundCheck();
    BuffRoundCheck();
    userAttack = Math.floor(Math.random() * (userAttackMax - userAttackMin)) + userAttackMin;
    console.log(userSkillName);
    if (userSkillName === "double kick") {
        userSkillAttack = userAttack * 2;
    } else if (userSkillName = "Knock Off") {
        userSkillAttack = userAttack + 50;
    } else if (userSkillName = "Water Gun") {
        userSkillAttack = userAttack + comDefense;
    } else {
        userSkillAttack = userAttack;
    }
    comDamage = userSkillAttack - comDefense;

    userSpiritPoint = 0;
    console.log(comDamage);
    ComHealthDisplay();
    UserSpiritCheck();
    setTimeout(TimerStart, 2000);
}

/*user stop com move */
function UserStopAttack() {
    comSpeed = 100000000;
    userRestStopRound = userSkipNum;
    console.log(comSpeed);
    StopRoundCheck();
    ComHealthDisplay();
    UserSpiritCheck();
    setTimeout(TimerStart, 2000);
}

/* buff attack */
function UserBuffAttack() {
    userAttackMax = userAttackMax + userBuff;
    userAttackMin = userAttackMin + userBuff;
    comDefense = comDefense - userDebuff;
    userRestBuffRound = 3;
    ComHealthDisplay();
    UserSpiritCheck();
    setTimeout(TimerStart, 2000);
}

/*healing */
function UserHealing() {
    StopRoundCheck();
    BuffRoundCheck();
    userPHcurrent = userPHcurrent + medicine;
    if (userPHcurrent >= userPHmax) {
        userPHcurrent = userPHmax;
    }
    userPHDamageDisplay.style.display = "block";
    userPHDamageDisplay.innerHTML = "+ PH" + medicine;
    setTimeout(() => {
        userPHDamageDisplay.style.display = "none";
    }, 2000);
    UserHealthDisplay();
    UserSpiritCheck();
    setTimeout(TimerStart, 2000);
}