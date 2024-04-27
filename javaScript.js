//main page
function inLoading() {
    //var _divdiv = createElement("div");
    var _divdiv = document.createElement("div");
    document.body.appendChild(_divdiv);
    _divdiv = document.createElement("div");
    document.body.appendChild(_divdiv);
    _divdiv = document.createElement("div");
    document.body.appendChild(_divdiv);
    document.body.children[0].setAttribute("class", "a");
    document.body.children[1].setAttribute("class", "a b");
    document.body.children[2].setAttribute("class", "a c");
    var c = document.createElement("div");
    document.body.appendChild(c);
    c.setAttribute("class", "con");
    var title, t = "MATCHES";
    for (c = 0; c < 7; c++) {
        title = document.createElement("h1");
        document.body.getElementsByClassName("con")[0].appendChild(title);
        title.innerHTML = t[c];
    }
    var pp = document.createElement("p");
    document.body.appendChild(pp);
    pp.innerHTML = "think with fun";
    pp.style.marginTop = "-12vw";
    window.setTimeout("continueInLouding()", 2000);
}
function continueInLouding() {
    var _divdiv = document.createElement("img");
    document.body.appendChild(_divdiv);
    //לעשות שהחיצים יראו לאט לאט
    _divdiv.setAttribute("src", "two.png");
    _divdiv.setAttribute("class", "chezt");
    _divdiv.onclick = function () {
        document.getElementsByClassName("chezt")[0].style.visibility = "hidden";
        document.getElementsByClassName("chezt")[1].style.visibility = "hidden";
        jumping();
        createlogIn();
    }
    _divdiv = document.createElement("img");
    document.body.appendChild(_divdiv);
    _divdiv.setAttribute("src", "one.png");
    _divdiv.setAttribute("class", "chezt");
    _divdiv.onclick = function () {
        document.getElementsByClassName("chezt")[0].style.visibility = "hidden";
        document.getElementsByClassName("chezt")[1].style.visibility = "hidden";
        jumping();
        _inst = document.body.lastChild;
        _inst.appendChild(document.createElement("label"));
        _inst.children[1].innerHTML = "There is an arithmetic exercise you need to change the location of  one of the matches (lines) in order the exercise will be  correct be carefull do it fast the timer move quick speed - 10 seconds slow speed - 30 seconds";
        _inst.appendChild(document.createElement("span"));
        _inst.lastChild.setAttribute("class", "ret");
        _inst.lastChild.innerHTML = "return...";
        document.getElementsByClassName("ret")[0].onclick = function () {
            document.body.lastChild.remove();
            document.getElementsByClassName("chezt")[0].style.visibility = "visible";
            document.getElementsByClassName("chezt")[1].style.visibility = "visible";
        }
    }
}
function jumping() {
    _divjump = document.createElement("div");
    document.body.appendChild(_divjump);
    _divjump.setAttribute("class", "divjump");
    _divjump.appendChild(document.createElement("h3"));
    _divjump.children[0].innerHTML = "matches";
    _divjump.style.animationName = 'open_divjump';
}


//page1
//arrayNumbers
let arrayNumbers = [
    ["_inDiv1", "_inDiv2", "_inDiv3", "_inDiv4", "_inDiv5", "_inDiv6"],//0
    ["_inDiv5", "_inDiv6"],//1
    ["_inDiv1", "_inDiv3", "_inDiv4", "_inDiv6", "_inDiv7"],//2
    ["_inDiv1", "_inDiv4", "_inDiv5", "_inDiv6", "_inDiv7",],//3
    ["_inDiv2", "_inDiv5", "_inDiv6", "_inDiv7",],//4
    ["_inDiv1", "_inDiv2", "_inDiv4", "_inDiv5", "_inDiv7"],//5
    ["_inDiv1", "_inDiv2", "_inDiv3", "_inDiv4", "_inDiv5", "_inDiv7"],//6
    ["_inDiv1", "_inDiv5", "_inDiv6"],//7
    ["_inDiv1", "_inDiv2", "_inDiv3", "_inDiv4", "_inDiv5", "_inDiv6", "_inDiv7"], //8
    ["_inDiv1", "_inDiv2", "_inDiv4", "_inDiv5", "_inDiv6", "_inDiv7",]//9
]
//arrayAexercise

