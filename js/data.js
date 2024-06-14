const now = new Date(); 
const weekDay = now.getDay();
const monthDay = now.getDate();
const month = now.getMonth();
var holiday = monthDay.toString() + month.toString();

if (weekDay > 0 && weekDay < 6) {
  /*line 1 direction pkp*/
  var szpital1pkp = ['5:15', '6:00', '6:50', '7:20', '7:50', '8:20', '9:00', '9:50',	'11:50',	'12:50',	'13:30', '14:10',	'14:50',	'15:20',	'16:25',	'16:55',	'18:10',	'19:10'];
  var malcuzynskiego1pkp = [ '5:16', '6:01', '6:51', '7:21', '7:51', '8:21', '9:01', '9:51', '11:51', '12:51', '13:31', '14:11', '14:51', '15:21', '16:26', '16:56', '18:11', '19:11'];
  var szydlice1pkp = ['5:17',	 '6:02',	 '6:52',	 '7:22',	 '7:52',	 '8:22',	 '9:02',	 '9:52',	'11:52',	'12:52',	'13:32',	'14:12',	'14:52',	'15:22',	'16:27',	'16:57',	'18:12',	'19:12'];
  var konopnickiej1pkp = ['5:18',	 '6:03',	 '6:53',	 '7:23',	 '7:53',	 '8:23',	 '9:03',	 '9:53',	'11:53',	'12:53',	'13:33',	'14:13',	'14:53',	'15:23',	'16:28',	'16:58',	'18:13',	'19:13'];
  var rozana1pkp = [ '5:19',	 '6:04',	 '6:54',	 '7:24',	 '7:54',	 '8:24',	 '9:04',	 '9:54',	'11:54',	'12:54',	'13:34',	'14:14',	'14:54',	'15:24',	'16:29',	'16:59',	'18:14',	'19:14'];
  var sikorskiego1pkp = [ '5:20',	 '6:05',	 '6:55',	 '7:25',	 '7:55',	 '8:25',	 '9:05',	 '9:55',	'11:55',	'12:55',	'13:35',	'14:15',	'14:55',	'15:25',	'16:30',	'17:00',	'18:15',	'19:15'];
  var strzelecka1pkp = [ '5:21',	 '6:06',	 '6:56',	 '7:26',	 '7:56',	 '8:26',	 '9:06',	 '9:56',	'11:56',	'12:56',	'13:36',	'14:16',	'14:56',	'15:26',	'16:31',	'17:01',	'18:16',	'19:16'];
  var rogali1pkp = [ '5:22',	 '6:07',	 '6:57',	 '7:27',	 '7:57',	 '8:27',	 '9:07',	 '9:57',	'11:57',	'12:57',	'13:37',	'14:17',	'14:57',	'15:27',	'16:32',	'17:02',	'18:17',	'19:17'];
  var marchewicza1pkp = [ '5:23',	 '6:08',	 '6:58',	 '7:28',	 '7:58',	 '8:28',	 '9:08',	 '9:58',	'11:58',	'12:58',	'13:38',	'14:18',	'14:58',	'15:28',	'16:33',	'17:03',	'18:18',	'19:18'];
  var bolewskiej1pkp = ['5:24',	 '6:09',	 '6:59',	 '7:29',	 '7:59',	 '8:29',	 '9:09',	 '9:59',	'11:59',	'12:59',	'13:39',	'14:19',	'14:59',	'15:29',	'16:34',	'17:04',	'18:19',	'19:19'];
  var szkolna1pkp = ['5:25',	 '6:10',	 '7:00',	 '7:30',	 '8:00',	 '8:30',	 '9:10',	 '10:00',	'12:00',	'13:00',	'13:40',	'14:20',	'15:00',	'15:30',	'16:35',	'17:05',	'18:20',	'19:20'];
  var heykego1pkp = [ '5:26',	 '6:11',	 '7:01',	 '7:31',	 '8:01',	 '8:31',	 '9:11',	'10:01',	'12:01',	'13:01',	'13:41',	'14:21',	'15:01',	'15:31',	'16:36',	'17:06',	'18:21',	'19:21'];
  var kartuska1pkp = [ '5:27',	 '6:12',	 '7:02',	 '7:32',	 '8:02',	 '8:32',	 '9:12',	'10:02',	'12:02',	'13:02',	'13:42',	'14:22',	'15:02',	'15:32',	'16:37',	'17:07',	'18:22',	'19:22'];
  var szopinskiego1pkp = [ '5:29',	 '6:14',	 '7:04',	 '7:34',	 '8:04',	 '8:34',	 '9:14',	'10:04',	'12:04',	'13:04',	'13:44',	'14:24',	'15:04',	'15:34',	'16:39',	'17:09',	'18:24',	'19:24'];
  var mlynska1pkp = [ '5:30',	 '6:15',	 '7:05',	 '7:35',	 '8:05',	 '8:35',	 '9:15',	'10:05',	'12:05',	'13:05',	'13:45',	'14:25',	'15:05',	'15:35',	'16:40',	'17:10',	'18:25',	'19:25'];
  var galeria1pkp = [ '5:32',	 '6:17',	 '7:07',	 '7:37',	 '8:07',	 '8:37',	 '9:17',	'10:07',	'12:07',	'13:07',	'13:47',	'14:27',	'15:07',	'15:37',	'16:42',	'17:12',	'18:27',	'19:27'];
  var kapliczna1pkp = [ '5:34',	 '6:19',	 '7:09',	 '7:39',	 '8:09',	 '8:39',	 '9:19',	'10:09',	'12:09',	'13:09',	'13:49',	'14:29',	'15:09',	'15:39',	'16:44',	'17:14',	'18:29',	'19:29'];
  var skarszewska1pkp = [ '5:35',	 '6:20',	 '7:10',	 '7:40',	 '8:10',	 '8:40',	 '9:20',	'10:10',	'12:10',	'13:10',	'13:50',	'14:30',	'15:10',	'15:40',	'16:45',	'17:15',	'18:30',	'19:30'];
  var matejki1pkp = [ '5:36',	 '6:21',	 '7:11',	 '7:41',	 '8:11',	 '8:41',	 '9:21',	'10:11',	'12:11',	'13:11',	'13:51',	'14:31',	'15:11',	'15:41',	'16:46',	'17:16',	'18:31',	'19:31'];
  var michalowskiego1pkp = [ '5:37',	 '6:22',	 '7:12',	 '7:42',	 '8:12',	 '8:42',	 '9:22',	'10:12',	'12:12',	'13:12',	'13:52',	'14:32',	'15:12',	'15:42',	'16:47',	'17:17',	'18:32',	'19:32'];

  /*line 2 direction towarowa*/
  var pkp2pkp = ['6:55',	'14:35',	'15:35'];
  var michalowskiego2pkp = ['6:56',	'14:36',	'15:36'];
  var kossaka2pkp =['6:57',	'14:37',	'15:37'];
  var tatarkiewicza2pkp = ['6:59',	'14:39',	'15:39'];
  var michalowicza2pkp = ['7:00',	'14:40',	'15:40'];
  var stwoszatowarowa2pkp =['7:01',	'14:41',	'15:41'];
  var przemyslowa2pkp =[ '7:03',	'14:43',	'15:43'];

  /*line 3 direction pkp*/
  var szpital3pkp = [ '8:25', '9:25',	'10:25',	'11:25',	'12:25',	'13:25',	'16:00',	'17:40'];
  var malcuzynskiego3pkp = [ '8:26',	 '9:26',	'10:26',	'11:26',	'12:26',	'13:26',	'16:01',	'17:41'];
  var szydlice3pkp = [ '8:27',	 '9:27',	'10:27',	'11:27',	'12:27',	'13:27',	'16:02',	'17:42'];
  var konopnickiej3pkp = [ '8:28',	 '9:28',	'10:28',	'11:28',	'12:28',	'13:28',	'16:03',	'17:43'];
  var staszica3pkp = [ '8:29',	 '9:29',	'10:29',	'11:29',	'12:29',	'13:29',	'16:04',	'17:44'];
  var marca3pkp = [ '8:30',	 '9:30',	'10:30',	'11:30',	'12:30',	'13:30',	'16:05',	'17:45'];
  var galeria3pkp = [ '8:32',	 '9:32',	'10:32',	'11:32',	'12:32',	'13:32',	'16:07',	'17:47'];
  var maja3pkp = [ '8:33',	 '9:33',	'10:33',	'11:33',	'12:33',	'13:33',	'16:08',	'17:48'];
  var dworcowa3pkp = [ '8:34',	 '9:34',	'10:34',	'11:34',	'12:34',	'13:34',	'16:09',	'17:49'];
  
  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpital = [ '5:15',	 '6:20',	 '6:50',	 '7:20',	 '7:50',	 '8:20',	 '9:20',		'11:20',	'12:20',	'13:00',	'13:40',	'14:20',	'15:00',	'15:20',	'16:00',	'16:30',	'17:10',	'17:40',	'18:10',	'18:40',	'19:50'];
  var michalowskiego1szpital = [ '5:16',	 '6:21',	 '6:51',	 '7:21',	 '7:51',	 '8:21',	 '9:21',		'11:21',	'12:21',	'13:01',	'13:41',	'14:21',	'15:01',	'15:21',	'16:01',	'16:31',	'17:11',	'17:41',	'18:11',	'18:41',	'19:51'];
  var matejki1szpital = [ '5:17',	 '6:22',	 '6:52',	 '7:22',	 '7:52',	 '8:22',	 '9:22',		'11:22',	'12:22',	'13:02',	'13:42',	'14:22',	'15:02',	'15:22',	'16:02',	'16:32',	'17:12',	'17:42',	'18:12',	'18:42',	'19:52'];
  var skarszewska1szpital = [ '5:18',	 '6:23',	 '6:53',	 '7:23',	 '7:53',	 '8:23',	 '9:23',		'11:23',	'12:23',	'13:03',	'13:43',	'14:23',	'15:03',	'15:23',	'16:03',	'16:33',	'17:13',	'17:43',	'18:13',	'18:43',	'19:53'];
  var kapliczna1szpital = [ '5:19',	 '6:24',	 '6:54',	 '7:24',	 '7:54',	 '8:24',	 '9:24',		'11:24',	'12:24',	'13:04',	'13:44',	'14:24',	'15:04',	'15:24',	'16:04',	'16:34',	'17:14',	'17:44',	'18:14',	'18:44',	'19:54'];
  var mlynska1szpital = [ '5:21',	 '6:26',	 '6:56',	 '7:26',	 '7:56',	 '8:26',	 '9:26',		'11:26',	'12:26',	'13:06',	'13:46',	'14:26',	'15:06',	'15:26',	'16:06',	'16:36',	'17:16',	'17:46',	'18:16',	'18:46',	'19:56'];
  var galeria1szpital = [ '5:23',	 '6:28',	 '6:58',	 '7:28',	 '7:58',	 '8:28',	 '9:28',		'11:28',	'12:28',	'13:08',	'13:48',	'14:28',	'15:08',	'15:28',	'16:08',	'16:38',	'17:18',	'17:48',	'18:18',	'18:48',	'19:58'];
  var szopinskiego1szpital = [ '5:25',	 '6:30',	 '7:00',	 '7:30',	 '8:00',	 '8:30',	 '9:30',		'11:30',	'12:30',	'13:10',	'13:50',	'14:30',	'15:10',	'15:30',	'16:10',	'16:40',	'17:20',	'17:50',	'18:20',	'18:50',	'20:00'];
  var kartuska1szpital = [ '5:27', '6:32', '7:02', '7:32', '8:02', '8:32', '9:32',	'11:32',	'12:32',	'13:12',	'13:52',	'14:32',	'15:12',	'15:32',	'16:12',	'16:42',	'17:22',	'17:52',	'18:22',	'18:52',	'20:02',];
  var heykego1szpital = ['5:28', '6:33', '7:03', '7:33', '8:03', '8:33', '9:33',	'11:33',	'12:33',	'13:13',	'13:53',	'14:33',	'15:13',	'15:33',	'16:13',	'16:43',	'17:23',	'17:53',	'18:23',	'18:53',	'20:03'];
  var szkolna1szpital =   ['5:30', '6:35', '7:05', '7:35', '8:05', '8:35', '9:35', 	'11:35',	'12:35',	'13:15',	'13:55',	'14:35',	'15:15',	'15:35',	'16:15',	'16:45',	'17:25',	'17:55',	'18:25',	'18:55',	'20:05'];
  var bolewskiej1szpital =   ['5:31', '6:36', '7:06', '7:36', '8:06', '8:36', '9:36',	'11:36',	'12:36',	'13:16',	'13:56',	'14:36',	'15:16',	'15:36',	'16:16',	'16:46',	'17:26',	'17:56',	'18:26',	'18:56',	'20:06'];
  var marchewicza1szpital =   ['5:32', '6:37', '7:07', '7:37', '8:07', '8:37', '9:37',	'11:37',	'12:37',	'13:17',	'13:57',	'14:37',	'15:17',	'15:37',	'16:17',	'16:47',	'17:27',	'17:57',	'18:27',	'18:57',	'20:07'];
  var rogali1szpital =   ['5:33', '6:38', '7:08', '7:38', '8:08', '8:38', '9:38',	'11:38',	'12:38',	'13:18',	'13:58',	'14:38',	'15:18',	'15:38',	'16:18',	'16:48',	'17:28',	'17:58',	'18:28',	'18:58',	'20:08'];
  var strzelecka1szpital =   ['5:34', '6:39', '7:09', '7:39', '8:09', '8:39', '9:39',	'11:39',	'12:39',	'13:19',	'13:59',	'14:39',	'15:19',	'15:39',	'16:19',	'16:49',	'17:29',	'17:59',	'18:29',	'18:59',	'20:09'];
  var sikorskiego1szpital =   ['5:35', '6:40', '7:10', '7:40', '8:10', '8:40', '9:40',	'11:40',	'12:40',	'13:20',	'14:00',	'14:40',	'15:20',	'15:40',	'16:20',	'16:50',	'17:30',	'18:00',	'18:30',	'19:00',	'20:10'];
  var rozana1szpital =   ['5:36', '6:41', '7:11', '7:41', '8:11', '8:41', '9:41',	'11:41',	'12:41',	'13:21',	'14:01',	'14:41',	'15:21',	'15:41',	'16:21',	'16:51',	'17:31',	'18:01',	'18:31',	'19:01',	'20:11'];
  var konopnickiej1szpital =   ['5:37', '6:42', '7:12', '7:42', '8:12', '8:42', '9:42',	'11:42',	'12:42',	'13:22',	'14:02',	'14:42',	'15:22',	'15:42',	'16:22',	'16:52',	'17:32',	'18:02',	'18:32',	'19:02',	'20:12'];
  var szydlice1szpital =   ['5:38', '6:43', '7:13', '7:43', '8:13', '8:43', '9:43',	'11:43',	'12:43',	'13:23',	'14:03',	'14:43',	'15:23',	'15:43',	'16:23',	'16:53',	'17:33',	'18:03',	'18:33',	'19:03',	'20:13'];
  var malcuzynskiego1szpital =   ['5:39', '6:44', '7:14', '7:44', '8:14', '8:44', '9:44',	'11:44',	'12:44',	'13:24',	'14:04',	'14:44',	'15:24',	'15:44',	'16:24',	'16:54',	'17:34',	'18:04',	'18:34',	'19:04',	'20:14'];

  /*line 2 direction szpital*/
  var towarowa2szpital =['6:37',	 '7:07',	'14:47',	'15:47'];
  var rolnicza2szpital =['6:38',	 '7:08',	'14:48',	'15:48'];
  var stwoszatowarowa2szpital =['6:39',	 '7:09',	'14:49', '15:49'];
  var michalowicza2szpital =['6:40',	 '7:10',	'14:50', '15:50'];
  var tatarkiewicza2szpital =['6:41',	 '7:11',	'14:51', '15:51'];
  var kossaka2szpital =['6:43',	 '7:13',	'14:53', '15:53'];
  var michalowskiego2szpital = ['6:44',	 '7:14',	'14:54', '15:54'];
  var pkp2szpital = ['6:45',	 '7:15',	'14:55', '15:55'];
  
  /*line 3 direction szpital*/
  var pkp3szpital = ['8:55',	 '9:55',	'10:55',	'11:55',	'12:55',	'13:55'];
  var dworcowa3szpital = ['8:56',	 '9:56',	'10:56',	'11:56',	'12:56',	'13:56'];
  var maja3szpital = ['8:57',	 '9:57',	'10:57',	'11:57',	'12:57',	'13:57'];
  var mlynska3szpital = ['8:59',	 '9:59',	'10:59',	'11:59',	'12:59',	'13:59'];
  var marca3szpital = ['9:01',	'10:01',	'11:01',	'12:01',	'13:01',	'14:01'];
  var staszica3szpital = ['9:02',	'10:02',	'11:02',	'12:02',	'13:02',	'14:02'];
  var konopnickiej3szpital = ['9:03',	'10:03',	'11:03',	'12:03',	'13:03',	'14:03'];
  var szydlice3szpital = ['9:04',	'10:04',	'11:04',	'12:04',	'13:04',	'14:04'];
  var malcuzynskiego3szpital = ['9:05',	'10:05',	'11:05',	'12:05',	'13:05',	'14:05'];
  
  var dayType = "dni robocze";
  
  /*different day type*/
  /*line 1 direction pkp*/
  var szpital1pkpDif =   ['6:50',	 '7:25',	 '8:55',	 '9:55',	'12:50',	'14:10',	'14:50',	'16:05',	'19:10'];
  var malcuzynskiego1pkpDif =   ['6:51',	 '7:26',	 '8:56',	 '9:56',	'12:51',	'14:11',	'14:51',	'16:06',	'19:11'];
  var szydlice1pkpDif =     ['6:52',	 '7:27',	 '8:57',	 '9:57',	'12:52',	'14:12',	'14:52',	'16:07',	'19:12'];
  var konopnickiej1pkpDif =   ['6:53',	 '7:28',	 '8:58',	 '9:58',	'12:53',	'14:13',	'14:53',	'16:08',	'19:13'];
  var rozana1pkpDif =   ['6:54',	 '7:29',	 '8:59',	 '9:59',	'12:54',	'14:14',	'14:54',	'16:09',	'19:14'];
  var sikorskiego1pkpDif =   ['6:55',	 '7:30',	 '9:00',	'10:00',	'12:55',	'14:15',	'14:55',	'16:10',	'19:15'];
  var strzelecka1pkpDif =   ['6:56',	 '7:31',	 '9:01',	'10:01',	'12:56',	'14:16',	'14:56',	'16:11',	'19:16'];
  var rogali1pkpDif =   ['6:57',	 '7:32',	 '9:02',	'10:02',	'12:57',	'14:17',	'14:57',	'16:12',	'19:17'];
  var marchewicza1pkpDif =   ['6:58',	 '7:33',	 '9:03',	'10:03',	'12:58',	'14:18',	'14:58',	'16:13',	'19:18'];
  var bolewskiej1pkpDif =   ['6:59',	 '7:34',	 '9:04',	'10:04',	'12:59',	'14:19',	'14:59',	'16:14',	'19:19'];
  var szkolna1pkpDif =   ['7:00',	 '7:35',	 '9:05',	'10:05',	'13:00',	'14:20',	'15:00',	'16:15',	'19:20'];
  var heykego1pkpDif =   ['7:01',	 '7:36',	 '9:06',	'10:06',		'13:01',	'14:21',	'15:01',	'16:16',	'19:21'];
  var kartuska1pkpDif =   ['7:02',	 '7:37',	 '9:07',	'10:07',	'13:02',	'14:22',	'15:02',	'16:17',	'19:22'];
  var szopinskiego1pkpDif =   ['7:04',	 '7:39',	 '9:09',	'10:09',	'13:04',	'14:24',	'15:04',	'16:19',	'19:24'];
  var mlynska1pkpDif =   ['7:05',	 '7:40',	 '9:10',	'10:10',	'13:05',	'14:25',	'15:05',	'16:20',	'19:25'];
  var galeria1pkpDif =   ['7:07',	 '7:42',	 '9:12',	'10:12',	'13:07',	'14:27',	'15:07',	'16:22',	'19:27'];
  var kapliczna1pkpDif =   ['7:09',	 '7:44',	 '9:14',	'10:14',	'13:09',	'14:29',	'15:09',	'16:24',	'19:29'];
  var skarszewska1pkpDif =   ['7:10',	 '7:45',	 '9:15',	'10:15',	'13:10',	'14:30',	'15:10',	'16:25',	'19:30'];
  var matejki1pkpDif =   ['7:11',	 '7:46',	 '9:16',	'10:16',	'13:11',	'14:31',	'15:11',	'16:26',	'19:31'];
  var michalowskiego1pkpDif =   ['7:12',	 '7:47',	 '9:17',	'10:17',	'13:12',	'14:32',	'15:12',	'16:27',	'19:32'];
  
  /*line 3 direction pkp*/
  
  var szpital3pkpDif =   ['11:15',	'13:00',	'17:00',	'18:00'];
  var malcuzynskiego3pkpDif = ['11:16',	'13:01',	'17:01',	'18:01'];
  var szydlice3pkpDif = ['11:17',	'13:02',	'17:02',	'18:02'];
  var konopnickiej3pkpDif = ['11:18',	'13:03',	'17:03',	'18:03'];
  var staszica3pkpDif = ['11:19',	'13:04',	'17:04',	'18:04'];
  var marca3pkpDif = ['11:20',	'13:05',	'17:05',	'18:05'];
  var galeria3pkpDif = ['11:22',	'13:07',	'17:07',	'18:07'];
  var maja3pkpDif = ['11:23',	'13:08',	'17:08',	'18:08'];
  var dworcowa3pkpDif = ['11:24',	'13:09',	'17:09',	'18:09'];

  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpitalDif = ['6:20',	 '8:20',	 '9:25',	'10:50',	'11:35',	'12:35',	'13:35',	'15:35',	'16:35',	'17:35',	'18:30'];
  var michalowskiego1szpitalDif = ['6:21',	 '8:21',	 '9:26',	'10:51',	'11:36',	'12:36',	'13:36',	'15:36',	'16:36',	'17:36',	'18:31'];
  var matejki1szpitalDif = ['6:22',	 '8:22',	 '9:27',	'10:52',	'11:37',	'12:37',	'13:37',	'15:37',	'16:37',	'17:37',	'18:32'];
  var skarszewska1szpitalDif = ['6:23',	 '8:23',	 '9:28',	'10:53',	'11:38',	'12:38',	'13:38',	'15:38',	'16:38',	'17:38',	'18:33'];
  var kapliczna1szpitalDif = ['6:24',	 '8:24',	 '9:29',	'10:54',	'11:39',	'12:39',	'13:39',	'15:39',	'16:39',	'17:39',	'18:34'];
  var mlynska1szpitalDif = ['6:26',	 '8:26',	 '9:31',	'10:56',	'11:41',	'12:41',	'13:41',	'15:41',	'16:41',	'17:41',	'18:36'];
  var galeria1szpitalDif = ['6:28',	 '8:28',	 '9:33',	'10:58',	'11:43',	'12:43',	'13:43',	'15:43',	'16:43',	'17:43',	'18:38'];
  var szopinskiego1szpitalDif = ['6:30',	 '8:30',	 '9:35',	'11:00',	'11:45',	'12:45',	'13:45',	'15:45',	'16:45',	'17:45',	'18:40'];
  var kartuska1szpitalDif = ['6:32',	 '8:32',	 '9:37',	'11:02',	'11:47',	'12:47',	'13:47',	'15:47',	'16:47',	'17:47',	'18:42'];
  var heykego1szpitalDif = ['6:33',	 '8:33',	 '9:38',	'11:03',	'11:48',	'12:48',	'13:48',	'15:48',	'16:48',	'17:48',	'18:43'];
  var szkolna1szpitalDif = ['6:35',	 '8:35',	 '9:40',	'11:05',	'11:50',	'12:50',	'13:50',	'15:50',	'16:50',	'17:50',	'18:45'];
  var bolewskiej1szpitalDif =   ['6:36',	 '8:36',	 '9:41',	'11:06',	'11:51',	'12:51',	'13:51',	'15:51',	'16:51',	'17:51',	'18:46'];
  var marchewicza1szpitalDif =   ['6:37',	 '8:37',	 '9:42',	'11:07',	'11:52',	'12:52',	'13:52',	'15:52',	'16:52',	'17:52',	'18:47'];
  var rogali1szpitalDif =   ['6:38',	 '8:38',	 '9:43',	'11:08',	'11:53',	'12:53',	'13:53',	'15:53',	'16:53',	'17:53',	'18:48'];
  var strzelecka1szpitalDif =   ['6:39',	 '8:39',	 '9:44',	'11:09',	'11:54',	'12:54',	'13:54',	'15:54',	'16:54',	'17:54',	'18:49'];
  var sikorskiego1szpitalDif =   ['6:40',	 '8:40',	 '9:45',	'11:10',	'11:55',	'12:55',	'13:55',	'15:55',	'16:55',	'17:55',	'18:50'];
  var rozana1szpitalDif =   ['6:41',	 '8:41',	 '9:46',	'11:11',	'11:56',	'12:56',	'13:56',	'15:56',	'16:56',	'17:56',	'18:51'];
  var konopnickiej1szpitalDif =   ['6:42',	 '8:42',	 '9:47',	'11:12',	'11:57',	'12:57',	'13:57',	'15:57',	'16:57',	'17:57',	'18:52'];
  var szydlice1szpitalDif =   ['6:43',	 '8:43',	 '9:48',	'11:13',	'11:58',	'12:58',	'13:58',	'15:58',	'16:58',	'17:58',	'18:53'];
  var malcuzynskiego1szpitalDif = ['6:44',	 '8:44',	 '9:49',	'11:14',	'11:59',	'12:59',	'13:59',	'15:59',	'16:59',	'17:59',	'18:54'];

  /*line 3 direction szpital*/
  var pkp3szpitalDif = ['7:14',	'14:34'];
  var dworcowa3szpitalDif =  ['7:15',	'14:35'];
  var maja3szpitalDif =  ['7:16',	'14:36'];
  var mlynska3szpitalDif = ['7:18',	'14:38'];
  var marca3szpitalDif = ['7:20',	'14:40'];
  var staszica3szpitalDif = ['7:21',	'14:41'];
  var konopnickiej3szpitalDif = ['7:22',	'14:42'];
  var szydlice3szpitalDif = ['7:23',	'14:43'];
  var malcuzynskiego3szpitalDif = ['7:24',	'14:44'];  
    
  var dayTypeDif = "soboty, niedziele i święta";
};

