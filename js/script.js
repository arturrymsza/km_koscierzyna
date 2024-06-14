var selection = document.getElementById('selection');
var line = document.getElementById('line');
var direction = document.getElementById('direction');
var checkBus = document.getElementById('check_bus');
var period = document.getElementById('period');
var checkWholeButton = document.getElementById('check_whole');
var checkLineButton = document.getElementById('check_line');
var timetableModal = document.getElementById('timetable_modal');
var timetableContent = document.getElementById('timetable_content');
var lineModal = document.getElementById('line_modal');
var closeLineBtn = document.getElementById('close_line')
var lineImg = document.getElementById('line_img');
var resultDiv = document.getElementById('result');
var wholeTimetable = document.getElementById('whole_timetable')
var stopsWithoutLine1 = ["maja","dworcowa","staszica","marca","kossaka","tatarkiewicza",
    "michalowicza","stwoszatowarowa","przemyslowa","towarowa","rolnicza"];
var stopsWithoutLine2 = ["maja","dworcowa","staszica","marca","szpital","malcuzynskiego",
    "szydlice","konopnickiej","rozana","sikorskiego","strzelecka","rogali","marchewicza","bolewskiej",
    "szkolna","heykego","kartuska","szopinskiego","galeria","mlynska","kapliczna","skarszewska",
    "matejki"];
var stopsWithoutLine3 = ["rozana","sikorskiego","strzelecka","rogali","marchewicza","bolewskiej",
    "szkolna","heykego","kartuska","szopinskiego","kapliczna","skarszewska",
    "matejki","kossaka","tatarkiewicza","michalowicza","stwoszatowarowa",
    "przemyslowa","towarowa","rolnicza","michalowskiego"];
var stopsWithoutSzpital = ["szpital", "przemyslowa"];
var stopsWithoutPkp = ["pkp", "rolnicza", "towarowa"];
var listOfStopsWithoutBus = [stopsWithoutLine1,stopsWithoutLine2,stopsWithoutLine3];
line.style.visibility = "hidden";
direction.style.visibility = "hidden";
resultDiv.style.visibility = "hidden";
wholeTimetable.style.visibility = "hidden";


function disableSelection() {
  for(var i=0; i<selection.length; i++){
    if(selection.options[i].value == "null"){
      selection.remove(selection.i);
    }
  }
  for(i = line.length - 1; i>=0;i--){
    line.remove(i);
  }
  if(!(stopsWithoutLine1.includes(selection.value))){
    var line1 = document.createElement('option');
    line1.value = 1;
    line1.innerHTML = "Linia 1";
    line.appendChild(line1);
  }
  if(!(stopsWithoutLine2.includes(selection.value))){
    var line2 = document.createElement('option');
    line2.value = 2;
    line2.innerHTML = "Linia 2";
    line.appendChild(line2);
  }
  if(!(stopsWithoutLine3.includes(selection.value))){
    var line3 = document.createElement('option');
    line3.value = 3;
    line3.innerHTML = "Linia 3";
    line.appendChild(line3);
  }
  line.style.visibility = "visible";


  for(i = direction.length - 1; i>=0;i--){
    direction.remove(i);
  }
  if(!(stopsWithoutSzpital.includes(selection.value))){
    var dirSzpital = document.createElement('option');
    dirSzpital.value = "szpital";
    dirSzpital.innerHTML = "Szpital";
    direction.appendChild(dirSzpital);
  }
  if(!(stopsWithoutPkp.includes(selection.value))){
    var dirPkp = document.createElement('option');
    dirPkp.value = "pkp";
    dirPkp.innerHTML = "Dworzec";
    direction.appendChild(dirPkp);
  }
  direction.style.visibility = "visible";
}