let _level1Div = [[2, '+', 3, 0, 6], [2, '+', 7, 0, 6], [3, "-", 8, 0, 7], [2, '+', 4, 0, 8], [8, '+', 2, 0, 9], [5, '-', 9, 0, 1], [3, '+', 5, 8, 0], [9, '+', 3, 0, 9], [3, '-', 3, 0, 8], [9, '+', 6, 1, 3]];
let _level2Div = [[9, '-', 3, 0, 4], [4, '+', 6, 0, 3], [3, '+', 6, 1, 4], [9, '+', 4, 0, 1], [9, '+', 3, 0, 5], [5, '+', 0, 0, 8], [1, '+', 9, 1, 8], [1, '+', 4, 1, 7], [5, '+', 9, 0, 0], [4, '+', 9, 0, 5]];
let arrayAexercise = _level1Div;
//משתנה לזמן ענית התשובה
let _timeOfExe = 10000;


//יצירת תצוגה
let _flagChechRedOrBlack = false;
/*let flagOfChange = 0;*/
function createDives() {
    //עיצוב
    document.body.setAttribute("class", "bodyGame");
    let _nameGame = document.createElement("h2");
    document.body.appendChild(_nameGame);
    _nameGame.innerHTML = "MATCHES";
    let _whichImg = 0;
    _img = document.createElement("img");
    document.body.appendChild(_img);
    //תפריט צף
    let _aside = document.createElement("aside");
    document.body.appendChild(_aside);
    let _btn;
    for (var b = 0; b < 6; b++) {
        _btn = document.createElement("button");
        _aside.appendChild(_btn);
        _btn.onmousemove = function () {
            //עיצוב להובר לבטנים
        };
    }
    fillBtnMenu();
    _img.setAttribute("src", "menu.png");
    _img.onclick = function () {
        if (_whichImg == 0) {
            _img.setAttribute("src", "x.png");
            _whichImg = 1;
            document.querySelector("aside").style.animationName = 'open_option';
            document.querySelector("aside").style.visibility = "visible";
        }
        else {
            _img.setAttribute("src", "menu.png");
            _whichImg = 0;
            document.querySelector("aside").style.animationName = 'close_option';
            document.querySelector("aside").style.visibility = "hidden";
        }
    }
    //
    let _mainDiv = document.createElement("div");
    _mainDiv.setAttribute("id", "_mainDiv");
    _mainDiv.setAttribute("class", "_mainDiv");
    for (var i = 1; i < 7; i++) {
        let _divNumber = document.createElement("div");
        _divNumber.setAttribute("id", "_divNumber" + i);
        _divNumber.setAttribute("class", "_divNumber");
        for (var k = 1; k < 8; k++) {
            let _inDiv = document.createElement("div");
            _inDiv.setAttribute("class", "_inDiv" + k);
            _inDiv.setAttribute("id", "_inDiv" + i + "" + k);
            _divNumber.appendChild(_inDiv);

            /*   בדיקה האם הגפרור צבוע*/
            _inDiv.onclick = function () {
                if (!_flagChechRedOrBlack) {
                    if (_inDiv.style.backgroundColor == "black") {
                        _inDiv.style.backgroundColor = "#d3bccc";
                        _flagChechRedOrBlack = true;
                    }
                }
                else {
                    if (_inDiv.style.backgroundColor != "black") {
                        _inDiv.style.backgroundColor = "black";
                        _flagChechRedOrBlack = false;
                    }
                }
            }

        }
        _mainDiv.appendChild(_divNumber);
    }
    document.body.appendChild(_mainDiv);
    // _p.innerHTML = "THIS MATCHES GAME BY AVIGAIL VAKNIN, MICHAL MAZUZ AND RUTI BEN DAVID ";
    p();
    start();
    //קריאה לפונקצית ההתחלה
}
//הגרלת תרגילים
let arrayRaffleEx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], _posArrayRaffleEx = 0;
function raffleArray() {
    _posArrayRaffleEx = 0;
    arrayRaffleEx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let place, len = 10, temp;
    for (var i = 0; i < arrayRaffleEx.length; i++) {
        place = Math.round(Math.random() * (--len));
        temp = arrayRaffleEx[place];
        arrayRaffleEx[place] = arrayRaffleEx[len];
        arrayRaffleEx[len] = temp;
    }
}

