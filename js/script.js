const now = new Date(); 
const hn = now.getHours();
const mn = now.getMinutes();
const weekDay = now.getDay();
const month = now.getMonth();
const monthDay = now.getDate();
var holiday = monthDay.toString() + month.toString();

var selection = document.getElementById('selection');
var line = document.getElementById('line');
var direction = document.getElementById('direction');
var checkBus = document.getElementById('check_bus');
var period = document.getElementById('period');


if (weekDay > 0 && weekDay < 6) {
  var szpital1pkp = ['6:10', '7:15', '7:35', '7:55', '8:45', '11:30', '14:10', '15:10', '15:55', '16:50', '19:10'];
  var rogali1szpital = ['5:41', '6:32', '7:52', '8:32', '10:47', '13:07', '13:35', '14:27', '14:37', '16:27', '20:12'];
  var rogali2szpital = ['9:44', '15:29'];
  var dayType = "dni robocze";

  var szpital1pkpDif = ['7:55', '13:15', '16:55', '19:10'];
  var rogali1szpitalDif = ['6:30', '13:06', '16:25'];
  var rogali2szpitalDif = ['9:42'];
  var dayTypeDif = "soboty, niedziele i święta";
};

if (weekDay === 0 || weekDay === 6 || holiday === "10" || holiday === "60" || holiday === "13" || holiday === "23" || holiday === "14"
    || holiday === "34" || holiday === "204" || holiday === "314" || holiday === "157" || holiday === "110" || holiday === "1110"
    || holiday === "2511" || holiday === "2611") {

  var szpital1pkp = ['7:55', '13:15', '16:55', '19:10'];
  var rogali1szpital = ['6:30', '13:06', '16:25'];
  var rogali2szpital = ['9:42'];
  var dayType = "soboty, niedziele i święta";

  var szpital1pkpDif = ['6:10', '7:15', '7:35', '7:55', '8:45', '11:30', '14:10', '15:10', '15:55', '16:50', '19:10'];
  var rogali1szpitalDif = ['5:41', '6:32', '7:52', '8:32', '10:47', '13:07', '13:35', '14:27', '14:37', '16:27', '20:12'];
  var rogali2szpitalDif = ['9:44', '15:29'];
  var dayTypeDif = "dni robocze";
};

function timetable() { 
  var busStop = window[selection.value + line.value + direction.value];
  var stop = selection.options[selection.selectedIndex].value;
  var yourBus = document.getElementById('your_bus');
  var wholeTimetable = document.getElementById('whole_timetable');
  var button = document.createElement("button");
  var buttonText = document.createTextNode("Sprawdź cały rozkład z tego przystanku");

  var i;

  for (i = 0; i < busStop.length; i++) { 
    
    var date = new Date("February 23 2018 " + busStop[i]);
    var ht = date.getHours();
    var mt = date.getMinutes(); 
    if (ht > hn || (ht === hn && mn < mt)) {break;}
  }
  
  yourBus.innerHTML = ht + ':' + mt;
  button.appendChild(buttonText);
  wholeTimetable.appendChild(button);

  button.addEventListener('click', checkWhole);
}

function allBusses() {
  var busses = document.getElementById('busses');
  var bussesHeader = document.getElementById('busses_header');
  var bussesTimetable = document.getElementById('busses_timetable');
  var bussesList = document.getElementById('busses_list');
  var i;
  for (i = 1; i < 7; i++) { 
    var allLines = window[selection.value + [i] + direction.value];
    if (allLines == undefined) {break;}
    bussesHeader.innerHTML = "Wszystkie autobusy odjeżdżające w " + dayType + " z tego przystanku";
    var header = document.createElement("h4");
    var newParagraph = document.createElement("p")
    var textHeader = document.createTextNode("linia nr " + [i]);
    
    header.appendChild(textHeader);
    bussesList.appendChild(header);
    newParagraph.innerHTML = allLines;
    bussesList.appendChild(newParagraph); 
  }
};

function difPeriod() {
  var busses = document.getElementById('busses');
  var bussesTimetable = document.getElementById('busses_timetable');
  var bussesList = document.getElementById('busses_list');
  var bussesHeaderDif = document.createElement("h3");
  var textAllBussesDif = document.createTextNode("Wszystkie autobusy odjeżdżające w " + dayTypeDif + " z tego przystanku");
  var i;

  bussesHeaderDif.appendChild(textAllBussesDif);
  bussesList.appendChild(bussesHeaderDif);

  for (i = 1; i < 7; i++) { 
    var allLines = window[selection.value + [i] + direction.value + "Dif"];
    if (allLines == undefined) {break;}
    var header = document.createElement("h4");
    var newParagraph = document.createElement("p")
    var textHeader = document.createTextNode("linia nr " + [i]);
    
    header.appendChild(textHeader);
    bussesList.appendChild(header);
    newParagraph.innerHTML = allLines;
    bussesList.appendChild(newParagraph); 
  }
}

function checkWhole() {
  allBusses();
  difPeriod();
}

checkBus.addEventListener('click', timetable);