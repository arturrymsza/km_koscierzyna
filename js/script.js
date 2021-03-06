const hn = now.getHours();
const mn = now.getMinutes();
const day = now.getDay();
var selection = document.getElementById('selection');
var line = document.getElementById('line');
var direction = document.getElementById('direction');
var checkBus = document.getElementById('check_bus');
var period = document.getElementById('period');
var timetableModal = document.getElementById('timetable_modal');
var timetableContent = document.getElementById('timetable_content');
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
var listOfStopsWithoutBus = [stopsWithoutLine1,stopsWithoutLine2,stopsWithoutLine3];

function disableLines() {
  document.getElementById("wyborLinia1").disabled=false;
  document.getElementById("wyborLinia2").disabled=false;
  document.getElementById("wyborLinia3").disabled=false;

  for(var i = 0; i<listOfStopsWithoutBus.length; i++) {
    for(var j = 0; j<listOfStopsWithoutBus[i].length; j++) {
      if(selection.value == listOfStopsWithoutBus[i][j]) {
        if(i==0) {
          document.getElementById("wyborLinia1").disabled=true;
        }
        if(i==1) {
          document.getElementById("wyborLinia2").disabled=true;
        }
        if(i==2) {
          document.getElementById("wyborLinia3").disabled=true;
        }
      }
    }
  }
  if(document.getElementById("wyborLinia2").disabled==true && document.getElementById("wyborLinia3").disabled==true) {
    line.selectedIndex = "1";
  } else if (document.getElementById("wyborLinia1").disabled==true && document.getElementById("wyborLinia3").disabled==true) {
    line.selectedIndex = "2";
  } else if (document.getElementById("wyborLinia1").disabled==true && document.getElementById("wyborLinia2").disabled==true) {
    line.selectedIndex = "3";
  } else {
    line.selectedIndex = "0";
  }
}

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

function timetable() { 
  var busStop = window[selection.value + line.value + direction.value];
  var stop = selection.options[selection.selectedIndex].value;
  var yourBus = document.getElementById('your_bus');
  var wholeTimetable = document.getElementById('whole_timetable');
  var button = document.createElement("button");
  var buttonText = document.createTextNode("Sprawdź cały rozkład z tego przystanku");

  var i;

  button.className = 'check_all_button';

  if(busStop == undefined){
    yourBus.style.fontSize = '4.5vw';
    yourBus.style.textAlign = 'center';
    yourBus.style.color = '#ff5441';
    yourBus.innerHTML = 'Wybrana linia nie odjeżdża dziś z Twojego przystanku';
  } else {

    yourBus.style = null;

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
          if(day == 5 || day == 7) {
            busStop = window[selection.value + line.value + direction.value + "Dif"];
          }
          date = new Date("February 23 2018 " + busStop[0]);
          ht = date.getHours();
          mt = date.getMinutes();
          break;
      } 
    }
    
    if (mt < 10) {
      yourBus.innerHTML = ht + ':' + '0' + mt;
    } else {
      yourBus.innerHTML = ht + ':' + mt;
    }
  }
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

function bus() {
  var wholeTimetable = document.getElementById('whole_timetable');
  var checkAllButton = wholeTimetable.getElementsByClassName('check_all_button');

  for (var i = checkAllButton.length; i--; ) {
    checkAllButton[i].remove();
  }
  
  timetable();
}

selection.addEventListener('change', disableLines);
checkBus.addEventListener('click', bus);