let j;
//כתיבת תרגיל
function start() {
    //בדיקה האם קיימים אחרים קודמים
    if (localStorage.getItem("posArrayRaffleEx") != null) {
        _posArrayRaffleEx = localStorage.getItem("posArrayRaffleEx");
        arrayRaffleEx = JSON.parse(localStorage.getItem("arrayRaffleEx"));
        //שליפת שם המערך הקשים או הקלים
        if (localStorage.getItem("arrayAexercise") == "_level1Div") {
            arrayAexercise = _level1Div;
        }
        else {
            arrayAexercise = _level2Div;
        }

    }
    if (_posArrayRaffleEx == 0) {
        raffleArray();

    }

    //איפוס תרגיל
    if (_posArrayRaffleEx < 10) {
        for (k = 1; k < 7; k++) {
            if (k != 2 && k != 4) {
                let _divToPaint = document.getElementById("_divNumber" + k);
                let c;
                for (var i = 0; i < 7; i++) {
                    c = _divToPaint.children[i];
                    c.style.backgroundColor = "#d3bccc";
                }
            }

        }
        //שליחת כל ספרה לפעולת הצביעה
        //כתיבת תרגיל חדש
        for (j = 0, i = 0; j < 6; j++, i++) {
            // _divNumber אינדקס על=j
            //אינדקס על מספרי התרגיל במערך התרגילים המוגרל=i
            //

            if (j == 1) {
                if (arrayAexercise[arrayRaffleEx[_posArrayRaffleEx]][i] == '+')
                    document.getElementById("_divNumber2").innerHTML = '+';
                else
                    document.getElementById("_divNumber2").innerHTML = '-';

                //פה נתקדם בשני האינדקסים מאחר והסימן כלול באברי התרגיל
                j++;
                i++;
            }
            if (j == 3)
                j++;
            paint("_divNumber" + (j + 1), arrayAexercise[arrayRaffleEx[_posArrayRaffleEx]][i]);

        }
        ////בניית וזימון פעולת הטיימר שיתעדכן כל שניה
        //document.body.innerHTML += "<div id='_clockDiv'>טיימר</div>";
        //document.getElementById("_clockDiv").innerHTML = _minutes + ":" + _second1;
        //setInterval(second, 1000);

        window.setTimeout("time()", _timeOfExe);
    }
    else {
        jumping();
        _divjump.innerHTML = "<br/>You did it, you won!!!<br/>";
        _divjump.style.fontSize = "3vw";
        _divjump.appendChild(document.createElement("label"));
        _divjump.children[2].innerHTML = "You have " + (10 - _countErrors) + " successes out of 10, keep moving forward and succeeding...";
        _divjump.appendChild(document.createElement("button"));
        _divjump.children[3].innerHTML = "HOME";
        _divjump.children[3].setAttribute("class", "btnJump");
        _divjump.children[3].onclick = function () {
            location.replace("MainHtmlPage.html");
        }
    }
}

//לבדוק מה זה.....
function menuLevels() {
    let _menuDiv = document.createElement("div");
    let _level1Div = document.createElement("div");
    //מאזין ארוע לדף תרגילים של רמה קלה
    _level1Div.addEventListener();
    let _level2Div = document.createElement("div");
    //מאזין ארוע לדף תרגילים של רמה קשה
    _level2Div.addEventListener();

}

let _countErrors = 0;
function time() {
    let _isCorrect = checkAexercise();
    if (!_isCorrect) {
        _countErrors++;
    }
    _posArrayRaffleEx++;
    if (_countErrors < 4) {
        start();
    }
    else {
        _divjump = document.createElement("div");
        document.body.appendChild(_divjump);
        _divjump.setAttribute("class", "divjump");

        _divjump.innerHTML = "<br/>--GAME OVER-- <br/>";
        _divjump.style.fontSize = "4.2vw";
        _divjump.appendChild(document.createElement("button"));
        _divjump.appendChild(document.createElement("button"));
        _divjump.children[2].innerHTML = "NEW GAME";
        _divjump.children[2].setAttribute("class", "btnJump");
        _divjump.children[3].innerHTML = "EXIT";
        _divjump.children[3].setAttribute("class", "btnJump");
        _divjump.innerHTML += "<br/>_____________<br/>";

        _divjump.style.animationName = 'open_divjump';
        _divjump.children[2].onclick = function () {
            _divjump.style.animationName = 'close_divjump';
            _divjump.style.transform = "scale(0)";
            _divjump.remove();
            _posArrayRaffleEx = 0;
            _countErrors = 0;
            start();
            
        }
        _divjump.children[3].onclick = function () {
            _divjump.style.animationName = 'close_divjump';
            //claerAndSave();
            _divjump.remove();
            location.replace("MainHtmlPage.html");

            //הפעלת פונקצית יציאה
        }
        //איפוס מונה שגיאות
        _countErrors = 0;
        //if (res) { 
        //    //menuLevels();
        //}

        //else {

        //}
        ///*start();*/
    }



}


