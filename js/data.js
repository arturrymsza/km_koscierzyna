const now = new Date(); 
const weekDay = now.getDay();
const monthDay = now.getDate();
const month = now.getMonth();
var holiday = monthDay.toString() + month.toString();

if (weekDay > 0 && weekDay < 6) {
  /*line 1 direction pkp*/
  var szpital1pkp = ['6:10', '7:15', '7:35', '7:55', '8:45', '11:30', '14:10', '15:10', '15:55', '16:50', '19:10'];
  var malcuzynskiego1pkp = ['6:11', '7:16', '7:36', '7:56', '8:46', '11:31', '14:11', '15:11', '15:56', '16:51', '19:11'];
  var szydlice1pkp = ['6:12', '7:17', '7:37', '7:57', '8:47', '11:32', '14:12', '15:12', '15:57', '16:52', '19:12'];
  var konopnickiej1pkp = ['6:13', '7:18', '7:38', '7:58', '8:48', '11:33', '14:13', '15:13', '15:58', '16:53', '19:13'];
  var rozana1pkp = ['6:14', '7:19', '7:39', '7:59', '8:49', '11:34', '14:14', '15:14', '15:59', '16:54', '19:14'];
  var sikorskiego1pkp = ['6:15', '7:20', '7:40', '8:00', '8:50', '11:35', '14:15', '15:15', '16:00', '16:55', '19:15'];
  var strzelecka1pkp = ['6:16', '7:21', '7:41', '8:01', '8:51', '11:36', '14:16', '15:16', '16:01', '16:56', '19:16'];
  var rogali1pkp = ['6:17', '7:22', '7:42', '8:02', '8:52', '11:37', '14:17', '15:17', '16:02', '16:57', '19:17'];
  var marchewicza1pkp = ['6:18', '7:23', '7:43', '8:03', '8:53', '11:38', '14:18', '15:18', '16:03', '16:58', '19:18'];
  var bolewskiej1pkp = ['6:19', '7:24', '7:44', '8:04', '8:54', '11:39', '14:19', '15:19', '16:04', '16:59', '19:19'];
  var szkolna1pkp = ['6:20', '7:25', '7:45', '8:05', '8:55', '11:40', '14:20', '15:20', '16:05', '17:00', '19:20'];
  var heykego1pkp = ['6:21', '7:26', '7:46', '8:06', '8:56', '11:41', '14:21', '15:21', '16:06', '17:01', '19:21'];
  var kartuska1pkp = ['6:22', '7:27', '7:47', '8:07', '8:57', '11:42', '14:22', '15:22', '16:07', '17:02', '19:22'];
  var szopinskiego1pkp = ['6:24', '7:29', '7:49', '8:09', '8:59', '11:44', '14:24', '15:24', '16:09', '17:04', '19:24'];
  var maja1pkp = ['6:26', '7:31', '7:51', '8:11', '9:01', '11:46', '14:26', '15:26', '16:11', '17:06', '19:26'];
  var dworcowa1pkp = ['6:27', '7:32', '7:52', '8:12', '9:02', '11:47', '14:27', '15:27', '16:12', '17:07', '19:27'];
  
  /*line 3 direction pkp*/
  var szpital3pkp = ['7:25', '8:05', '8:55', '9:55', '13:14', '14:10', '14:50', '15:10'];
  var malcuzynskiego3pkp = ['7:26', '8:06', '8:56', '9:56', '13:15', '14:11', '14:51', '15:11'];
  var szydlice3pkp = ['7:27', '8:07', '8:57', '9:57', '13:16', '14:12', '14:52', '15:12'];
  var konopnickiej3pkp = ['7:28', '8:08', '8:58', '9:58', '13:17', '14:13', '14:53', '15:13'];
  var staszica3pkp = ['7:29', '8:09', '8:59', '9:59', '13:18', '14:14', '14:54', '15:14'];
  var marca3pkp = ['7:30', '8:10', '9:00', '10:00', '13:19', '14:15', '14:55', '15:15'];
  var galeria3pkp = ['7:32', '8:12', '9:02', '10:02', '13:21', '14:17', '14:57', '15:17'];
  var kapliczna3pkp = ['7:34', '8:14', '9:04', '10:17', '13:23', '14:19', '14:59', '15:19'];
  var skarszewska3pkp = ['7:35', '8:15', '9:05', '10:18', '13:24', '14:20', '15:00', '15:20'];
  var matejki3pkp = ['7:36', '8:16', '9:06', '10:19', '13:25', '14:21', '15:01', '15:21'];
  var michalowskiego3pkp = ['7:37', '8:17', '9:07', '13:26', '14:22', '15:02', '15:22'];
  var sikorskiego3pkp = ['10:06'];
  var strzelecka3pkp = ['10:07'];
  var rogali3pkp = ['10:08'];
  var marchewicza3pkp = ['10:09'];
  var bolewskiej3pkp = ['10:10'];
  var szkolna3pkp = ['10:11'];
  var heykego3pkp = ['10:12'];
  var kartuska3pkp = ['10:13'];
  var szopinskiego3pkp = ['10:15'];
  var dworcowa3mlynska = ['8:19'];
  var maja3mlynska = ['8:20'];
  
  /*line 4 direction pkp*/
  var szpital4pkp = ['10:40', '15:50', '17:40'];
  var malcuzynskiego4pkp = ['10:41', '15:51', '17:41'];
  var szydlice4pkp = ['10:42', '15:52', '17:42'];
  var konopnickiej4pkp = ['10:43', '15:53', '17:43'];
  var staszica4pkp = ['10:44', '15:54', '17:44'];
  var kasztanowa4pkp = ['10:45', '15:55', '17:45'];
  var kosciuszki4pkp = ['10:46', '15:56', '17:46'];
  var chojnicka4pkp = ['10:47', '15:57', '17:47'];
  var cegielnia4pkp = ['10:49', '15:59', '17:49'];
  var chojnickaklasztorna4pkp = ['10:50', '16:00', '17:50'];
  var wierzysko4pkp = ['16:02'];
  var klasztorna4pkp = ['10:51', '16:04', '17:51'];
  var galeria4pkp = ['10:53', '16:06', '17:53'];
  var kapliczna4pkp = ['10:55', '16:08', '17:55'];
  var skarszewska4pkp = ['10:56', '16:09', '17:56'];
  var matejki4pkp = ['10:57', '16:10', '17:57'];
  var michalowskiego4pkp = ['10:58', '16:11', '17:58'];
  
  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpital = ['5:29', '6:20', '7:40', '8:20', '10:35', '12:55', '13:23', '14:15', '14:25', '16:15', '18:30', '20:00'];
  var dworcowa1szpital = ['5:30', '6:21', '7:41', '8:21', '10:36', '12:56', '13:24', '14:16', '14:26', '16:16', '20:01'];
  var maja1szpital = ['5:31', '6:22', '7:42', '8:22', '10:37', '12:57', '13:25', '14:17', '14:27', '16:17', '20:02'];
  var szopinskiego1szpital = ['5:33', '6:24', '7:44', '8:24', '10:39', '12:59', '13:27', '14:19', '14:29', '16:19', '18:35', '20:04'];
  var kartuska1szpital = ['5:35', '6:26', '7:46', '8:26', '10:41', '13:01', '13:29', '14:21', '14:31', '16:21', '18:37', '20:06'];
  var heykego1szpital = ['5:36', '6:27', '7:47', '8:27', '10:42', '13:02', '13:30', '14:22', '14:32', '16:22', '18:38', '20:07'];
  var szkolna1szpital = ['5:38', '6:29', '7:49', '8:29', '10:44', '13:04', '13:32', '14:24', '14:34', '16:24', '18:40', '20:09'];
  var bolewskiej1szpital = ['5:39', '6:30', '7:50', '8:30', '10:45', '13:05', '13:33', '14:25', '14:35', '16:25', '18:41', '20:10'];
  var marchewicza1szpital = ['5:40', '6:31', '7:51', '8:31', '10:46', '13:06', '13:34', '14:26', '14:36', '16:26', '18:42', '20:11'];
  var rogali1szpital = ['5:41', '6:32', '7:52', '8:32', '10:47', '13:07', '13:35', '14:27', '14:37', '16:27', '18:43', '20:12'];
  var strzelecka1szpital = ['5:42', '6:33', '7:53', '8:33', '10:48', '13:08', '13:36', '14:28', '14:38', '16:28', '18:44', '20:13'];
  var sikorskiego1szpital = ['5:43', '6:34', '7:54', '8:34', '10:49', '13:09', '13:37', '14:29', '14:39', '16:29', '18:45', '20:14'];
  var rozana1szpital = ['5:44', '6:35', '7:55', '8:35', '10:50', '13:10', '13:38', '14:30', '14:40', '16:30', '18:46', '20:15'];
  var konopnickiej1szpital = ['5:45', '6:36', '7:56', '8:36', '10:51', '13:11', '13:39', '14:31', '14:41', '16:31', '18:47', '20:16'];
  var szydlice1szpital = ['5:46', '6:37', '7:57', '8:37', '10:52', '13:12', '13:40', '14:32', '14:42', '16:32', '18:48', '20:17'];
  var malcuzynskiego1szpital = ['5:47', '6:38', '7:58', '8:38', '10:53', '13:13', '13:41', '14:33', '14:43', '16:33', '18:49', '20:18'];
  var matejki1szpital = ['18:32'];
  var skarszewska1szpital = ['18:33'];
  var kapliczna1szpital = ['18:34'];

  /*line 2 direction szpital*/
  var pkp2szpital = ['9:25', '15:10'];
  var michalowskiego2szpital = ['9:26', '15:11'];
  var kossaka2szpital = ['9:27', '15:12'];
  var tatarkiewicza2szpital = ['9:29', '15:14'];
  var michalowicza2szpital = ['9:30', '15:15'];
  var towarowa2szpital = ['9:31', '15:16'];
  var bazowa2szpital = ['9:32', '15:17'];
  var drogowcow2szpital = ['9:33', '15:18'];
  var petla2szpital = ['9:34', '15:19'];
  var szopinskiego2szpital = ['9:36', '15:21'];
  var kartuska2szpital = ['9:38', '15:23'];
  var heykego2szpital = ['9:39', '15:24'];
  var szkolna2szpital = ['9:41', '15:26'];
  var bolewskiej2szpital = ['9:42', '15:27'];
  var marchewicza2szpital = ['9:43', '15:28'];
  var rogali2szpital = ['9:44', '15:29'];
  var strzelecka2szpital = ['9:45', '15:30'];
  var sikorskiego2szpital = ['9:46', '15:31'];
  var rozana2szpital = ['9:47', '15:32'];
  var konopnickiej2szpital = ['9:48', '15:33'];
  var szydlice2szpital = ['9:49', '15:34'];
  var malcuzynskiego2szpital = ['9:50', '15:35'];

  /*line 3 direction szpital*/
  var pkp3szpital = ['6:58', '7:39', '10:10', '13:40', '14:40', '15:25', '17:13'];
  var michalowskiego3szpital = ['6:59', '7:40', '10:11', '13:41', '14:41', '15:26', '17:14'];
  var matejki3szpital = ['7:00', '7:41', '10:12', '13:42', '14:42', '15:27', '17:15'];
  var skarszewska3szpital = ['7:01', '7:42', '10:13', '13:43', '14:43', '15:28', '17:16'];
  var kapliczna3szpital = ['7:02', '7:43', '10:14', '13:44', '14:44', '15:29', '17:17'];
  var galeria3szpital = ['7:04', '7:45', '10:16', '13:46', '14:46', '15:31', '17:19'];
  var marca3szpital = ['7:06', '7:47', '10:18', '13:48', '14:48', '15:33', '17:21'];
  var staszica3szpital = ['7:07', '7:48', '10:19', '13:49', '14:49', '15:34', '17:22'];
  var konopnickiej3szpital = ['7:08', '7:49', '10:20', '13:50', '14:50', '15:35', '17:23'];
  var szydlice3szpital = ['7:09', '7:50', '10:21', '13:51', '14:51', '15:36', '17:24'];
  var malcuzynskiego3szpital = ['7:10', '7:51', '10:22', '13:52', '14:52', '15:37', '17:25'];

  /*line 4 direction szpital*/
  var pkp4szpital = ['7:30', '12:20'];
  var michalowskiego4szpital = ['7:31', '12:21'];
  var matejki4szpital = ['7:32', '12:22'];
  var skarszewska4szpital = ['7:33', '12:23'];
  var kapliczna4szpital = ['7:34', '12:24'];
  var galeria4szpital = ['7:36', '12:26'];
  var roltex4szpital = ['7:37', '12:27'];
  var klasztorna4szpital = ['7:38', '12:28'];
  var wierzysko4szpital = ['7:40'];
  var chojnickaklasztorna4szpital = ['7:42', '12:32'];
  var cegielnia4szpital = ['7:43', '12:33'];
  var staszica4szpital = ['7:44', '12:34'];
  var konopnickiej4szpital = ['7:45', '12:35'];
  var szydlice4szpital = ['7:46', '12:36'];
  var malcuzynskiego4szpital = ['7:47', '12:37'];

  /*line 5 direction Staszica*/
  var pkp5staszica = ['6:35', '10:15', '15:55'];
  var dworcowa5staszica = ['6:36', '10:16', '15:56'];
  var maja5staszica = ['6:37', '10:17', '15:57'];
  var galeria5staszica = ['6:39', '15:59'];
  var szopinskiego5staszica = ['10:19'];
  var rozana5staszica = ['10:22'];
  
  var szpital7mlynska = ['7:03'];
  var szpital6pkp = ['12:35'];
  
  var dayType = "dni robocze";
  
  /*different day type*/
  /*line 1 direction pkp*/
  var szpital1pkpDif = ['7:55', '13:15', '16:55', '19:10'];
  var malcuzynskiego1pkpDif = ['7:56', '13:16', '16:56', '19:11'];
  var szydlice1pkpDif = ['7:57', '13:17', '16:57', '19:12'];
  var konopnickiej1pkpDif = ['7:58', '13:18', '16:58', '19:13'];
  var rozana1pkpDif = ['7:59', '13:19', '16:59', '19:14'];
  var sikorskiego1pkpDif = ['8:00', '13:20', '17:00', '19:15'];
  var strzelecka1pkpDif = ['8:01', '13:21', '17:01', '19:16'];
  var rogali1pkpDif = ['8:02', '13:22', '17:02', '19:17'];
  var szkolna1pkpDif = ['8:03', '13:23', '17:03', '19:18'];
  var heykego1pkpDif = ['8:04', '13:24', '17:04', '19:19'];
  var kartuska1pkpDif = ['8:05', '13:25', '17:05', '19:20'];
  var szopinskiego1pkpDif = ['8:07', '13:27', '17:07', '19:22'];
  var maja1pkpDif = ['8:09', '13:29', '17:09', '19:24'];
  var dworcowa1pkpDif = ['8:10', '13:30', '17:10', '19:25'];
  
  /*line 3 direction pkp*/
  var szpital3pkpDif = ['7:25', '15:10'];
  var malcuzynskiego3pkpDif = ['7:26', '15:11'];
  var szydlice3pkpDif = ['7:27', '15:12'];
  var konopnickiej3pkpDif = ['7:28', '15:13'];
  var staszica3pkpDif = ['7:29', '15:14'];
  var marca3pkpDif = ['7:30', '15:15'];
  var galeria3pkpDif = ['7:32', '15:17'];
  var kapliczna3pkpDif = ['7:34', '15:19'];
  var skarszewska3pkpDif = ['7:35', '15:20'];
  var matejki3pkpDif = ['7:36', '15:21'];
  var michalowskiego3pkpDif = ['7:37', '15:22'];
  
  /*line 4 direction pkp*/
  var szpital4pkpDif = ['10:40', '17:40'];
  var malcuzynskiego4pkpDif = ['10:41', '17:41'];
  var szydlice4pkpDif = ['10:42', '17:42'];
  var konopnickiej4pkpDif = ['10:43', '17:43'];
  var staszica4pkpDif = ['10:44', '17:44'];
  var kasztanowa4pkpDif = ['10:45', '17:45'];
  var kosciuszki4pkpDif = ['10:46', '17:46'];
  var chojnicka4pkpDif = ['10:47', '17:47'];
  var cegielnia4pkpDif = ['10:49', '17:49'];
  var chojnickaklasztorna4pkpDif = ['10:50', '17:50'];
  var klasztorna4pkpDif = ['10:51', '17:51'];
  var galeria4pkpDif = ['10:53', '17:53'];
  var kapliczna4pkpDif = ['10:55', '17:55'];
  var skarszewska4pkpDif = ['10:56', '17:56'];
  var matejki4pkpDif = ['10:57', '17:57'];
  var michalowskiego4pkpDif = ['10:58', '17:58'];
  
  var szpital4pkpDif = ['10:40', '17:40'];
  var szpital6pkpDif = ['12:35'];

  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpitalDif = ['6:20', '12:56', '16:15'];
  var dworcowa1szpitalDif = ['6:21', '12:57', '16:16'];
  var maja1szpitalDif = ['6:22', '12:58', '16:17'];
  var szopinskiego1szpitalDif = ['6:24', '13:00', '16:19'];
  var kartuska1szpitalDif = ['6:26', '13:02', '16:21'];
  var heykego1szpitalDif = ['6:27', '13:03', '16:22'];
  var szkolna1szpitalDif = ['6:29', '13:05', '16:24'];
  var rogali1szpitalDif = ['6:30', '13:06', '16:25'];
  var strzelecka1szpitalDif = ['6:31', '13:07', '16:26'];
  var sikorskiego1szpitalDif = ['6:32', '13:08', '16:27'];
  var rozana1szpitalDif = ['6:33', '13:09', '16:28'];
  var konopnickiej1szpitalDif = ['6:34', '13:10', '16:29'];
  var szydlice1szpitalDif = ['6:35', '13:11', '16:30'];
  var malcuzynskiego1szpitalDif = ['6:36', '13:12', '16:31'];

  /*line 2 direction szpital*/
  var pkp2szpitalDif = ['9:25'];
  var michalowskiego2szpitalDif = ['9:26'];
  var kossaka2szpitalDif = ['9:27'];
  var tatarkiewicza2szpitalDif = ['9:29'];
  var michalowicza2szpitalDif = ['9:30'];
  var towarowa2szpitalDif = ['9:31'];
  var bazowa2szpitalDif = ['9:32'];
  var drogowcow2szpitalDif = ['9:33'];
  var petla2szpitalDif = ['9:34'];
  var szopinskiego2szpitalDif = ['9:36'];
  var kartuska2szpitalDif = ['9:38'];
  var heykego2szpitalDif = ['9:39'];
  var szkolna2szpitalDif = ['9:41'];
  var rogali2szpitalDif = ['9:42'];
  var strzelecka2szpitalDif = ['9:43'];
  var sikorskiego2szpitalDif = ['9:44'];
  var rozana2szpitalDif = ['9:45'];
  var konopnickiej2szpitalDif = ['9:46'];
  var szydlice2szpitalDif = ['9:47'];
  var malcuzynskiego2szpitalDif = ['9:48'];

  /*line 3 direction szpital*/
  var pkp3szpitalDif = ['7:39', '14:40', '17:27'];
  var michalowskiego3szpitalDif = ['7:40', '14:41', '17:28'];
  var matejki3szpitalDif = ['7:41', '14:42', '17:29'];
  var skarszewska3szpitalDif = ['7:42', '14:43', '17:30'];
  var kapliczna3szpitalDif = ['7:43', '14:44', '17:31'];
  var galeria3szpitalDif = ['7:45', '14:46', '17:33'];
  var marca3szpitalDif = ['7:47', '14:48', '17:35'];
  var staszica3szpitalDif = ['7:48', '14:49','17:36'];
  var konopnickiej3szpitalDif = ['7:49', '14:50', '17:37'];
  var szydlice3szpitalDif = ['7:50', '14:51', '17:38'];
  var malcuzynskiego3szpitalDif = ['7:51', '14:52', '17:39'];

  /*line 4 direction szpital*/
  var pkp4szpitalDif = ['12:20'];
  var michalowskiego4szpitalDif = ['12:21'];
  var matejki4szpitalDif = ['12:22'];
  var skarszewska4szpitalDif = ['12:23'];
  var kapliczna4szpitalDif = ['12:24'];
  var galeria4szpitalDif = ['12:26'];
  var roltex4szpitalDif = ['12:27'];
  var klasztorna4szpitalDif = ['12:28'];
  var chojnickaklasztorna4szpitalDif = ['12:32'];
  var cegielnia4szpitalDif = ['12:33'];
  var staszica4szpitalDif = ['12:34'];
  var konopnickiej4szpitalDif = ['12:35'];
  var szydlice4szpitalDif = ['12:36'];
  var malcuzynskiego4szpitalDif = ['12:37'];

  /*line 5 direction Staszica*/
  var pkp5staszicaDif = ['10:15'];
  var dworcowa5staszicaDif = ['10:16'];
  var maja5staszicaDif = ['10:17'];
  var szopinskiego5staszicaDif = ['10:19'];
  var rozana5staszicaDif = ['10:22'];
  
  var dayTypeDif = "soboty, niedziele i święta";
};