function getClosestBus() { 
  
  var busStop = window[selection.value + line.value + direction.value];
  var stop = selection.options[selection.selectedIndex].value;
  var yourBus = document.getElementById('your_bus');
  var wholeTimetable = document.getElementById('whole_timetable');

  var i;

  var wholeTimetable = document.getElementById('whole_timetable');
  var checkAllButton = wholeTimetable.getElementsByClassName('check_all_button');
  for (var i = checkAllButton.length; i--; ) {
    checkAllButton[i].remove();
  }
  if(busStop == undefined){
  } else {

    //dodac pokazywanie headeroiw

    for (i = 0; i < busStop.length; i++) { 
      
      var date = new Date("February 23 2018 " + busStop[i]);
      var ht = date.getHours();
      var mt = date.getMinutes(); 
      if (ht > hn || (ht === hn && mn < mt)) 
      {
      break;   
      }
      if(i === (busStop.length - 1) && ( ht<hn || (ht===hn && mn > mt) )) 
      {
          if(day == 6 || day == 7) {
            busStop = window[selection.value + line.value + direction.value + "Dif"];
          }
      } 
    }
    return i;
  }
}

function allBusses() {
  var busses = document.getElementById('busses');
  var bussesHeader = document.getElementById('busses_header');
  var bussesTimetable = document.getElementById('busses_timetable');
  var bussesList = document.getElementById('busses_list');
  var i;

  for (i = 1; i < 9; i++) { 
    var allLines = window[selection.value + [i] + direction.value];
    if (allLines == undefined) {continue;}
    bussesHeader.innerHTML = "Wszystkie autobusy odjeżdżające w " + dayType + " z tego przystanku";
    var header = document.createElement("h4");
    var newParagraph = document.createElement("p");

    if (i < 6) {
      var textHeader = document.createTextNode("linia nr " + [i]);
    } if (i == 6) {
        var textHeader = document.createTextNode("linia nr 3/2");
    } if (i == 7) {
        var textHeader = document.createTextNode("linia nr 1/3");
    } if (i == 8) {
        var textHeader = document.createTextNode("linia nr 2/3");
    };
    
    header.className = 'lines';
    newParagraph.className = 'hours';

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

  bussesHeaderDif.className = 'description';

  bussesHeaderDif.appendChild(textAllBussesDif);
  bussesList.appendChild(bussesHeaderDif);

  for (i = 1; i < 9; i++) { 
    var allLines = window[selection.value + [i] + direction.value + "Dif"];
    if (allLines == undefined) {continue;}
    var header = document.createElement("h4");
    var newParagraph = document.createElement("p");

    if (i < 6) {
      var textHeader = document.createTextNode("linia nr " + [i]);
    } if (i == 6) {
        var textHeader = document.createTextNode("linia nr 3/2");
    } if (i == 7) {
        var textHeader = document.createTextNode("linia nr 1/3");
    } if (i == 8) {
        var textHeader = document.createTextNode("linia nr 2/3");
    };

    header.className = 'lines';
    newParagraph.className = 'hours';

    header.appendChild(textHeader);
    bussesList.appendChild(header);
    newParagraph.innerHTML = allLines;
    bussesList.appendChild(newParagraph); 
  }
}

function checkWhole() {
  var closeModal = document.getElementById('close_modal');
  timetableModal.style.display = "block";
  allBusses();
  difPeriod();
  closeModal.addEventListener('click', closeWindow);
}

function closeWindow() {
  var bussesList = document.getElementById('busses_list');
  var hours = bussesList.getElementsByClassName('hours');
  var lines = bussesList.getElementsByClassName('lines');
  var description = bussesList.getElementsByClassName('description');
  timetableModal.style.display = "none";
  
  console.log(hours);
  for (var i = hours.length; i--; ) {
    hours[i].remove();
  }
  for (var i = lines.length; i--; ) {
    lines[i].remove();
  }
  for (var i = description.length; i--; ) {
    description[i].remove();
  }
}
function showLineImg(){
  if(line.value == "1"){
    lineImg.src = "img/linia1a.png";
  }
  else if(line.value == "2"){
    lineImg.src = "img/linia2a.png";
  }
  else if(line.value == "3"){
    lineImg.src = "img/linia3a.png";
  }
  lineModal.style.display = "block";
  closeLineBtn.addEventListener('click', closeLine);
}
function closeLine(){
  lineModal.style.display = "none";
}

function bus() {
  
}

function busStopChanged() {
  hn = now.getHours();
  mn = now.getMinutes();
  day = now.getDay();

  if(selection.value != "null" && direction.value != "null"){
    var busStop = window[selection.value + line.value + direction.value];
    var stop = selection.options[selection.selectedIndex].value;
    var previousBus = document.getElementById('previous_bus');
    var yourBus = document.getElementById('your_bus');
    var nextBus = document.getElementById('next_bus');
    var wholeTimetable = document.getElementById('whole_timetable');
    resultDiv.style.visibility = "hidden"
    i = getClosestBus();
    //najblizszy autobus
    console.log(i);
    var date = new Date("February 23 2018 " + busStop[i]);
    var ht = date.getHours();
    var mt = date.getMinutes(); 
    
    if(date == "Invalid Date"){
      yourBus.innerHTML = "Jutro";
    }
    else{
      var ht = date.getHours();
      var mt = date.getMinutes(); 
    
      if (mt < 10) {
        yourBus.innerHTML = ht + ':' + '0' + mt;
      }  
      else {
        yourBus.innerHTML = ht + ':' + mt;
      }
    }
    }
    //poprzedni
    var date = new Date("February 23 2018 " + busStop[i-1]);
    if(date == "Invalid Date"){
      previousBus.innerHTML = "Wczoraj";
    }
    else{
      var ht = date.getHours();
      var mt = date.getMinutes(); 
    
      if (mt < 10) {
        previousBus.innerHTML = ht + ':' + '0' + mt;
      }  
      else {
        previousBus.innerHTML = ht + ':' + mt;
      }
    }
    //nastepny
    var date = new Date("February 23 2018 " + busStop[i+1]);
    if(date == "Invalid Date"){
      nextBus.innerHTML = "Jutro";
    }
    else{
      var ht = date.getHours();
      var mt = date.getMinutes(); 
    
      if (mt < 10) {
        nextBus.innerHTML = ht + ':' + '0' + mt;
      }  
      else {
        nextBus.innerHTML = ht + ':' + mt;
      }
    }
    resultDiv.style.visibility = "visible";
    wholeTimetable.style.visibility = "visible";
}
selection.addEventListener('change', disableSelection);
selection.addEventListener('change', busStopChanged);
line.addEventListener('change', busStopChanged);
direction.addEventListener('change', busStopChanged);
checkWholeButton.addEventListener('click', checkWhole);
checkLineButton.addEventListener('click', showLineImg);

function openNav() {
  document.getElementById("menusidenav").style.width = "100%";
}

function openNavTrasy() {
  document.getElementById("linessidenav").style.width = "100%";
  closeNav();
}

function closeNav() {
  document.getElementById("menusidenav").style.width = "0";
}

function closeNavTrasy() {
  document.getElementById("linessidenav").style.width = "0";
}

function openNav1() {
  document.getElementById("line1sidenav").style.width = "100%";
  closeNavTrasy();
}

function closeNav1() {
  document.getElementById("line1sidenav").style.width = "0";
}

function openNav2() {
  document.getElementById("line2sidenav").style.width = "100%";
  closeNavTrasy();
}

function closeNav2() {
  document.getElementById("line2sidenav").style.width = "0";
}

function openNav3() {
  document.getElementById("line3sidenav").style.width = "100%";
  closeNavTrasy();
}

function closeNav3() {
  document.getElementById("line3sidenav").style.width = "0";
}

function openNavPdf() {
  document.getElementById("pdfsidenav").style.width = "100%";
  closeNav();
}

function closeNavPdf() {
  document.getElementById("pdfsidenav").style.width = "0";
}

function openNavAbout() {
  document.getElementById("aboutsidenav").style.width = "100%";
  closeNav();
}

function closeNavAbout() {
  document.getElementById("aboutsidenav").style.width = "0";
}