if (weekDay === 0 || weekDay === 6 || holiday === "10" || holiday === "60" || holiday === "93" || holiday === "103" || holiday === "14"
    || holiday === "34" || holiday === "85" || holiday === "157" || holiday === "110" || holiday === "1110"
    || holiday === "2511" || holiday === "2611") {
  
  /*line 1 direction pkp*/
  var szpital1pkp =   ['6:50',	 '7:25',	 '8:55',	 '9:55',	'12:50',	'14:10',	'14:50',	'16:05',	'19:10'];
  var malcuzynskiego1pkp =   ['6:51',	 '7:26',	 '8:56',	 '9:56',	'12:51',	'14:11',	'14:51',	'16:06',	'19:11'];
  var szydlice1pkp =     ['6:52',	 '7:27',	 '8:57',	 '9:57',	'12:52',	'14:12',	'14:52',	'16:07',	'19:12'];
  var konopnickiej1pkp =   ['6:53',	 '7:28',	 '8:58',	 '9:58',	'12:53',	'14:13',	'14:53',	'16:08',	'19:13'];
  var rozana1pkp =   ['6:54',	 '7:29',	 '8:59',	 '9:59',	'12:54',	'14:14',	'14:54',	'16:09',	'19:14'];
  var sikorskiego1pkp =   ['6:55',	 '7:30',	 '9:00',	'10:00',	'12:55',	'14:15',	'14:55',	'16:10',	'19:15'];
  var strzelecka1pkp =   ['6:56',	 '7:31',	 '9:01',	'10:01',	'12:56',	'14:16',	'14:56',	'16:11',	'19:16'];
  var rogali1pkp =   ['6:57',	 '7:32',	 '9:02',	'10:02',	'12:57',	'14:17',	'14:57',	'16:12',	'19:17'];
  var marchewicza1pkp =   ['6:58',	 '7:33',	 '9:03',	'10:03',	'12:58',	'14:18',	'14:58',	'16:13',	'19:18'];
  var bolewskiej1pkp =   ['6:59',	 '7:34',	 '9:04',	'10:04',	'12:59',	'14:19',	'14:59',	'16:14',	'19:19'];
  var szkolna1pkp =   ['7:00',	 '7:35',	 '9:05',	'10:05',	'13:00',	'14:20',	'15:00',	'16:15',	'19:20'];
  var heykego1pkp =   ['7:01',	 '7:36',	 '9:06',	'10:06',		'13:01',	'14:21',	'15:01',	'16:16',	'19:21'];
  var kartuska1pkp =   ['7:02',	 '7:37',	 '9:07',	'10:07',	'13:02',	'14:22',	'15:02',	'16:17',	'19:22'];
  var szopinskiego1pkp =   ['7:04',	 '7:39',	 '9:09',	'10:09',	'13:04',	'14:24',	'15:04',	'16:19',	'19:24'];
  var mlynska1pkp =   ['7:05',	 '7:40',	 '9:10',	'10:10',	'13:05',	'14:25',	'15:05',	'16:20',	'19:25'];
  var galeria1pkp =   ['7:07',	 '7:42',	 '9:12',	'10:12',	'13:07',	'14:27',	'15:07',	'16:22',	'19:27'];
  var kapliczna1pkp =   ['7:09',	 '7:44',	 '9:14',	'10:14',	'13:09',	'14:29',	'15:09',	'16:24',	'19:29'];
  var skarszewska1pkp =   ['7:10',	 '7:45',	 '9:15',	'10:15',	'13:10',	'14:30',	'15:10',	'16:25',	'19:30'];
  var matejki1pkp =   ['7:11',	 '7:46',	 '9:16',	'10:16',	'13:11',	'14:31',	'15:11',	'16:26',	'19:31'];
  var michalowskiego1pkp =   ['7:12',	 '7:47',	 '9:17',	'10:17',	'13:12',	'14:32',	'15:12',	'16:27',	'19:32'];
  
  /*line 3 direction pkp*/
  
  var szpital3pkp =   ['11:15',	'13:00',	'17:00',	'18:00'];
  var malcuzynskiego3pkp = ['11:16',	'13:01',	'17:01',	'18:01'];
  var szydlice3pkp = ['11:17',	'13:02',	'17:02',	'18:02'];
  var konopnickiej3pkp = ['11:18',	'13:03',	'17:03',	'18:03'];
  var staszica3pkp = ['11:19',	'13:04',	'17:04',	'18:04'];
  var marca3pkp = ['11:20',	'13:05',	'17:05',	'18:05'];
  var galeria3pkp = ['11:22',	'13:07',	'17:07',	'18:07'];
  var maja3pkp = ['11:23',	'13:08',	'17:08',	'18:08'];
  var dworcowa3pkp = ['11:24',	'13:09',	'17:09',	'18:09'];

  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpital = ['6:20',	 '8:20',	 '9:25',	'10:50',	'11:35',	'12:35',	'13:35',	'15:35',	'16:35',	'17:35',	'18:30'];
  var michalowskiego1szpital = ['6:21',	 '8:21',	 '9:26',	'10:51',	'11:36',	'12:36',	'13:36',	'15:36',	'16:36',	'17:36',	'18:31'];
  var matejki1szpital = ['6:22',	 '8:22',	 '9:27',	'10:52',	'11:37',	'12:37',	'13:37',	'15:37',	'16:37',	'17:37',	'18:32'];
  var skarszewska1szpital = ['6:23',	 '8:23',	 '9:28',	'10:53',	'11:38',	'12:38',	'13:38',	'15:38',	'16:38',	'17:38',	'18:33'];
  var kapliczna1szpital = ['6:24',	 '8:24',	 '9:29',	'10:54',	'11:39',	'12:39',	'13:39',	'15:39',	'16:39',	'17:39',	'18:34'];
  var mlynska1szpital = ['6:26',	 '8:26',	 '9:31',	'10:56',	'11:41',	'12:41',	'13:41',	'15:41',	'16:41',	'17:41',	'18:36'];
  var galeria1szpital = ['6:28',	 '8:28',	 '9:33',	'10:58',	'11:43',	'12:43',	'13:43',	'15:43',	'16:43',	'17:43',	'18:38'];
  var szopinskiego1szpital = ['6:30',	 '8:30',	 '9:35',	'11:00',	'11:45',	'12:45',	'13:45',	'15:45',	'16:45',	'17:45',	'18:40'];
  var kartuska1szpital = ['6:32',	 '8:32',	 '9:37',	'11:02',	'11:47',	'12:47',	'13:47',	'15:47',	'16:47',	'17:47',	'18:42'];
  var heykego1szpital = ['6:33',	 '8:33',	 '9:38',	'11:03',	'11:48',	'12:48',	'13:48',	'15:48',	'16:48',	'17:48',	'18:43'];
  var szkolna1szpital = ['6:35',	 '8:35',	 '9:40',	'11:05',	'11:50',	'12:50',	'13:50',	'15:50',	'16:50',	'17:50',	'18:45'];
  var bolewskiej1szpital =   ['6:36',	 '8:36',	 '9:41',	'11:06',	'11:51',	'12:51',	'13:51',	'15:51',	'16:51',	'17:51',	'18:46'];
  var marchewicza1szpital =   ['6:37',	 '8:37',	 '9:42',	'11:07',	'11:52',	'12:52',	'13:52',	'15:52',	'16:52',	'17:52',	'18:47'];
  var rogali1szpital =   ['6:38',	 '8:38',	 '9:43',	'11:08',	'11:53',	'12:53',	'13:53',	'15:53',	'16:53',	'17:53',	'18:48'];
  var strzelecka1szpital =   ['6:39',	 '8:39',	 '9:44',	'11:09',	'11:54',	'12:54',	'13:54',	'15:54',	'16:54',	'17:54',	'18:49'];
  var sikorskiego1szpital =   ['6:40',	 '8:40',	 '9:45',	'11:10',	'11:55',	'12:55',	'13:55',	'15:55',	'16:55',	'17:55',	'18:50'];
  var rozana1szpital =   ['6:41',	 '8:41',	 '9:46',	'11:11',	'11:56',	'12:56',	'13:56',	'15:56',	'16:56',	'17:56',	'18:51'];
  var konopnickiej1szpital =   ['6:42',	 '8:42',	 '9:47',	'11:12',	'11:57',	'12:57',	'13:57',	'15:57',	'16:57',	'17:57',	'18:52'];
  var szydlice1szpital =   ['6:43',	 '8:43',	 '9:48',	'11:13',	'11:58',	'12:58',	'13:58',	'15:58',	'16:58',	'17:58',	'18:53'];
  var malcuzynskiego1szpital = ['6:44',	 '8:44',	 '9:49',	'11:14',	'11:59',	'12:59',	'13:59',	'15:59',	'16:59',	'17:59',	'18:54'];

  /*line 3 direction szpital*/
  var pkp3szpital = ['7:14',	'14:34'];
  var dworcowa3szpital =  ['7:15',	'14:35'];
  var maja3szpital =  ['7:16',	'14:36'];
  var mlynska3szpital = ['7:18',	'14:38'];
  var marca3szpital = ['7:20',	'14:40'];
  var staszica3szpital = ['7:21',	'14:41'];
  var konopnickiej3szpital = ['7:22',	'14:42'];
  var szydlice3szpital = ['7:23',	'14:43'];
  var malcuzynskiego3szpital = ['7:24',	'14:44'];  
  
  var dayType = "soboty, niedziele i święta";

  /*different day type*/
    /*line 1 direction pkp*/
    var szpital1pkpDif = ['5:15', '6:00', '6:50', '7:20', '7:50', '8:20', '9:00', '9:50',	'11:50',	'12:50',	'13:30', '14:10',	'14:50',	'15:20',	'16:25',	'16:55',	'18:10',	'19:10'];
    var malcuzynskiego1pkpDif = [ '5:16', '6:01', '6:51', '7:21', '7:51', '8:21', '9:01', '9:51', '11:51', '12:51', '13:31', '14:11', '14:51', '15:21', '16:26', '16:56', '18:11', '19:11'];
    var szydlice1pkpDif = ['5:17',	 '6:02',	 '6:52',	 '7:22',	 '7:52',	 '8:22',	 '9:02',	 '9:52',	'11:52',	'12:52',	'13:32',	'14:12',	'14:52',	'15:22',	'16:27',	'16:57',	'18:12',	'19:12'];
    var konopnickiej1pkpDif = ['5:18',	 '6:03',	 '6:53',	 '7:23',	 '7:53',	 '8:23',	 '9:03',	 '9:53',	'11:53',	'12:53',	'13:33',	'14:13',	'14:53',	'15:23',	'16:28',	'16:58',	'18:13',	'19:13'];
    var rozana1pkpDif = [ '5:19',	 '6:04',	 '6:54',	 '7:24',	 '7:54',	 '8:24',	 '9:04',	 '9:54',	'11:54',	'12:54',	'13:34',	'14:14',	'14:54',	'15:24',	'16:29',	'16:59',	'18:14',	'19:14'];
    var sikorskiego1pkpDif = [ '5:20',	 '6:05',	 '6:55',	 '7:25',	 '7:55',	 '8:25',	 '9:05',	 '9:55',	'11:55',	'12:55',	'13:35',	'14:15',	'14:55',	'15:25',	'16:30',	'17:00',	'18:15',	'19:15'];
    var strzelecka1pkpDif = [ '5:21',	 '6:06',	 '6:56',	 '7:26',	 '7:56',	 '8:26',	 '9:06',	 '9:56',	'11:56',	'12:56',	'13:36',	'14:16',	'14:56',	'15:26',	'16:31',	'17:01',	'18:16',	'19:16'];
    var rogali1pkpDif = [ '5:22',	 '6:07',	 '6:57',	 '7:27',	 '7:57',	 '8:27',	 '9:07',	 '9:57',	'11:57',	'12:57',	'13:37',	'14:17',	'14:57',	'15:27',	'16:32',	'17:02',	'18:17',	'19:17'];
    var marchewicza1pkpDif = [ '5:23',	 '6:08',	 '6:58',	 '7:28',	 '7:58',	 '8:28',	 '9:08',	 '9:58',	'11:58',	'12:58',	'13:38',	'14:18',	'14:58',	'15:28',	'16:33',	'17:03',	'18:18',	'19:18'];
    var bolewskiej1pkpDif = ['5:24',	 '6:09',	 '6:59',	 '7:29',	 '7:59',	 '8:29',	 '9:09',	 '9:59',	'11:59',	'12:59',	'13:39',	'14:19',	'14:59',	'15:29',	'16:34',	'17:04',	'18:19',	'19:19'];
    var szkolna1pkpDif = ['5:25',	 '6:10',	 '7:00',	 '7:30',	 '8:00',	 '8:30',	 '9:10',	 '10:00',	'12:00',	'13:00',	'13:40',	'14:20',	'15:00',	'15:30',	'16:35',	'17:05',	'18:20',	'19:20'];
    var heykego1pkpDif = [ '5:26',	 '6:11',	 '7:01',	 '7:31',	 '8:01',	 '8:31',	 '9:11',	'10:01',	'12:01',	'13:01',	'13:41',	'14:21',	'15:01',	'15:31',	'16:36',	'17:06',	'18:21',	'19:21'];
    var kartuska1pkpDif = [ '5:27',	 '6:12',	 '7:02',	 '7:32',	 '8:02',	 '8:32',	 '9:12',	'10:02',	'12:02',	'13:02',	'13:42',	'14:22',	'15:02',	'15:32',	'16:37',	'17:07',	'18:22',	'19:22'];
    var szopinskiego1pkpDif = [ '5:29',	 '6:14',	 '7:04',	 '7:34',	 '8:04',	 '8:34',	 '9:14',	'10:04',	'12:04',	'13:04',	'13:44',	'14:24',	'15:04',	'15:34',	'16:39',	'17:09',	'18:24',	'19:24'];
    var mlynska1pkpDif = [ '5:30',	 '6:15',	 '7:05',	 '7:35',	 '8:05',	 '8:35',	 '9:15',	'10:05',	'12:05',	'13:05',	'13:45',	'14:25',	'15:05',	'15:35',	'16:40',	'17:10',	'18:25',	'19:25'];
    var galeria1pkpDif = [ '5:32',	 '6:17',	 '7:07',	 '7:37',	 '8:07',	 '8:37',	 '9:17',	'10:07',	'12:07',	'13:07',	'13:47',	'14:27',	'15:07',	'15:37',	'16:42',	'17:12',	'18:27',	'19:27'];
    var kapliczna1pkpDif = [ '5:34',	 '6:19',	 '7:09',	 '7:39',	 '8:09',	 '8:39',	 '9:19',	'10:09',	'12:09',	'13:09',	'13:49',	'14:29',	'15:09',	'15:39',	'16:44',	'17:14',	'18:29',	'19:29'];
    var skarszewska1pkpDif = [ '5:35',	 '6:20',	 '7:10',	 '7:40',	 '8:10',	 '8:40',	 '9:20',	'10:10',	'12:10',	'13:10',	'13:50',	'14:30',	'15:10',	'15:40',	'16:45',	'17:15',	'18:30',	'19:30'];
    var matejki1pkpDif = [ '5:36',	 '6:21',	 '7:11',	 '7:41',	 '8:11',	 '8:41',	 '9:21',	'10:11',	'12:11',	'13:11',	'13:51',	'14:31',	'15:11',	'15:41',	'16:46',	'17:16',	'18:31',	'19:31'];
    var michalowskiego1pkpDif = [ '5:37',	 '6:22',	 '7:12',	 '7:42',	 '8:12',	 '8:42',	 '9:22',	'10:12',	'12:12',	'13:12',	'13:52',	'14:32',	'15:12',	'15:42',	'16:47',	'17:17',	'18:32',	'19:32'];
  
    /*line 2 direction towarowa*/
    var pkp2pkpDif = ['6:55',	'14:35',	'15:35'];
    var michalowskiego2pkpDif = ['6:56',	'14:36',	'15:36'];
    var kossaka2pkpDif =['6:57',	'14:37',	'15:37'];
    var tatarkiewicza2pkpDif = ['6:59',	'14:39',	'15:39'];
    var michalowicza2pkpDif = ['7:00',	'14:40',	'15:40'];
    var stwoszatowarowa2pkpDif =['7:01',	'14:41',	'15:41'];
    var przemyslowa2pkpDif =[ '7:03',	'14:43',	'15:43'];
  
    /*line 3 direction pkp*/
    var szpital3pkpDif = [ '8:25', '9:25',	'10:25',	'11:25',	'12:25',	'13:25',	'16:00',	'17:40'];
    var malcuzynskiego3pkpDif = [ '8:26',	 '9:26',	'10:26',	'11:26',	'12:26',	'13:26',	'16:01',	'17:41'];
    var szydlice3pkpDif = [ '8:27',	 '9:27',	'10:27',	'11:27',	'12:27',	'13:27',	'16:02',	'17:42'];
    var konopnickiej3pkpDif = [ '8:28',	 '9:28',	'10:28',	'11:28',	'12:28',	'13:28',	'16:03',	'17:43'];
    var staszica3pkpDif = [ '8:29',	 '9:29',	'10:29',	'11:29',	'12:29',	'13:29',	'16:04',	'17:44'];
    var marca3pkpDif = [ '8:30',	 '9:30',	'10:30',	'11:30',	'12:30',	'13:30',	'16:05',	'17:45'];
    var galeria3pkpDif = [ '8:32',	 '9:32',	'10:32',	'11:32',	'12:32',	'13:32',	'16:07',	'17:47'];
    var maja3pkpDif = [ '8:33',	 '9:33',	'10:33',	'11:33',	'12:33',	'13:33',	'16:08',	'17:48'];
    var dworcowa3pkpDif = [ '8:34',	 '9:34',	'10:34',	'11:34',	'12:34',	'13:34',	'16:09',	'17:49'];
    
    /*direction szpital*/
    /*line 1 direction szpital*/
    var pkp1szpitalDif = [ '5:15',	 '6:20',	 '6:50',	 '7:20',	 '7:50',	 '8:20',	 '9:20',		'11:20',	'12:20',	'13:00',	'13:40',	'14:20',	'15:00',	'15:20',	'16:00',	'16:30',	'17:10',	'17:40',	'18:10',	'18:40',	'19:50'];
    var michalowskiego1szpitalDif = [ '5:16',	 '6:21',	 '6:51',	 '7:21',	 '7:51',	 '8:21',	 '9:21',		'11:21',	'12:21',	'13:01',	'13:41',	'14:21',	'15:01',	'15:21',	'16:01',	'16:31',	'17:11',	'17:41',	'18:11',	'18:41',	'19:51'];
    var matejki1szpitalDif = [ '5:17',	 '6:22',	 '6:52',	 '7:22',	 '7:52',	 '8:22',	 '9:22',		'11:22',	'12:22',	'13:02',	'13:42',	'14:22',	'15:02',	'15:22',	'16:02',	'16:32',	'17:12',	'17:42',	'18:12',	'18:42',	'19:52'];
    var skarszewska1szpitalDif = [ '5:18',	 '6:23',	 '6:53',	 '7:23',	 '7:53',	 '8:23',	 '9:23',		'11:23',	'12:23',	'13:03',	'13:43',	'14:23',	'15:03',	'15:23',	'16:03',	'16:33',	'17:13',	'17:43',	'18:13',	'18:43',	'19:53'];
    var kapliczna1szpitalDif = [ '5:19',	 '6:24',	 '6:54',	 '7:24',	 '7:54',	 '8:24',	 '9:24',		'11:24',	'12:24',	'13:04',	'13:44',	'14:24',	'15:04',	'15:24',	'16:04',	'16:34',	'17:14',	'17:44',	'18:14',	'18:44',	'19:54'];
    var mlynska1szpitalDif = [ '5:21',	 '6:26',	 '6:56',	 '7:26',	 '7:56',	 '8:26',	 '9:26',		'11:26',	'12:26',	'13:06',	'13:46',	'14:26',	'15:06',	'15:26',	'16:06',	'16:36',	'17:16',	'17:46',	'18:16',	'18:46',	'19:56'];
    var galeria1szpitalDif = [ '5:23',	 '6:28',	 '6:58',	 '7:28',	 '7:58',	 '8:28',	 '9:28',		'11:28',	'12:28',	'13:08',	'13:48',	'14:28',	'15:08',	'15:28',	'16:08',	'16:38',	'17:18',	'17:48',	'18:18',	'18:48',	'19:58'];
    var szopinskiego1szpitalDif = [ '5:25',	 '6:30',	 '7:00',	 '7:30',	 '8:00',	 '8:30',	 '9:30',		'11:30',	'12:30',	'13:10',	'13:50',	'14:30',	'15:10',	'15:30',	'16:10',	'16:40',	'17:20',	'17:50',	'18:20',	'18:50',	'20:00'];
    var kartuska1szpitalDif = [ '5:27', '6:32', '7:02', '7:32', '8:02', '8:32', '9:32',	'11:32',	'12:32',	'13:12',	'13:52',	'14:32',	'15:12',	'15:32',	'16:12',	'16:42',	'17:22',	'17:52',	'18:22',	'18:52',	'20:02'];
    var heykego1szpitalDif = ['5:28', '6:33', '7:03', '7:33', '8:03', '8:33', '9:33',	'11:33',	'12:33',	'13:13',	'13:53',	'14:33',	'15:13',	'15:33',	'16:13',	'16:43',	'17:23',	'17:53',	'18:23',	'18:53',	'20:03'];
    var szkolna1szpitalDif =   ['5:30', '6:35', '7:05', '7:35', '8:05', '8:35', '9:35', 	'11:35',	'12:35',	'13:15',	'13:55',	'14:35',	'15:15',	'15:35',	'16:15',	'16:45',	'17:25',	'17:55',	'18:25',	'18:55',	'20:05'];
    var bolewskiej1szpitalDif =   ['5:31', '6:36', '7:06', '7:36', '8:06', '8:36', '9:36',	'11:36',	'12:36',	'13:16',	'13:56',	'14:36',	'15:16',	'15:36',	'16:16',	'16:46',	'17:26',	'17:56',	'18:26',	'18:56',	'20:06'];
    var marchewicza1szpitalDif =   ['5:32', '6:37', '7:07', '7:37', '8:07', '8:37', '9:37',	'11:37',	'12:37',	'13:17',	'13:57',	'14:37',	'15:17',	'15:37',	'16:17',	'16:47',	'17:27',	'17:57',	'18:27',	'18:57',	'20:07'];
    var rogali1szpitalDif =   ['5:33', '6:38', '7:08', '7:38', '8:08', '8:38', '9:38',	'11:38',	'12:38',	'13:18',	'13:58',	'14:38',	'15:18',	'15:38',	'16:18',	'16:48',	'17:28',	'17:58',	'18:28',	'18:58',	'20:08'];
    var strzelecka1szpitalDif =   ['5:34', '6:39', '7:09', '7:39', '8:09', '8:39', '9:39',	'11:39',	'12:39',	'13:19',	'13:59',	'14:39',	'15:19',	'15:39',	'16:19',	'16:49',	'17:29',	'17:59',	'18:29',	'18:59',	'20:09'];
    var sikorskiego1szpitalDif =   ['5:35', '6:40', '7:10', '7:40', '8:10', '8:40', '9:40',	'11:40',	'12:40',	'13:20',	'14:00',	'14:40',	'15:20',	'15:40',	'16:20',	'16:50',	'17:30',	'18:00',	'18:30',	'19:00',	'20:10'];
    var rozana1szpitalDif =   ['5:36', '6:41', '7:11', '7:41', '8:11', '8:41', '9:41',	'11:41',	'12:41',	'13:21',	'14:01',	'14:41',	'15:21',	'15:41',	'16:21',	'16:51',	'17:31',	'18:01',	'18:31',	'19:01',	'20:11'];
    var konopnickiej1szpitalDif =   ['5:37', '6:42', '7:12', '7:42', '8:12', '8:42', '9:42',	'11:42',	'12:42',	'13:22',	'14:02',	'14:42',	'15:22',	'15:42',	'16:22',	'16:52',	'17:32',	'18:02',	'18:32',	'19:02',	'20:12'];
    var szydlice1szpitalDif =   ['5:38', '6:43', '7:13', '7:43', '8:13', '8:43', '9:43',	'11:43',	'12:43',	'13:23',	'14:03',	'14:43',	'15:23',	'15:43',	'16:23',	'16:53',	'17:33',	'18:03',	'18:33',	'19:03',	'20:13'];
    var malcuzynskiego1szpitalDif =   ['5:39', '6:44', '7:14', '7:44', '8:14', '8:44', '9:44',	'11:44',	'12:44',	'13:24',	'14:04',	'14:44',	'15:24',	'15:44',	'16:24',	'16:54',	'17:34',	'18:04',	'18:34',	'19:04',	'20:14'];
  
    /*line 2 direction szpital*/
    var towarowa2szpitalDif =['6:37',	 '7:07',	'14:47',	'15:47'];
    var rolnicza2szpitalDif =['6:38',	 '7:08',	'14:48',	'15:48'];
    var stwoszatowarowa2szpitalDif =['6:39',	 '7:09',	'14:49', '15:49'];
    var michalowicza2szpitalDif =['6:40',	 '7:10',	'14:50', '15:50'];
    var tatarkiewicza2szpitalDif =['6:41',	 '7:11',	'14:51', '15:51'];
    var kossaka2szpitalDif =['6:43',	 '7:13',	'14:53', '15:53'];
    var michalowskiego2szpitalDif = ['6:44',	 '7:14',	'14:54', '15:54'];
    var pkp2szpitalDif = ['6:45',	 '7:15',	'14:55', '15:55'];
    
    /*line 3 direction szpital*/
    var pkp3szpitalDif = ['8:55',	 '9:55',	'10:55',	'11:55',	'12:55',	'13:55'];
    var dworcowa3szpitalDif = ['8:56',	 '9:56',	'10:56',	'11:56',	'12:56',	'13:56'];
    var maja3szpitalDif = ['8:57',	 '9:57',	'10:57',	'11:57',	'12:57',	'13:57'];
    var mlynska3szpitalDif = ['8:59',	 '9:59',	'10:59',	'11:59',	'12:59',	'13:59'];
    var marca3szpitalDif = ['9:01',	'10:01',	'11:01',	'12:01',	'13:01',	'14:01'];
    var staszica3szpitalDif = ['9:02',	'10:02',	'11:02',	'12:02',	'13:02',	'14:02'];
    var konopnickiej3szpitalDif = ['9:03',	'10:03',	'11:03',	'12:03',	'13:03',	'14:03'];
    var szydlice3szpitalDif = ['9:04',	'10:04',	'11:04',	'12:04',	'13:04',	'14:04'];
    var malcuzynskiego3szpitalDif = ['9:05',	'10:05',	'11:05',	'12:05',	'13:05',	'14:05'];
 
  var dayTypeDif = "dni robocze";
};