//צביעת ספרה
function paint(_divNum, _numForPaint) {

    let _divToPaint = document.getElementById(_divNum);
    let c;
    for (var i = 0; i < arrayNumbers[_numForPaint].length; i++) {
        c = _divToPaint.children[arrayNumbers[_numForPaint][i][arrayNumbers[_numForPaint][i].length - 1] - 1];
        c.style.backgroundColor = "black";
    }
}
//בדיקת נכונות תרגיל
function checkAexercise() {
    let x, y, operator, ans1, ans2;
    operator = document.getElementById("_divNumber2").innerHTML;
    x = checkNumber(1);
    if (x != -1) {
        y = checkNumber(3);
        if (y != -1) {
            ans1 = checkNumber(5);
            if (ans1 != -1) {
                ans2 = checkNumber(6);
                if (ans2 != -1) {
                    if (operator == '+') {
                        if (x + y == ans1 * 10 + ans2)
                            return true;
                    }
                    else
                        if (x - y == ans1 * 10 + ans2)
                            return true;

                }
            }
        }
    }
    return false;
}

//בדיקת מס' אחד מתוך תרגיל שלם
function checkNumber(x) {
    let _divNumber;
    _divNumber = document.getElementById("_divNumber" + x);
    _arry = [];
    //יצירת מערך שמכיל את כל הדיבים הצבועים במספר הנוכחי
    let l = 0;
    for (var i = 0; i < 7; i++) {
        if (_divNumber.children[i].style.backgroundColor == "black")
            _arry[l++] = "_inDiv" + (i + 1);
    }
    //בדיקת המערך שנוצר מול מערכי המספרים שבאותו אורך עד שמוצא את הספרה שהוקשה ע"י המשתמש
    let _isSame;
    for (var i = 0; i < 10; i++) {
        _isSame = true;
        if (arrayNumbers[i].length == _arry.length) {
            for (var j = 0; j < _arry.length; j++) {
                if (!(_arry[j] == arrayNumbers[i][j]))
                    _isSame = false;
            }
        }
        else {
            continue;
        }
        if (_isSame) {
            return i;

        }

    }

    return -1;
}


//משתנים של טיימר

let _minutes = 01;
let _second1 = 00;

//פונקצית הטיימר
function second() {
    _second1--;
    if (_second1 == 0 && _minutes == 0) {
        //נעבור לבדיקת תרגיל
    }
    if (_second1 == 0) {
        _second1 = 60;
        _minutes--;

    }
    document.getElementById("_clockDiv").innerHTML = _minutes + ":" + _second1;


}

//disabledלהפוך את הדיב של הפלוס ומינוס ל
function p() {
    let _divTochange2 = document.getElementById("_divNumber2");
    let _divTochange4 = document.getElementById("_divNumber4");
    for (var i = 0; i < _divTochange2.children.length; i++) {
        _divTochange2.children[i].style.backgroundColor = "white";
        _divTochange4.children[i].style.backgroundColor = "white";

    }
    _divTochange4.innerHTML = "=";
    _divTochange4.style.fontSize = "11vw";
    _divTochange4.style.marginLeft = "2vw";
    _divTochange4.style.lineHeight = "120%";
}