if (weekDay === 0 || weekDay === 6 || holiday === "10" || holiday === "60" || holiday === "13" || holiday === "23" || holiday === "14"
    || holiday === "34" || holiday === "204" || holiday === "314" || holiday === "157" || holiday === "110" || holiday === "1110"
    || holiday === "2511" || holiday === "2611") {
  
  /*line 1 direction pkp*/
  var szpital1pkp = ['7:55', '13:15', '16:55', '19:10'];
  var malcuzynskiego1pkp = ['7:56', '13:16', '16:56', '19:11'];
  var szydlice1pkp = ['7:57', '13:17', '16:57', '19:12'];
  var konopnickiej1pkp = ['7:58', '13:18', '16:58', '19:13'];
  var rozana1pkp = ['7:59', '13:19', '16:59', '19:14'];
  var sikorskiego1pkp = ['8:00', '13:20', '17:00', '19:15'];
  var strzelecka1pkp = ['8:01', '13:21', '17:01', '19:16'];
  var rogali1pkp = ['8:02', '13:22', '17:02', '19:17'];
  var szkolna1pkp = ['8:03', '13:23', '17:03', '19:18'];
  var heykego1pkp = ['8:04', '13:24', '17:04', '19:19'];
  var kartuska1pkp = ['8:05', '13:25', '17:05', '19:20'];
  var szopinskiego1pkp = ['8:07', '13:27', '17:07', '19:22'];
  var maja1pkp = ['8:09', '13:29', '17:09', '19:24'];
  var dworcowa1pkp = ['8:10', '13:30', '17:10', '19:25'];
  
  /*line 3 direction pkp*/
  var szpital3pkp = ['7:25', '15:10'];
  var malcuzynskiego3pkp = ['7:26', '15:11'];
  var szydlice3pkp = ['7:27', '15:12'];
  var konopnickiej3pkp = ['7:28', '15:13'];
  var staszica3pkp = ['7:29', '15:14'];
  var marca3pkp = ['7:30', '15:15'];
  var galeria3pkp = ['7:32', '15:17'];
  var kapliczna3pkp = ['7:34', '15:19'];
  var skarszewska3pkp = ['7:35', '15:20'];
  var matejki3pkp = ['7:36', '15:21'];
  var michalowskiego3pkp = ['7:37', '15:22'];
  
  /*line 4 direction pkp*/
  var szpital4pkp = ['10:40', '17:40'];
  var malcuzynskiego4pkp = ['10:41', '17:41'];
  var szydlice4pkp = ['10:42', '17:42'];
  var konopnickiej4pkp = ['10:43', '17:43'];
  var staszica4pkp = ['10:44', '17:44'];
  var kasztanowa4pkp = ['10:45', '17:45'];
  var kosciuszki4pkp = ['10:46', '17:46'];
  var chojnicka4pkp = ['10:47', '17:47'];
  var cegielnia4pkp = ['10:49', '17:49'];
  var chojnickaklasztorna4pkp = ['10:50', '17:50'];
  var klasztorna4pkp = ['10:51', '17:51'];
  var galeria4pkp = ['10:53', '17:53'];
  var kapliczna4pkp = ['10:55', '17:55'];
  var skarszewska4pkp = ['10:56', '17:56'];
  var matejki4pkp = ['10:57', '17:57'];
  var michalowskiego4pkp = ['10:58', '17:58'];
  
  var szpital4pkp = ['10:40', '17:40'];
  var szpital6pkp = ['12:35'];

  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpital = ['6:20', '12:56', '16:15'];
  var dworcowa1szpital = ['6:21', '12:57', '16:16'];
  var maja1szpital = ['6:22', '12:58', '16:17'];
  var szopinskiego1szpital = ['6:24', '13:00', '16:19'];
  var kartuska1szpital = ['6:26', '13:02', '16:21'];
  var heykego1szpital = ['6:27', '13:03', '16:22'];
  var szkolna1szpital = ['6:29', '13:05', '16:24'];
  var rogali1szpital = ['6:30', '13:06', '16:25'];
  var strzelecka1szpital = ['6:31', '13:07', '16:26'];
  var sikorskiego1szpital = ['6:32', '13:08', '16:27'];
  var rozana1szpital = ['6:33', '13:09', '16:28'];
  var konopnickiej1szpital = ['6:34', '13:10', '16:29'];
  var szydlice1szpital = ['6:35', '13:11', '16:30'];
  var malcuzynskiego1szpital = ['6:36', '13:12', '16:31'];

  /*line 2 direction szpital*/
  var pkp2szpital = ['9:25'];
  var michalowskiego2szpital = ['9:26'];
  var kossaka2szpital = ['9:27'];
  var tatarkiewicza2szpital = ['9:29'];
  var michalowicza2szpital = ['9:30'];
  var towarowa2szpital = ['9:31'];
  var bazowa2szpital = ['9:32'];
  var drogowcow2szpital = ['9:33'];
  var petla2szpital = ['9:34'];
  var szopinskiego2szpital = ['9:36'];
  var kartuska2szpital = ['9:38'];
  var heykego2szpital = ['9:39'];
  var szkolna2szpital = ['9:41'];
  var rogali2szpital = ['9:42'];
  var strzelecka2szpital = ['9:43'];
  var sikorskiego2szpital = ['9:44'];
  var rozana2szpital = ['9:45'];
  var konopnickiej2szpital = ['9:46'];
  var szydlice2szpital = ['9:47'];
  var malcuzynskiego2szpital = ['9:48'];

  /*line 3 direction szpital*/
  var pkp3szpital = ['7:39', '14:40', '17:27'];
  var michalowskiego3szpital = ['7:40', '14:41', '17:28'];
  var matejki3szpital = ['7:41', '14:42', '17:29'];
  var skarszewska3szpital = ['7:42', '14:43', '17:30'];
  var kapliczna3szpital = ['7:43', '14:44', '17:31'];
  var galeria3szpital = ['7:45', '14:46', '17:33'];
  var marca3szpital = ['7:47', '14:48', '17:35'];
  var staszica3szpital = ['7:48', '14:49','17:36'];
  var konopnickiej3szpital = ['7:49', '14:50', '17:37'];
  var szydlice3szpital = ['7:50', '14:51', '17:38'];
  var malcuzynskiego3szpital = ['7:51', '14:52', '17:39'];

  /*line 4 direction szpital*/
  var pkp4szpital = ['12:20'];
  var michalowskiego4szpital = ['12:21'];
  var matejki4szpital = ['12:22'];
  var skarszewska4szpital = ['12:23'];
  var kapliczna4szpital = ['12:24'];
  var galeria4szpital = ['12:26'];
  var roltex4szpital = ['12:27'];
  var klasztorna4szpital = ['12:28'];
  var chojnickaklasztorna4szpital = ['12:32'];
  var cegielnia4szpital = ['12:33'];
  var staszica4szpital = ['12:34'];
  var konopnickiej4szpital = ['12:35'];
  var szydlice4szpital = ['12:36'];
  var malcuzynskiego4szpital = ['12:37'];

  /*line 5 direction Staszica*/
  var pkp5staszica = ['10:15'];
  var dworcowa5staszica = ['10:16'];
  var maja5staszica = ['10:17'];
  var szopinskiego5staszica = ['10:19'];
  var rozana5staszica = ['10:22'];

  var dayType = "soboty, niedziele i święta";

  /*different day type*/
  /*line 1 direction pkp*/
  var szpital1pkpDif = ['6:10', '7:15', '7:35', '7:55', '8:45', '11:30', '14:10', '15:10', '15:55', '16:50', '19:10'];
  var malcuzynskiego1pkpDif = ['6:11', '7:16', '7:36', '7:56', '8:46', '11:31', '14:11', '15:11', '15:56', '16:51', '19:11'];
  var szydlice1pkpDif = ['6:12', '7:17', '7:37', '7:57', '8:47', '11:32', '14:12', '15:12', '15:57', '16:52', '19:12'];
  var konopnickiej1pkpDif = ['6:13', '7:18', '7:38', '7:58', '8:48', '11:33', '14:13', '15:13', '15:58', '16:53', '19:13'];
  var rozana1pkpDif = ['6:14', '7:19', '7:39', '7:59', '8:49', '11:34', '14:14', '15:14', '15:59', '16:54', '19:14'];
  var sikorskiego1pkpDif = ['6:15', '7:20', '7:40', '8:00', '8:50', '11:35', '14:15', '15:15', '16:00', '16:55', '19:15'];
  var strzelecka1pkpDif = ['6:16', '7:21', '7:41', '8:01', '8:51', '11:36', '14:16', '15:16', '16:01', '16:56', '19:16'];
  var rogali1pkpDif = ['6:17', '7:22', '7:42', '8:02', '8:52', '11:37', '14:17', '15:17', '16:02', '16:57', '19:17'];
  var marchewicza1pkpDif = ['6:18', '7:23', '7:43', '8:03', '8:53', '11:38', '14:18', '15:18', '16:03', '16:58', '19:18'];
  var bolewskiej1pkpDif = ['6:19', '7:24', '7:44', '8:04', '8:54', '11:39', '14:19', '15:19', '16:04', '16:59', '19:19'];
  var szkolna1pkpDif = ['6:20', '7:25', '7:45', '8:05', '8:55', '11:40', '14:20', '15:20', '16:05', '17:00', '19:20'];
  var heykego1pkpDif = ['6:21', '7:26', '7:46', '8:06', '8:56', '11:41', '14:21', '15:21', '16:06', '17:01', '19:21'];
  var kartuska1pkpDif = ['6:22', '7:27', '7:47', '8:07', '8:57', '11:42', '14:22', '15:22', '16:07', '17:02', '19:22'];
  var szopinskiego1pkpDif = ['6:24', '7:29', '7:49', '8:09', '8:59', '11:44', '14:24', '15:24', '16:09', '17:04', '19:24'];
  var maja1pkpDif = ['6:26', '7:31', '7:51', '8:11', '9:01', '11:46', '14:26', '15:26', '16:11', '17:06', '19:26'];
  var dworcowa1pkpDif = ['6:27', '7:32', '7:52', '8:12', '9:02', '11:47', '14:27', '15:27', '16:12', '17:07', '19:27'];
  
  /*line 3 direction pkp*/
  var szpital3pkpDif = ['7:25', '8:05', '8:55', '9:55', '13:14', '14:10', '14:50', '15:10'];
  var malcuzynskiego3pkpDif = ['7:26', '8:06', '8:56', '9:56', '13:15', '14:11', '14:51', '15:11'];
  var szydlice3pkpDif = ['7:27', '8:07', '8:57', '9:57', '13:16', '14:12', '14:52', '15:12'];
  var konopnickiej3pkpDif = ['7:28', '8:08', '8:58', '9:58', '13:17', '14:13', '14:53', '15:13'];
  var staszica3pkpDif = ['7:29', '8:09', '8:59', '9:59', '13:18', '14:14', '14:54', '15:14'];
  var marca3pkpDif = ['7:30', '8:10', '9:00', '10:00', '13:19', '14:15', '14:55', '15:15'];
  var galeria3pkpDif = ['7:32', '8:12', '9:02', '10:02', '13:21', '14:17', '14:57', '15:17'];
  var kapliczna3pkpDif = ['7:34', '8:14', '9:04', '10:17', '13:23', '14:19', '14:59', '15:19'];
  var skarszewska3pkpDif = ['7:35', '8:15', '9:05', '10:18', '13:24', '14:20', '15:00', '15:20'];
  var matejki3pkpDif = ['7:36', '8:16', '9:06', '10:19', '13:25', '14:21', '15:01', '15:21'];
  var michalowskiego3pkpDif = ['7:37', '8:17', '9:07', '13:26', '14:22', '15:02', '15:22'];
  var sikorskiego3pkpDif = ['10:06'];
  var strzelecka3pkpDif = ['10:07'];
  var rogali3pkpDif = ['10:08'];
  var marchewicza3pkpDif = ['10:09'];
  var bolewskiej3pkpDif = ['10:10'];
  var szkolna3pkpDif = ['10:11'];
  var heykego3pkpDif = ['10:12'];
  var kartuska3pkpDif = ['10:13'];
  var szopinskiego3pkpDif = ['10:15'];
  var dworcowa3mlynskaDif = ['8:19'];
  var maja3mlynskaDif = ['8:20'];
  
  /*line 4 direction pkp*/
  var szpital4pkpDif = ['10:40', '15:50', '17:40'];
  var malcuzynskiego4pkpDif = ['10:41', '15:51', '17:41'];
  var szydlice4pkpDif = ['10:42', '15:52', '17:42'];
  var konopnickiej4pkpDif = ['10:43', '15:53', '17:43'];
  var staszica4pkpDif = ['10:44', '15:54', '17:44'];
  var kasztanowa4pkpDif = ['10:45', '15:55', '17:45'];
  var kosciuszki4pkpDif = ['10:46', '15:56', '17:46'];
  var chojnicka4pkpDif = ['10:47', '15:57', '17:47'];
  var cegielnia4pkpDif = ['10:49', '15:59', '17:49'];
  var chojnickaklasztorna4pkpDif = ['10:50', '16:00', '17:50'];
  var wierzysko4pkpDif = ['16:02'];
  var klasztorna4pkpDif = ['10:51', '16:04', '17:51'];
  var galeria4pkpDif = ['10:53', '16:06', '17:53'];
  var kapliczna4pkpDif = ['10:55', '16:08', '17:55'];
  var skarszewska4pkpDif = ['10:56', '16:09', '17:56'];
  var matejki4pkpDif = ['10:57', '16:10', '17:57'];
  var michalowskiego4pkpDif = ['10:58', '16:11', '17:58'];

  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpitalDif = ['5:29', '6:20', '7:40', '8:20', '10:35', '12:55', '13:23', '14:15', '14:25', '16:15', '20:00'];
  var dworcowa1szpitalDif = ['5:30', '6:21', '7:41', '8:21', '10:36', '12:56', '13:24', '14:16', '14:26', '16:16', '20:01'];
  var maja1szpitalDif = ['5:31', '6:22', '7:42', '8:22', '10:37', '12:57', '13:25', '14:17', '14:27', '16:17', '20:02'];
  var szopinskiego1szpitalDif = ['5:33', '6:24', '7:44', '8:24', '10:39', '12:59', '13:27', '14:19', '14:29', '16:19', '20:04'];
  var kartuska1szpitalDif = ['5:35', '6:26', '7:46', '8:26', '10:41', '13:01', '13:29', '14:21', '14:31', '16:21', '20:06'];
  var heykego1szpitalDif = ['5:36', '6:27', '7:47', '8:27', '10:42', '13:02', '13:30', '14:22', '14:32', '16:22', '20:07'];
  var szkolna1szpitalDif = ['5:38', '6:29', '7:49', '8:29', '10:44', '13:04', '13:32', '14:24', '14:34', '16:24', '20:09'];
  var bolewskiej1szpitalDif = ['5:39', '6:30', '7:50', '8:30', '10:45', '13:05', '13:33', '14:25', '14:35', '16:25', '20:10'];
  var marchewicza1szpitalDif = ['5:40', '6:31', '7:51', '8:31', '10:46', '13:06', '13:34', '14:26', '14:36', '16:26', '20:11'];
  var rogali1szpitalDif = ['5:41', '6:32', '7:52', '8:32', '10:47', '13:07', '13:35', '14:27', '14:37', '16:27', '20:12'];
  var strzelecka1szpitalDif = ['5:42', '6:33', '7:53', '8:33', '10:48', '13:08', '13:36', '14:28', '14:38', '16:28', '20:13'];
  var sikorskiego1szpitalDif = ['5:43', '6:34', '7:54', '8:34', '10:49', '13:09', '13:37', '14:29', '14:39', '16:29', '20:14'];
  var rozana1szpitalDif = ['5:44', '6:35', '7:55', '8:35', '10:50', '13:10', '13:38', '14:30', '14:40', '16:30', '20:15'];
  var konopnickiej1szpitalDif = ['5:45', '6:36', '7:56', '8:36', '10:51', '13:11', '13:39', '14:31', '14:41', '16:31', '20:16'];
  var szydlice1szpitalDif = ['5:46', '6:37', '7:57', '8:37', '10:52', '13:12', '13:40', '14:32', '14:42', '16:32', '20:17'];
  var malcuzynskiego1szpitalDif = ['5:47', '6:38', '7:58', '8:38', '10:53', '13:13', '13:41', '14:33', '14:43', '16:33', '20:18'];

  /*line 2 direction szpital*/
  var pkp2szpitalDif = ['9:25', '15:10'];
  var michalowskiego2szpitalDif = ['9:26', '15:11'];
  var kossaka2szpitalDif = ['9:27', '15:12'];
  var tatarkiewicza2szpitalDif = ['9:29', '15:14'];
  var michalowicza2szpitalDif = ['9:30', '15:15'];
  var towarowa2szpitalDif = ['9:31', '15:16'];
  var bazowa2szpitalDif = ['9:32', '15:17'];
  var drogowcow2szpitalDif = ['9:33', '15:18'];
  var petla2szpitalDif = ['9:34', '15:19'];
  var szopinskiego2szpitalDif = ['9:36', '15:21'];
  var kartuska2szpitalDif = ['9:38', '15:23'];
  var heykego2szpitalDif = ['9:39', '15:24'];
  var szkolna2szpitalDif = ['9:41', '15:26'];
  var bolewskiej2szpitalDif = ['9:42', '15:27'];
  var marchewicza2szpitalDif = ['9:43', '15:28'];
  var rogali2szpitalDif = ['9:44', '15:29'];
  var strzelecka2szpitalDif = ['9:45', '15:30'];
  var sikorskiego2szpitalDif = ['9:46', '15:31'];
  var rozana2szpitalDif = ['9:47', '15:32'];
  var konopnickiej2szpitalDif = ['9:48', '15:33'];
  var szydlice2szpitalDif = ['9:49', '15:34'];
  var malcuzynskiego2szpitalDif = ['9:50', '15:35'];

  /*line 3 direction szpital*/
  var pkp3szpitalDif = ['6:58', '7:39', '10:10', '13:40', '14:40', '15:25', '17:13'];
  var michalowskiego3szpitalDif = ['6:59', '7:40', '10:11', '13:41', '14:41', '15:26', '17:14'];
  var matejki3szpitalDif = ['7:00', '7:41', '10:12', '13:42', '14:42', '15:27', '17:15'];
  var skarszewska3szpitalDif = ['7:01', '7:42', '10:13', '13:43', '14:43', '15:28', '17:16'];
  var kapliczna3szpitalDif = ['7:02', '7:43', '10:14', '13:44', '14:44', '15:29', '17:17'];
  var galeria3szpitalDif = ['7:04', '7:45', '10:16', '13:46', '14:46', '15:31', '17:19'];
  var marca3szpitalDif = ['7:06', '7:47', '10:18', '13:48', '14:48', '15:33', '17:21'];
  var staszica3szpitalDif = ['7:07', '7:48', '10:19', '13:49', '14:49', '15:34', '17:22'];
  var konopnickiej3szpitalDif = ['7:08', '7:49', '10:20', '13:50', '14:50', '15:35', '17:23'];
  var szydlice3szpitalDif = ['7:09', '7:50', '10:21', '13:51', '14:51', '15:36', '17:24'];
  var malcuzynskiego3szpitalDif = ['7:10', '7:51', '10:22', '13:52', '14:52', '15:37', '17:25'];

  /*line 4 direction szpital*/
  var pkp4szpitalDif = ['7:30', '12:20'];
  var michalowskiego4szpitalDif = ['7:31', '12:21'];
  var matejki4szpitalDif = ['7:32', '12:22'];
  var skarszewska4szpitalDif = ['7:33', '12:23'];
  var kapliczna4szpitalDif = ['7:34', '12:24'];
  var galeria4szpitalDif = ['7:36', '12:26'];
  var roltex4szpitalDif = ['7:37', '12:27'];
  var klasztorna4szpitalDif = ['7:38', '12:28'];
  var wierzysko4szpitalDif = ['7:40'];
  var chojnickaklasztorna4szpitalDif = ['7:42', '12:32'];
  var cegielnia4szpitalDif = ['7:43', '12:33'];
  var staszica4szpitalDif = ['7:44', '12:34'];
  var konopnickiej4szpitalDif = ['7:45', '12:35'];
  var szydlice4szpitalDif = ['7:46', '12:36'];
  var malcuzynskiego4szpitalDif = ['7:47', '12:37'];

  /*line 5 direction Staszica*/
  var pkp5staszicaDif = ['6:35', '10:15', '15:55'];
  var dworcowa5staszicaDif = ['6:36', '10:16', '15:56'];
  var maja5staszicaDif = ['6:37', '10:17', '15:57'];
  var galeria5staszicaDif = ['6:39', '15:59'];
  var szopinskiego5staszicaDif = ['10:19'];
  var rozana5staszicaDif = ['10:22'];
  
  var szpital7mlynskaDif = ['7:03'];
  var szpital6pkpDif = ['12:35'];
 
  var dayTypeDif = "dni robocze";
};
