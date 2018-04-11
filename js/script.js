const hn = now.getHours();
const mn = now.getMinutes();
var selection = document.getElementById('selection');
var line = document.getElementById('line');
var direction = document.getElementById('direction');
var checkBus = document.getElementById('check_bus');
var period = document.getElementById('period');
var timetableModal = document.getElementById('timetable_modal');
var timetableContent = document.getElementById('timetable_content');

function timetable() { 
  var busStop = window[selection.value + line.value + direction.value];
  var stop = selection.options[selection.selectedIndex].value;
  var yourBus = document.getElementById('your_bus');
  var wholeTimetable = document.getElementById('whole_timetable');
  var button = document.createElement("button");
  var buttonText = document.createTextNode("Sprawdź cały rozkład z tego przystanku");

  var i;

  button.className = 'check_all_button';

  for (i = 0; i < busStop.length; i++) { 
    
    var date = new Date("February 23 2018 " + busStop[i]);
    var ht = date.getHours();
    var mt = date.getMinutes(); 
    if (ht > hn || (ht === hn && mn < mt)) {break;}
  }
  
  if (mt < 10) {
    yourBus.innerHTML = ht + ':' + '0' + mt;
  } else {
    yourBus.innerHTML = ht + ':' + mt;
  };
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
    if (allLines == undefined) {continue;}
    bussesHeader.innerHTML = "Wszystkie autobusy odjeżdżające w " + dayType + " z tego przystanku";
    var header = document.createElement("h4");
    var newParagraph = document.createElement("p")
    var textHeader = document.createTextNode("linia nr " + [i]);
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

  for (i = 1; i < 7; i++) { 
    var allLines = window[selection.value + [i] + direction.value + "Dif"];
    if (allLines == undefined) {continue;}
    var header = document.createElement("h4");
    var newParagraph = document.createElement("p")
    var textHeader = document.createTextNode("linia nr " + [i]);
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

function bus() {
  var wholeTimetable = document.getElementById('whole_timetable');
  var checkAllButton = wholeTimetable.getElementsByClassName('check_all_button');

  for (var i = checkAllButton.length; i--; ) {
    checkAllButton[i].remove();
  }
  
  timetable();
}

checkBus.addEventListener('click', bus);