function createlogIn() {
    let _fDiv = document.createElement("div");
    let _p1 = document.createElement("p");
    let _p2 = document.createElement("p");
    let _label1 = document.createElement("label");
    let _input1 = document.createElement("input");
    _input1.type = "text";
    _label1.innerHTML = "name";
    _p1.appendChild(_label1);
    _p1.appendChild(_input1);
    let _label2 = document.createElement("label");
    _label2.innerHTML = "password";
    let _input2 = document.createElement("input");
    _input2.type = "password";
    _p2.appendChild(_label2);
    _p2.appendChild(_input2);
    let _button = document.createElement("button");
    _button.innerHTML = "log In";
    _fDiv.appendChild(_p1);
    _fDiv.appendChild(_p2);
    _fDiv.appendChild(_button);
    document.body.lastChild.appendChild(_fDiv);
    _button.addEventListener("click", logIn);
}
function Person(name, code) {
    this.name = name;
    this.code = code;
    this.getName = function () {
        return this.name;
    };
    this.getCode = function () {
        return this.code;
    };
}
var _arrP = new Array();
let _pflag = false;
let name, password;
function logIn() {
    if (!(localStorage.getItem("name") == document.getElementsByTagName("input")[0].value && localStorage.getItem("password") == document.getElementsByTagName("input")[1].value)) {
        for (var i = 0; i < _arrP.length; i++) {
            _arrP[i] = new Person(JSON.parse(_arrP)[i].name, JSON.parse(_arrP)[i].code);
        }

        localStorage.clear();
        localStorage.setItem("arrP", JSON.stringify(_arrP));
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);

    }
    name = document.getElementsByTagName("input")[0].value;
    password = document.getElementsByTagName("input")[1].value;
    _arrP[_arrP.length] = new Person(name, password);
    _arrP = localStorage.setItem("arrP", JSON.stringify(_arrP));
    name = document.getElementsByTagName("input")[0].value;
    password = document.getElementsByTagName("input")[1].value;
    if (localStorage.getItem("name") == name && localStorage.getItem("password") == password) {
        jumping();
        _jumpDiv = document.body.lastChild;
        _jumpDiv.appendChild(document.createElement("label"));
        _jumpDiv.children[1].innerHTML = "nice to meet you again, Would you like to resume the game at the point where you stopped earlier? ";
        _jumpDiv.appendChild(document.createElement("button"));
        _btn1 = _jumpDiv.lastChild;
        _btn1.innerHTML = 'yes';
        _btn1.onclick = function () {
            localStorage.setItem("name", name);
            localStorage.setItem("password", password);
            location.replace("page1.html");
        }
        _btn1.setAttribute("class", "btnJump");
        _jumpDiv.appendChild(document.createElement("button"));
        _btn2 = _jumpDiv.lastChild;
        _btn2.innerHTML = 'no';
        _btn2.onclick = function () {
            for (var i = 0; i < _arrP.length; i++) {
                _arrP[i] = new Person(JSON.parse(_arrP)[i].getName(), JSON.parse(_arrP)[i].getCode());
            }

            localStorage.clear();
            localStorage.setItem("arrP", JSON.stringify(_arrP));
            localStorage.setItem("name", name);
            localStorage.setItem("password", password);

        }
        _btn2.setAttribute("class", "btnJump");
    }
    else {
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
        whatYouWant();
    }

    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
}
function whatYouWant() {
    jumping();
    _jumpDiv = document.body.lastChild;
    _jumpDiv.appendChild(document.createElement("label"));
    _jumpDiv.children[1].innerHTML = "HELLO!!! <br/> choose your level you want to play <br/> ";
    _jumpDiv.appendChild(document.createElement("button"));
    _btn1 = _jumpDiv.lastChild;
    _btn1.innerHTML = 'low';
    _btn1.onclick = function () {
        arrayAexercise = _level1Div;
        localStorage.setItem("arrayAexercise", "_level1Div")
        location.replace("page1.html");
    }
    _btn1.setAttribute("class", "btnJump");
    _jumpDiv.appendChild(document.createElement("button"));
    _btn2 = _jumpDiv.lastChild;
    _btn2.innerHTML = 'high';
    _btn2.onclick = function () {
        arrayAexercise = _level2Div;
        localStorage.setItem("arrayAexercise", "_level2Div")
        location.replace("page1.html");
    }
    _btn2.setAttribute("class", "btnJump");

}

