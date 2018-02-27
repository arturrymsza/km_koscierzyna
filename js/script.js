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


if (weekDay > 0 && weekDay < 6) {
  var szpital1pkp = ['6:10', '7:15', '7:35', '7:55', '8:45', '11:30', '14:10', '15:10', '15:55', '16:50', '19:10'];
  var rogali1szpital = ['5:41', '6:32', '7:52', '8:32', '10:47', '13:07', '13:35', '14:27', '14:37', '15:29', '16:27', '20:12'];
};

if (weekDay === 0 || weekDay === 6 || holiday === "10" || holiday === "60" || holiday === "13" || holiday === "23" || holiday === "14"
    || holiday === "34" || holiday === "204" || holiday === "314" || holiday === "157" || holiday === "110" || holiday === "1110"
    || holiday === "2511" || holiday === "2611") {

  var szpital1pkp = ['7:55', '13:15', '16:55', '19:10'];
  var rogali1szpital = ['6:30', '9:42', '13:06', '16:25'];
};

checkBus.addEventListener('click', timetable);

function timetable() { 
  var busStop = window[selection.value + line.value + direction.value];
  var stop = selection.options[selection.selectedIndex].value;
  var yourBus = document.getElementById('your_bus');
  var i;

  for (i = 0; i < busStop.length; i++) { 
    
    var date = new Date("February 23 2018 " + busStop[i]);
    var ht = date.getHours();
    var mt = date.getMinutes(); 
    if (ht > hn || (ht === hn && mn < mt)) {break;}
  }
  
 yourBus.innerHTML = ht + ':' + mt;
 console.log(stop);
}