//פעולת מילוי התפריט צף בלחצנים עם קישורים
function fillBtnMenu() {
    //דף הבית
    document.querySelector("aside").children[0].innerHTML = "HOME";
    document.querySelector("aside").children[0].onclick = function () {
        claerAndSave();
        location.replace("MainHtmlPage.html");
        //יש לשמור כאן לוקל סטורייג'
        
    }
    //הוראות
    document.querySelector("aside").children[1].innerHTML = "INSTRUCTION";
    document.querySelector("aside").children[1].onclick = function () {
        jumping();
        _inst = document.body.lastChild;
        _inst.appendChild(document.createElement("label"));
        _inst.children[1].innerHTML = "There is an arithmetic exercise you need to change the location of  one of the matches (lines) in order the exercise will be  correct be carefull do it fast the timer move";
        _inst.appendChild(document.createElement("span"));
        _inst.lastChild.setAttribute("class", "ret");
        _inst.lastChild.innerHTML = "return...";
        document.getElementsByClassName("ret")[0].onclick = function () {
            document.body.lastChild.remove();
        }
    }
    //רמת המשחק
    document.querySelector("aside").children[2].onclick = function () {
        if (arrayAexercise == _level1Div) {
            document.querySelector("aside").children[2].innerHTML = "HARD LEVEL";
            arrayAexercise = _level2Div;
            localStorage.setItem("arrayAexercise", "_level2Div");
            //אם משנים את הרמה יש להחליף את המערך הנוכחי
            start();
            _posArrayRaffleEx = 0;
            _countErrors = 0;
        }
        else {
            document.querySelector("aside").children[2].innerHTML = "EASY LEVEL";
            arrayAexercise = _level1Div;
            localStorage.setItem("arrayAexercise", "_level1Div");
            //אם משנים את הרמה יש להחליף את המערך הנוכחי
            start();
            _posArrayRaffleEx = 0;
            _countErrors = 0;
        }
    }
    if (localStorage.getItem("arrayAexercise") == '_level1Div') {
        document.querySelector("aside").children[2].innerHTML = "EASY LEVEL";
    }
    else {
        document.querySelector("aside").children[2].innerHTML = "HARD LEVEL";
    }
    ////מהירות המשחק
    document.querySelector("aside").children[3].onclick = function () {
        if (localStorage.getItem("timeOfExe") == 30000) {     
            document.querySelector("aside").children[3].innerHTML = "HIGH SPEED";
            _timeOfExe = 10000;
            localStorage.setItem("timeOfExe", _timeOfExe);
        }
        else {
            document.querySelector("aside").children[3].innerHTML = "LOW SPEED";
            _timeOfExe = 30000;
            localStorage.setItem("timeOfExe", _timeOfExe);
        }
    }
    if (localStorage.getItem("timeOfExe") == 30000 || _timeOfExe==30000) {
        document.querySelector("aside").children[3].innerHTML = "LOW SPEED";
    }
    else {
        document.querySelector("aside").children[3].innerHTML = "HIGH SPEED";
    }
    //הדפסת משחק
    document.querySelector("aside").children[4].innerHTML = "PRINT";
    document.querySelector("aside").children[4].onclick = function () {
        //יש לשמור כאן לוקל סטורייג
        window.print();

    }
    //יציאה
    document.querySelector("aside").children[5].innerHTML = "EXIT";
    document.querySelector("aside").children[5].onclick = function () {
        //יש לשמור כאן לוקל סטורייג
        claerAndSave();
        window.close();

    }


}
function claerAndSave() {
    name = localStorage.getItem("name");
    password = localStorage.getItem("password");
    _arrP = localStorage.getItem("arrP")

    localStorage.clear();
    localStorage.setItem("arrP", JSON.stringify(_arrP));
    localStorage.setItem("timeOfExe", _timeOfExe);
    localStorage.setItem("countErrors", _countErrors);
    localStorage.setItem("arrP", JSON.stringify(_arrP));
    localStorage.setItem("name",name);
    localStorage.setItem("password",password);
    localStorage.setItem("posArrayRaffleEx",_posArrayRaffleEx);
    localStorage.setItem("arrayRaffleEx",JSON.stringify(arrayRaffleEx));
    //שליחת שם המערך של תרגילים קשים או קלים
    if (arrayAexercise == _level1Div) {
        localStorage.setItem("arrayAexercise", "_level1Div");
    }
    else {
        localStorage.setItem("arrayAexercise", "_level2Div");
    }

}
