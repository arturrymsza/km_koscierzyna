const now = new Date(); 
const weekDay = now.getDay();
const monthDay = now.getDate();
const month = now.getMonth();
var holiday = monthDay.toString() + month.toString();

if (weekDay > 0 && weekDay < 6) {
  /*line 1 direction pkp*/
  var szpital1pkp = ['5:15', '6:00', '6:50', '7:20', '7:50', '8:20', '9:00', '9:50', '10:50',	'11:50',	'12:50',	'13:30', '14:10',	'14:50',	'15:20',	'16:20',	'17:10',	'18:10',	'19:10'];
  var malcuzynskiego1pkp = [ '5:16', '6:01', '6:51', '7:21', '7:51', '8:21', '9:01', '9:51', '10:51', '11:51', '12:51', '13:31', '14:11', '14:51', '15:21', '16:21', '17:11', '18:11', '19:11'];
  var szydlice1pkp = ['5:17',	 '6:02',	 '6:52',	 '7:22',	 '7:52',	 '8:22',	 '9:02',	 '9:52',	'10:52',	'11:52',	'12:52',	'13:32',	'14:12',	'14:52',	'15:22',	'16:22',	'17:12',	'18:12',	'19:12'];
  var konopnickiej1pkp = ['5:18',	 '6:03',	 '6:53',	 '7:23',	 '7:53',	 '8:23',	 '9:03',	 '9:53',	'10:53',	'11:53',	'12:53',	'13:33',	'14:13',	'14:53',	'15:23',	'16:23',	'17:13',	'18:13',	'19:13'];
  var rozana1pkp = [ '5:19',	 '6:04',	 '6:54',	 '7:24',	 '7:54',	 '8:24',	 '9:04',	 '9:54',	'10:54',	'11:54',	'12:54',	'13:34',	'14:14',	'14:54',	'15:24',	'16:24',	'17:14',	'18:14',	'19:14'];
  var sikorskiego1pkp = [ '5:20',	 '6:05',	 '6:55',	 '7:25',	 '7:55',	 '8:25',	 '9:05',	 '9:55',	'10:55',	'11:55',	'12:55',	'13:35',	'14:15',	'14:55',	'15:25',	'16:25',	'17:15',	'18:15',	'19:15'];
  var strzelecka1pkp = [ '5:21',	 '6:06',	 '6:56',	 '7:26',	 '7:56',	 '8:26',	 '9:06',	 '9:56',	'10:56',	'11:56',	'12:56',	'13:36',	'14:16',	'14:56',	'15:26',	'16:26',	'17:16',	'18:16',	'19:16'];
  var rogali1pkp = [ '5:22',	 '6:07',	 '6:57',	 '7:27',	 '7:57',	 '8:27',	 '9:07',	 '9:57',	'10:57',	'11:57',	'12:57',	'13:37',	'14:17',	'14:57',	'15:27',	'16:27',	'17:17',	'18:17',	'19:17'];
  var marchewicza1pkp = [ '5:23',	 '6:08',	 '6:58',	 '7:28',	 '7:58',	 '8:28',	 '9:08',	 '9:58',	'10:58',	'11:58',	'12:58',	'13:38',	'14:18',	'14:58',	'15:28',	'16:28',	'17:18',	'18:18',	'19:18'];
  var bolewskiej1pkp = ['5:24',	 '6:09',	 '6:59',	 '7:29',	 '7:59',	 '8:29',	 '9:09',	 '9:59',	'10:59',	'11:59',	'12:59',	'13:39',	'14:19',	'14:59',	'15:29',	'16:29',	'17:19',	'18:19',	'19:19'];
  var szkolna1pkp = ['5:25',	 '6:10',	 '7:00',	 '7:30',	 '8:00',	 '8:30',	 '9:10',	 '10:00',	'11:00',	'12:00',	'13:00',	'13:40',	'14:20',	'15:00',	'15:30',	'16:30',	'17:20',	'18:20',	'19:20'];
  var heykego1pkp = [ '5:26',	 '6:11',	 '7:01',	 '7:31',	 '8:01',	 '8:31',	 '9:11',	'10:01',	'11:01',	'12:01',	'13:01',	'13:41',	'14:21',	'15:01',	'15:31',	'16:31',	'17:21',	'18:21',	'19:21'];
  var kartuska1pkp = [ '5:27',	 '6:12',	 '7:02',	 '7:32',	 '8:02',	 '8:32',	 '9:12',	'10:02',	'11:02',	'12:02',	'13:02',	'13:42',	'14:22',	'15:02',	'15:32',	'16:32',	'17:22',	'18:22',	'19:22'];
  var szopinskiego1pkp = [ '5:29',	 '6:14',	 '7:04',	 '7:34',	 '8:04',	 '8:34',	 '9:14',	'10:04',	'11:04',	'12:04',	'13:04',	'13:44',	'14:24',	'15:04',	'15:34',	'16:34',	'17:24',	'18:24',	'19:24'];
  var mlynska1pkp = [ '5:30',	 '6:15',	 '7:05',	 '7:35',	 '8:05',	 '8:35',	 '9:15',	'10:05',	'11:05',	'12:05',	'13:05',	'13:45',	'14:25',	'15:05',	'15:35',	'16:35',	'17:25',	'18:25',	'19:25'];
  var galeria1pkp = [ '5:32',	 '6:17',	 '7:07',	 '7:37',	 '8:07',	 '8:37',	 '9:17',	'10:07',	'11:07',	'12:07',	'13:07',	'13:47',	'14:27',	'15:07',	'15:37',	'16:37',	'17:27',	'18:27',	'19:27'];
  var kapliczna1pkp = [ '5:34',	 '6:19',	 '7:09',	 '7:39',	 '8:09',	 '8:39',	 '9:19',	'10:09',	'11:09',	'12:09',	'13:09',	'13:49',	'14:29',	'15:09',	'15:39',	'16:39',	'17:29',	'18:29',	'19:29'];
  var skarszewska1pkp = [ '5:35',	 '6:20',	 '7:10',	 '7:40',	 '8:10',	 '8:40',	 '9:20',	'10:10',	'11:10',	'12:10',	'13:10',	'13:50',	'14:30',	'15:10',	'15:40',	'16:40',	'17:30',	'18:30',	'19:30'];
  var matejki1pkp = [ '5:36',	 '6:21',	 '7:11',	 '7:41',	 '8:11',	 '8:41',	 '9:21',	'10:11',	'11:11',	'12:11',	'13:11',	'13:51',	'14:31',	'15:11',	'15:41',	'16:41',	'17:31',	'18:31',	'19:31'];
  var michalowskiego1pkp = [ '5:37',	 '6:22',	 '7:12',	 '7:42',	 '8:12',	 '8:42',	 '9:22',	'10:12',	'11:12',	'12:12',	'13:12',	'13:52',	'14:32',	'15:12',	'15:42',	'16:42',	'17:32',	'18:32',	'19:32'];

  /*line 2 direction pkp*/
  var szpital2pkp =  [ '7:15',	'14:25',	'15:25'];
  var malcuzynskiego2pkp =  ['7:16',	'14:26',	'15:26'];
  var szydlice2pkp = 	 ['7:17',	'14:27',	'15:27'];
  var konopnickiej2pkp =  ['7:18',	'14:28',	'15:28'];
  var staszica2pkp =  ['7:19',	'14:29',	'15:29'];
  var marca2pkp =  ['7:20',	'14:30',	'15:30'];
  var galeria2pkp = [ '7:22',	'14:32',	'15:32'];
  var maja2pkp = ['7:23',	'14:33',	'15:33'];
  var dworcowa2pkp = ['7:24',	'14:34',	'15:34'];
  var pkp2pkp = ['7:25',	'14:35',	'15:35'];
  var michalowskiego2pkp = ['7:26',	'14:36',	'15:36'];
  var kossaka2pkp =['7:27',	'14:37',	'15:37'];
  var tatarkiewicza2pkp = ['7:29',	'14:39',	'15:39'];
  var michalowicza2pkp = ['7:30',	'14:40',	'15:40'];
  var stwoszatowarowa2pkp =['7:31',	'14:41',	'15:41'];
  var przemyslowa2pkp =[ '6:33',	 '7:33',	'14:43',	'15:43'];

  /*line 3 direction pkp*/
  var szpital3pkp = [ '8:25', '9:25',	'10:25',	'11:25',	'12:25',	'13:25',	'16:00',	'17:40',	'20:20'];
  var malcuzynskiego3pkp = [ '8:26',	 '9:26',	'10:26',	'11:26',	'12:26',	'13:26',	'16:01',	'17:41',	'20:21'];
  var szydlice3pkp = [ '8:27',	 '9:27',	'10:27',	'11:27',	'12:27',	'13:27',	'16:02',	'17:42',	'20:22'];
  var konopnickiej3pkp = [ '8:28',	 '9:28',	'10:28',	'11:28',	'12:28',	'13:28',	'16:03',	'17:43',	'20:23'];
  var staszica3pkp = [ '8:29',	 '9:29',	'10:29',	'11:29',	'12:29',	'13:29',	'16:04',	'17:44',	'20:24'];
  var marca3pkp = [ '8:30',	 '9:30',	'10:30',	'11:30',	'12:30',	'13:30',	'16:05',	'17:45',	'20:25'];
  var galeria3pkp = [ '8:32',	 '9:32',	'10:32',	'11:32',	'12:32',	'13:32',	'16:07',	'17:47',	'20:27'];
  var maja3pkp = [ '8:33',	 '9:33',	'10:33',	'11:33',	'12:33',	'13:33',	'16:08',	'17:48',	'20:28'];
  var dworcowa3pkp = [ '8:34',	 '9:34',	'10:34',	'11:34',	'12:34',	'13:34',	'16:09',	'17:49',	'20:29'];
  
  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpital = [ '5:20',	 '6:20',	 '6:50',	 '7:20',	 '7:50',	 '8:20',	 '9:20',	'10:20',	'11:20',	'12:20',	'13:00',	'13:40',	'14:20',	'14:50',	'15:20',	'15:50',	'16:30',	'17:10',	'17:40',	'18:10',	'18:40',	'19:50',	'21:05'];
  var michalowskiego1szpital = [ '5:21',	 '6:21',	 '6:51',	 '7:21',	 '7:51',	 '8:21',	 '9:21',	'10:21',	'11:21',	'12:21',	'13:01',	'13:41',	'14:21',	'14:51',	'15:21',	'15:51',	'16:31',	'17:11',	'17:41',	'18:11',	'18:41',	'19:51',	'21:06'];
  var matejki1szpital = [ '5:22',	 '6:22',	 '6:52',	 '7:22',	 '7:52',	 '8:22',	 '9:22',	'10:22',	'11:22',	'12:22',	'13:02',	'13:42',	'14:22',	'14:52',	'15:22',	'15:52',	'16:32',	'17:12',	'17:42',	'18:12',	'18:42',	'19:52',	'21:07'];
  var skarszewska1szpital = [ '5:23',	 '6:23',	 '6:53',	 '7:23',	 '7:53',	 '8:23',	 '9:23',	'10:23',	'11:23',	'12:23',	'13:03',	'13:43',	'14:23',	'14:53',	'15:23',	'15:53',	'16:33',	'17:13',	'17:43',	'18:13',	'18:43',	'19:53',	'21:08'];
  var kapliczna1szpital = [ '5:24',	 '6:24',	 '6:54',	 '7:24',	 '7:54',	 '8:24',	 '9:24',	'10:24',	'11:24',	'12:24',	'13:04',	'13:44',	'14:24',	'14:54',	'15:24',	'15:54',	'16:34',	'17:14',	'17:44',	'18:14',	'18:44',	'19:54',	'21:09'];
  var mlynska1szpital = [ '5:26',	 '6:26',	 '6:56',	 '7:26',	 '7:56',	 '8:26',	 '9:26',	'10:26',	'11:26',	'12:26',	'13:06',	'13:46',	'14:26',	'14:56',	'15:26',	'15:56',	'16:36',	'17:16',	'17:46',	'18:16',	'18:46',	'19:56',	'21:11'];
  var galeria1szpital = [ '5:28',	 '6:28',	 '6:58',	 '7:28',	 '7:58',	 '8:28',	 '9:28',	'10:28',	'11:28',	'12:28',	'13:08',	'13:48',	'14:28',	'14:58',	'15:28',	'15:58',	'16:38',	'17:18',	'17:48',	'18:18',	'18:48',	'19:58',	'21:13'];
  var szopinskiego1szpital = [ '5:30',	 '6:30',	 '7:00',	 '7:30',	 '8:00',	 '8:30',	 '9:30',	'10:30',	'11:30',	'12:30',	'13:10',	'13:50',	'14:30',	'15:00',	'15:30',	'16:00',	'16:40',	'17:20',	'17:50',	'18:20',	'18:50',	'20:00',	'21:15'];
  var kartuska1szpital = [ '5:32', '6:32', '7:02', '7:32', '8:02', '8:32', '9:32','10:32',	'11:32',	'12:32',	'13:12',	'13:52',	'14:32',	'15:02',	'15:32',	'16:02',	'16:42',	'17:22',	'17:52',	'18:22',	'18:52',	'20:02',	'21:17',];
  var heykego1szpital = ['5:33', '6:33', '7:03', '7:33', '8:03', '8:33', '9:33','10:33',	'11:33',	'12:33',	'13:13',	'13:53',	'14:33',	'15:03',	'15:33',	'16:03',	'16:43',	'17:23',	'17:53',	'18:23',	'18:53',	'20:03',	'21:18'];
  var szkolna1szpital =   ['5:35', '6:35', '7:05', '7:35', '8:05', '8:35', '9:35', '10:35',	'11:35',	'12:35',	'13:15',	'13:55',	'14:35',	'15:05',	'15:35',	'16:05',	'16:45',	'17:25',	'17:55',	'18:25',	'18:55',	'20:05',	'21:20'];
  var bolewskiej1szpital =   ['5:36', '6:36', '7:06', '7:36', '8:06', '8:36', '9:36','10:36',	'11:36',	'12:36',	'13:16',	'13:56',	'14:36',	'15:06',	'15:36',	'16:06',	'16:46',	'17:26',	'17:56',	'18:26',	'18:56',	'20:06',	'21:21'];
  var marchewicza1szpital =   ['5:37', '6:37', '7:07', '7:37', '8:07', '8:37', '9:37','10:37',	'11:37',	'12:37',	'13:17',	'13:57',	'14:37',	'15:07',	'15:37',	'16:07',	'16:47',	'17:27',	'17:57',	'18:27',	'18:57',	'20:07',	'21:22'];
  var rogali1szpital =   ['5:38', '6:38', '7:08', '7:38', '8:08', '8:38', '9:38','10:38',	'11:38',	'12:38',	'13:18',	'13:58',	'14:38',	'15:08',	'15:38',	'16:08',	'16:48',	'17:28',	'17:58',	'18:28',	'18:58',	'20:08',	'21:23'];
  var strzelecka1szpital =   ['5:39', '6:39', '7:09', '7:39', '8:09', '8:39', '9:39','10:39',	'11:39',	'12:39',	'13:19',	'13:59',	'14:39',	'15:09',	'15:39',	'16:09',	'16:49',	'17:29',	'17:59',	'18:29',	'18:59',	'20:09',	'21:24'];
  var sikorskiego1szpital =   ['5:40', '6:40', '7:10', '7:40', '8:10', '8:40', '9:40','10:40',	'11:40',	'12:40',	'13:20',	'14:00',	'14:40',	'15:10',	'15:40',	'16:10',	'16:50',	'17:30',	'18:00',	'18:30',	'19:00',	'20:10',	'21:25'];
  var rozana1szpital =   ['5:41', '6:41', '7:11', '7:41', '8:11', '8:41', '9:41','10:41',	'11:41',	'12:41',	'13:21',	'14:01',	'14:41',	'15:11',	'15:41',	'16:11',	'16:51',	'17:31',	'18:01',	'18:31',	'19:01',	'20:11',	'21:26'];
  var konopnickiej1szpital =   ['5:42', '6:42', '7:12', '7:42', '8:12', '8:42', '9:42','10:42',	'11:42',	'12:42',	'13:22',	'14:02',	'14:42',	'15:12',	'15:42',	'16:12',	'16:52',	'17:32',	'18:02',	'18:32',	'19:02',	'20:12',	'21:27'];
  var szydlice1szpital =   ['5:43', '6:43', '7:13', '7:43', '8:13', '8:43', '9:43','10:43',	'11:43',	'12:43',	'13:23',	'14:03',	'14:43',	'15:13',	'15:43',	'16:13',	'16:53',	'17:33',	'18:03',	'18:33',	'19:03',	'20:13',	'21:28'];
  var malcuzynskiego1szpital =   ['5:44', '6:44', '7:14', '7:44', '8:14', '8:44', '9:44','10:44',	'11:44',	'12:44',	'13:24',	'14:04',	'14:44',	'15:14',	'15:44',	'16:14',	'16:54',	'17:34',	'18:04',	'18:34',	'19:04',	'20:14',	'21:29'];

  /*line 2 direction szpital*/
  var towarowa2szpital =['6:37',	 '7:37',	'14:47',	'15:47'];
  var rolnicza2szpital =['6:38',	 '7:38',	'14:48',	'15:48'];
  var stwoszatowarowa2szpital =['6:39',	 '7:39',	'14:49'];
  var michalowicza2szpital =['6:40',	 '7:40',	'14:50'];
  var tatarkiewicza2szpital =['6:41',	 '7:41',	'14:51'];
  var kossaka2szpital =['6:43',	 '7:43',	'14:53'];
  var michalowskiego2szpital = ['6:44',	 '7:44',	'14:54'];
  var pkp2szpital = ['6:45',	 '7:45',	'14:55'];
  var dworcowa2szpital = ['6:46',	 '7:46',	'14:56'];
  var maja2szpital = ['6:47',	 '7:47',	'14:57'];
  var mlynska2szpital = ['6:49',	 '7:49',	'14:59'];
  var marca2szpital = ['6:51',	 '7:51',	'15:01'];
  var staszica2szpital = ['6:52',	 '7:52',	'15:02'];
  var konopnickiej2szpital = ['6:53',	 '7:53',	'15:03'];
  var szydlice2szpital = ['6:54',	 '7:54',	'15:04'];
  var malcuzynskiego2szpital = ['6:55',	 '7:55',	'15:05'];

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
  var szpital1pkpDif =   ['5:55',	 '6:50',	 '7:25',	 '8:55',	 '9:55',	'12:05',	'14:10',	'14:50',	'16:05',	'19:10'];
  var malcuzynskiego1pkpDif =   ['5:56',	 '6:51',	 '7:26',	 '8:56',	 '9:56',	'12:06',	'14:11',	'14:51',	'16:06',	'19:11'];
  var szydlice1pkpDif =     ['5:57',	 '6:52',	 '7:27',	 '8:57',	 '9:57',	'12:07',	'14:12',	'14:52',	'16:07',	'19:12'];
  var konopnickiej1pkpDif =   ['5:58',	 '6:53',	 '7:28',	 '8:58',	 '9:58',	'12:08',	'14:13',	'14:53',	'16:08',	'19:13'];
  var rozana1pkpDif =   ['5:59',	 '6:54',	 '7:29',	 '8:59',	 '9:59',	'12:09',	'14:14',	'14:54',	'16:09',	'19:14'];
  var sikorskiego1pkpDif =   ['6:00',	 '6:55',	 '7:30',	 '9:00',	'10:00',	'12:10',	'14:15',	'14:55',	'16:10',	'19:15'];
  var strzelecka1pkpDif =   ['6:01',	 '6:56',	 '7:31',	 '9:01',	'10:01',	'12:11',	'14:16',	'14:56',	'16:11',	'19:16'];
  var rogali1pkpDif =   ['6:02',	 '6:57',	 '7:32',	 '9:02',	'10:02',	'12:12',	'14:17',	'14:57',	'16:12',	'19:17'];
  var marchewicza1pkpDif =   ['6:03',	 '6:58',	 '7:33',	 '9:03',	'10:03',	'12:13',	'14:18',	'14:58',	'16:13',	'19:18'];
  var bolewskiej1pkpDif =   ['6:04',	 '6:59',	 '7:34',	 '9:04',	'10:04',	'12:14',	'14:19',	'14:59',	'16:14',	'19:19'];
  var szkolna1pkpDif =   ['6:05',	 '7:00',	 '7:35',	 '9:05',	'10:05',	'12:15',	'14:20',	'15:00',	'16:15',	'19:20'];
  var heykego1pkpDif =   ['6:06',	 '7:01',	 '7:36',	 '9:06',	'10:06',	'12:16',	'14:21',	'15:01',	'16:16',	'19:21'];
  var kartuska1pkpDif =   ['6:07',	 '7:02',	 '7:37',	 '9:07',	'10:07',	'12:17',	'14:22',	'15:02',	'16:17',	'19:22'];
  var szopinskiego1pkpDif =   ['6:09',	 '7:04',	 '7:39',	 '9:09',	'10:09',	'12:19',	'14:24',	'15:04',	'16:19',	'19:24'];
  var mlynska1pkpDif =   ['6:10',	 '7:05',	 '7:40',	 '9:10',	'10:10',	'12:20',	'14:25',	'15:05',	'16:20',	'19:25'];
  var galeria1pkpDif =   ['6:12',	 '7:07',	 '7:42',	 '9:12',	'10:12',	'12:22',	'14:27',	'15:07',	'16:22',	'19:27'];
  var kapliczna1pkpDif =   ['6:14',	 '7:09',	 '7:44',	 '9:14',	'10:14',	'12:24',	'14:29',	'15:09',	'16:24',	'19:29'];
  var skarszewska1pkpDif =   ['6:15',	 '7:10',	 '7:45',	 '9:15',	'10:15',	'12:25',	'14:30',	'15:10',	'16:25',	'19:30'];
  var matejki1pkpDif =   ['6:16',	 '7:11',	 '7:46',	 '9:16',	'10:16',	'12:26',	'14:31',	'15:11',	'16:26',	'19:31'];
  var michalowskiego1pkpDif =   ['6:17',	 '7:12',	 '7:47',	 '9:17',	'10:17',	'12:27',	'14:32',	'15:12',	'16:27',	'19:32'];
  
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
  

  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpitalDif = ['6:20', '13:01', '16:15', '18:20'];
  var dworcowa1szpitalDif = ['6:21', '13:02', '16:16'];
  var maja1szpitalDif = ['6:22', '13:03', '16:17'];
  var szopinskiego1szpitalDif = ['6:24', '13:05', '16:19', '18:25'];
  var kartuska1szpitalDif = ['6:26', '13:07', '16:21', '18:27'];
  var heykego1szpitalDif = ['6:27', '13:08', '16:22', '18:28'];
  var szkolna1szpitalDif = ['6:29', '13:10', '16:24', '18:30'];
  var rogali1szpitalDif = ['6:30', '13:11', '16:25', '18:31'];
  var strzelecka1szpitalDif = ['6:31', '13:12', '16:26', '18:32'];
  var sikorskiego1szpitalDif = ['6:32', '13:13', '16:27', '18:33'];
  var rozana1szpitalDif = ['6:33', '13:14', '16:28', '18:34'];
  var konopnickiej1szpitalDif = ['6:34', '13:15', '16:29', '18:35'];
  var szydlice1szpitalDif = ['6:35', '13:16', '16:30', '18:36'];
  var malcuzynskiego1szpitalDif = ['6:36', '13:17', '16:31', '18:37'];
  var matejki1szpitalDif = ['18:22'];
  var skarszewska1szpitalDif = ['18:23'];
  var kapliczna1szpitalDif = ['18:24'];

  /*line 2 direction szpital*/
  var pkp2szpitalDif = ['9:35'];
  var michalowskiego2szpitalDif = ['9:36'];
  var kossaka2szpitalDif = ['9:37'];
  var tatarkiewicza2szpitalDif = ['9:39'];
  var michalowicza2szpitalDif = ['9:40'];
  var towarowa2szpitalDif = ['9:41'];
  var bazowa2szpitalDif = ['9:42'];
  var drogowcow2szpitalDif = ['9:43'];
  var petla2szpitalDif = ['9:44'];
  var szopinskiego2szpitalDif = ['9:46'];
  var kartuska2szpitalDif = ['9:48'];
  var heykego2szpitalDif = ['9:49'];
  var szkolna2szpitalDif = ['9:51'];
  var rogali2szpitalDif = ['9:52'];
  var strzelecka2szpitalDif = ['9:53'];
  var sikorskiego2szpitalDif = ['9:54'];
  var rozana2szpitalDif = ['9:55'];
  var konopnickiej2szpitalDif = ['9:56'];
  var szydlice2szpitalDif = ['9:57'];
  var malcuzynskiego2szpitalDif = ['9:58'];

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
  var pkp4szpitalDif = ['12:25'];
  var michalowskiego4szpitalDif = ['12:26'];
  var matejki4szpitalDif = ['12:27'];
  var skarszewska4szpitalDif = ['12:28'];
  var kapliczna4szpitalDif = ['12:29'];
  var galeria4szpitalDif = ['12:31'];
  var roltex4szpitalDif = ['12:32'];
  var klasztorna4szpitalDif = ['12:33'];
  var chojnickaklasztorna4szpitalDif = ['12:34'];
  var cegielnia4szpitalDif = ['12:35'];
  var staszica4szpitalDif = ['12:36'];
  var konopnickiej4szpitalDif = ['12:37'];
  var szydlice4szpitalDif = ['12:38'];
  var malcuzynskiego4szpitalDif = ['12:39'];
  
  var dayTypeDif = "soboty, niedziele i święta";
};

if (weekDay === 0 || weekDay === 6 || holiday === "10" || holiday === "60" || holiday === "213" || holiday === "223" || holiday === "14"
    || holiday === "34" || holiday === "205" || holiday === "157" || holiday === "110" || holiday === "1110"
    || holiday === "2511" || holiday === "2611") {
  
  /*line 1 direction pkp*/
  var szpital1pkp =   ['5:55',	 '6:50',	 '7:25',	 '8:55',	 '9:55',	'12:05',	'14:10',	'14:50',	'16:05',	'19:10'];
  var malcuzynskiego1pkp =   ['5:56',	 '6:51',	 '7:26',	 '8:56',	 '9:56',	'12:06',	'14:11',	'14:51',	'16:06',	'19:11'];
  var szydlice1pkp =     ['5:57',	 '6:52',	 '7:27',	 '8:57',	 '9:57',	'12:07',	'14:12',	'14:52',	'16:07',	'19:12'];
  var konopnickiej1pkp =   ['5:58',	 '6:53',	 '7:28',	 '8:58',	 '9:58',	'12:08',	'14:13',	'14:53',	'16:08',	'19:13'];
  var rozana1pkp =   ['5:59',	 '6:54',	 '7:29',	 '8:59',	 '9:59',	'12:09',	'14:14',	'14:54',	'16:09',	'19:14'];
  var sikorskiego1pkp =   ['6:00',	 '6:55',	 '7:30',	 '9:00',	'10:00',	'12:10',	'14:15',	'14:55',	'16:10',	'19:15'];
  var strzelecka1pkp =   ['6:01',	 '6:56',	 '7:31',	 '9:01',	'10:01',	'12:11',	'14:16',	'14:56',	'16:11',	'19:16'];
  var rogali1pkp =   ['6:02',	 '6:57',	 '7:32',	 '9:02',	'10:02',	'12:12',	'14:17',	'14:57',	'16:12',	'19:17'];
  var marchewicza1pkp =   ['6:03',	 '6:58',	 '7:33',	 '9:03',	'10:03',	'12:13',	'14:18',	'14:58',	'16:13',	'19:18'];
  var bolewskiej1pkp =   ['6:04',	 '6:59',	 '7:34',	 '9:04',	'10:04',	'12:14',	'14:19',	'14:59',	'16:14',	'19:19'];
  var szkolna1pkp =   ['6:05',	 '7:00',	 '7:35',	 '9:05',	'10:05',	'12:15',	'14:20',	'15:00',	'16:15',	'19:20'];
  var heykego1pkp =   ['6:06',	 '7:01',	 '7:36',	 '9:06',	'10:06',	'12:16',	'14:21',	'15:01',	'16:16',	'19:21'];
  var kartuska1pkp =   ['6:07',	 '7:02',	 '7:37',	 '9:07',	'10:07',	'12:17',	'14:22',	'15:02',	'16:17',	'19:22'];
  var szopinskiego1pkp =   ['6:09',	 '7:04',	 '7:39',	 '9:09',	'10:09',	'12:19',	'14:24',	'15:04',	'16:19',	'19:24'];
  var mlynska1pkp =   ['6:10',	 '7:05',	 '7:40',	 '9:10',	'10:10',	'12:20',	'14:25',	'15:05',	'16:20',	'19:25'];
  var galeria1pkp =   ['6:12',	 '7:07',	 '7:42',	 '9:12',	'10:12',	'12:22',	'14:27',	'15:07',	'16:22',	'19:27'];
  var kapliczna1pkp =   ['6:14',	 '7:09',	 '7:44',	 '9:14',	'10:14',	'12:24',	'14:29',	'15:09',	'16:24',	'19:29'];
  var skarszewska1pkp =   ['6:15',	 '7:10',	 '7:45',	 '9:15',	'10:15',	'12:25',	'14:30',	'15:10',	'16:25',	'19:30'];
  var matejki1pkp =   ['6:16',	 '7:11',	 '7:46',	 '9:16',	'10:16',	'12:26',	'14:31',	'15:11',	'16:26',	'19:31'];
  var michalowskiego1pkp =   ['6:17',	 '7:12',	 '7:47',	 '9:17',	'10:17',	'12:27',	'14:32',	'15:12',	'16:27',	'19:32'];
  
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
  
  /*line 3/2 direction pkp*/
  var szpital6pkp = ['12:35'];
  var malcuzynskiego6pkp = ['12:36'];
  var szydlice6pkp = ['12:37'];
  var konopnickiej6pkp = ['12:38'];
  var staszica6pkp = ['12:39'];
  var marca6pkp = ['12:40'];
  var galeria6pkp = ['12;42'];
  var kapliczna6pkp = ['12:44'];
  var skarszewska6pkp = ['12:45'];
  var matejki6pkp = ['12:46'];
  var kossaka6pkp = ['12:47'];
  var tatarkiewicza6pkp = ['12:49'];
  var michalowicza6pkp = ['12:50'];
  var towarowa6pkp = ['12:51'];
  var budowlanych6pkp = ['12:52'];
  var drogowcow6pkp = ['12:54'];
  var dworcowa6pkp = ['12:55'];

  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpital = ['6:20', '13:01', '16:15', '18:20'];
  var dworcowa1szpital = ['6:21', '13:02', '16:16'];
  var maja1szpital = ['6:22', '13:03', '16:17'];
  var szopinskiego1szpital = ['6:24', '13:05', '16:19', '18:25'];
  var kartuska1szpital = ['6:26', '13:07', '16:21', '18:27'];
  var heykego1szpital = ['6:27', '13:08', '16:22', '18:28'];
  var szkolna1szpital = ['6:29', '13:10', '16:24', '18:30'];
  var rogali1szpital = ['6:30', '13:11', '16:25', '18:31'];
  var strzelecka1szpital = ['6:31', '13:12', '16:26', '18:32'];
  var sikorskiego1szpital = ['6:32', '13:13', '16:27', '18:33'];
  var rozana1szpital = ['6:33', '13:14', '16:28', '18:34'];
  var konopnickiej1szpital = ['6:34', '13:15', '16:29', '18:35'];
  var szydlice1szpital = ['6:35', '13:16', '16:30', '18:36'];
  var malcuzynskiego1szpital = ['6:36', '13:17', '16:31', '18:37'];
  var matejki1szpital = ['18:22'];
  var skarszewska1szpital = ['18:23'];
  var kapliczna1szpital = ['18:24'];

  /*line 2 direction szpital*/
  var pkp2szpital = ['9:35'];
  var michalowskiego2szpital = ['9:36'];
  var kossaka2szpital = ['9:37'];
  var tatarkiewicza2szpital = ['9:39'];
  var michalowicza2szpital = ['9:40'];
  var towarowa2szpital = ['9:41'];
  var bazowa2szpital = ['9:42'];
  var drogowcow2szpital = ['9:43'];
  var petla2szpital = ['9:44'];
  var szopinskiego2szpital = ['9:46'];
  var kartuska2szpital = ['9:48'];
  var heykego2szpital = ['9:49'];
  var szkolna2szpital = ['9:51'];
  var rogali2szpital = ['9:52'];
  var strzelecka2szpital = ['9:53'];
  var sikorskiego2szpital = ['9:54'];
  var rozana2szpital = ['9:55'];
  var konopnickiej2szpital = ['9:56'];
  var szydlice2szpital = ['9:57'];
  var malcuzynskiego2szpital = ['9:58'];

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
  var pkp4szpital = ['12:25'];
  var michalowskiego4szpital = ['12:26'];
  var matejki4szpital = ['12:27'];
  var skarszewska4szpital = ['12:28'];
  var kapliczna4szpital = ['12:29'];
  var galeria4szpital = ['12:31'];
  var roltex4szpital = ['12:32'];
  var klasztorna4szpital = ['12:33'];
  var chojnickaklasztorna4szpital = ['12:34'];
  var cegielnia4szpital = ['12:35'];
  var staszica4szpital = ['12:36'];
  var konopnickiej4szpital = ['12:37'];
  var szydlice4szpital = ['12:38'];
  var malcuzynskiego4szpital = ['12:39'];

  var dayType = "soboty, niedziele i święta";

  /*different day type*/
  /*line 1 direction pkp*/
  var szpital1pkpDif = ['6:05', '7:10', '7:35', '7:55', '8:45', '11:30', '14:10', '15:10', '15:55', '16:50', '19:10'];
  var malcuzynskiego1pkpDif = ['6:06', '7:11', '7:36', '7:56', '8:46', '11:31', '14:11', '15:11', '15:56', '16:51', '19:11'];
  var szydlice1pkpDif = ['6:07', '7:12', '7:37', '7:57', '8:47', '11:32', '14:12', '15:12', '15:57', '16:52', '19:12'];
  var konopnickiej1pkpDif = ['6:08', '7:13', '7:38', '7:58', '8:48', '11:33', '14:13', '15:13', '15:58', '16:53', '19:13'];
  var rozana1pkpDif = ['6:09', '7:14', '7:39', '7:59', '8:49', '11:34', '14:14', '15:14', '15:59', '16:54', '19:14'];
  var sikorskiego1pkpDif = ['6:10', '7:15', '7:40', '8:00', '8:50', '11:35', '14:15', '15:15', '16:00', '16:55', '19:15'];
  var strzelecka1pkpDif = ['6:11', '7:16', '7:41', '8:01', '8:51', '11:36', '14:16', '15:16', '16:01', '16:56', '19:16'];
  var rogali1pkpDif = ['6:12', '7:17', '7:42', '8:02', '8:52', '11:37', '14:17', '15:17', '16:02', '16:57', '19:17'];
  var marchewicza1pkpDif = ['6:13', '7:18', '7:43', '8:03', '8:53', '11:38', '14:18', '15:18', '16:03', '16:58', '19:18'];
  var bolewskiej1pkpDif = ['6:14', '7:19', '7:44', '8:04', '8:54', '11:39', '14:19', '15:19', '16:04', '16:59', '19:19'];
  var szkolna1pkpDif = ['6:15', '7:20', '7:45', '8:05', '8:55', '11:40', '14:20', '15:20', '16:05', '17:00', '19:20'];
  var heykego1pkpDif = ['6:16', '7:21', '7:46', '8:06', '8:56', '11:41', '14:21', '15:21', '16:06', '17:01', '19:21'];
  var kartuska1pkpDif = ['6:17', '7:22', '7:47', '8:07', '8:57', '11:42', '14:22', '15:22', '16:07', '17:02', '19:22'];
  var szopinskiego1pkpDif = ['6:19', '7:24', '7:49', '8:09', '8:59', '11:44', '14:24', '15:24', '16:09', '17:04', '19:24'];
  var maja1pkpDif = ['6:21', '7:26', '7:51', '8:11', '9:01', '11:46', '14:26', '15:26', '16:11', '17:06', '19:26'];
  var dworcowa1pkpDif = ['6:22', '7:27', '7:52', '8:12', '9:02', '11:47', '14:27', '15:27', '16:12', '17:07', '19:27'];
  
  /*line 3 direction pkp*/
  var szpital3pkpDif = ['7:25', '8:05', '8:55', '9:55', '13:04', '14:10', '14:50', '15:10'];
  var malcuzynskiego3pkpDif = ['7:26', '8:06', '8:56', '9:56', '13:05', '14:11', '14:51', '15:11'];
  var szydlice3pkpDif = ['7:27', '8:07', '8:57', '9:57', '13:06', '14:12', '14:52', '15:12'];
  var konopnickiej3pkpDif = ['7:28', '8:08', '8:58', '9:58', '13:07', '14:13', '14:53', '15:13'];
  var staszica3pkpDif = ['7:29', '8:09', '8:59', '9:59', '13:08', '14:14', '14:54', '15:14'];
  var marca3pkpDif = ['7:30', '8:10', '9:00', '10:00', '13:09', '14:15', '14:55', '15:15'];
  var galeria3pkpDif = ['7:32', '8:12', '9:02', '10:02', '13:11', '14:17', '14:57', '15:17'];
  var kapliczna3pkpDif = ['7:34', '8:14', '9:04', '10:17', '13:13', '14:19', '14:59', '15:19'];
  var skarszewska3pkpDif = ['7:35', '8:15', '9:05', '10:18', '13:14', '14:20', '15:00', '15:20'];
  var matejki3pkpDif = ['7:36', '8:16', '9:06', '10:19', '13:15', '14:21', '15:01', '15:21'];
  var michalowskiego3pkpDif = ['7:37', '8:17', '9:07', '13:16', '14:22', '15:02', '15:22'];
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

  /*line 5 direction Staszica*/
  var pkp5staszicaDif = ['6:35', '11:55'];
  var dworcowa5staszicaDif = ['6:36', '11:56'];
  var maja5staszicaDif = ['6:37', '11:57'];
  var galeria5staszicaDif = ['6:39', '11:59'];
  var marca5staszicaDif = ['6:41', '12:01'];

  /*line 5 direction pkp*/
  var staszica5pkpDif = ['6:42', '12:02'];
  var rozana5pkpDif = ['6:44', '12:04'];
  var szopinskiego5pkpDif = ['6:47', '12:07'];
  var maja5pkpDif = ['6:49', '12:09'];
  var dworcowa5pkpDif = ['6:50', '12:10'];

  /*line 3/2 direction pkp*/ 
  var szpital6pkpDif = ['12:40'];
  var malcuzynskiego6pkpDif = ['12:41'];
  var szydlice6pkpDif = ['12:42'];
  var konopnickiej6pkpDif = ['12:43'];
  var staszica6pkpDif = ['12:44'];
  var marca6pkpDif = ['12:45'];
  var galeria6pkpDif = ['12;47'];
  var kapliczna6pkpDif = ['12:49'];
  var skarszewska6pkpDif = ['12:50'];
  var matejki6pkpDif = ['12:51'];
  var kossaka6pkpDif = ['12:52'];
  var tatarkiewicza6pkpDif = ['12:54'];
  var michalowicza6pkpDif = ['12:55'];
  var towarowa6pkpDif = ['12:56'];
  var budowlanych6pkpDif = ['12:57'];
  var drogowcow6pkpDif = ['12:59'];
  var dworcowa6pkpDif = ['13:00'];

  /*line 1/3 direction Mlynska*/
  var szpital7pkpDif = ['7:03'];
  var malcuzynskiego7pkpDif = ['7:04'];
  var szydlice7pkpDif = ['7:05'];
  var konopnickiej7pkpDif = ['7:06'];
  var rozana7pkpDif = ['7:07'];
  var sikorskiego7pkpDif = ['7:08'];
  var strzelecka7pkpDif = ['7:09'];
  var rogali7pkpDif = ['7:10'];
  var marchewicza7pkpDif = ['7:11'];
  var bolewskiej7pkpDif = ['7:12'];
  var szkolna7pkpDif = ['7:13'];
  var heykego7pkpDif = ['7:14'];
  var kartuska7pkpDif = ['7:15'];
  var szopinskiego7pkpDif = ['7:17'];

  /*direction szpital*/
  /*line 1 direction szpital*/
  var pkp1szpitalDif = ['5:29', '6:20', '7:40', '8:20', '10:35', '12:45', '13:23', '14:15', '14:25', '16:25', '18:30', '20:00'];
  var dworcowa1szpitalDif = ['5:30', '6:21', '7:41', '8:21', '10:36', '12:46', '13:24', '14:16', '14:26', '16:26', '20:01'];
  var maja1szpitalDif = ['5:31', '6:22', '7:42', '8:22', '10:37', '12:47', '13:25', '14:17', '14:27', '16:27', '20:02'];
  var szopinskiego1szpitalDif = ['5:33', '6:24', '7:44', '8:24', '10:39', '12:49', '13:27', '14:19', '14:29', '16:29', '18:35', '20:04'];
  var kartuska1szpitalDif = ['5:35', '6:26', '7:46', '8:26', '10:41', '12:51', '13:29', '14:21', '14:31', '16:31', '18:37', '20:06'];
  var heykego1szpitalDif = ['5:36', '6:27', '7:47', '8:27', '10:42', '12:52', '13:30', '14:22', '14:32', '16:32', '18:38', '20:07'];
  var szkolna1szpitalDif = ['5:38', '6:29', '7:49', '8:29', '10:44', '12:54', '13:32', '14:24', '14:34', '16:34', '18:40', '20:09'];
  var bolewskiej1szpitalDif = ['5:39', '6:30', '7:50', '8:30', '10:45', '12:55', '13:33', '14:25', '14:35', '16:35', '18:41', '20:10'];
  var marchewicza1szpitalDif = ['5:40', '6:31', '7:51', '8:31', '10:46', '12:56', '13:34', '14:26', '14:36', '16:36', '18:42', '20:11'];
  var rogali1szpitalDif = ['5:41', '6:32', '7:52', '8:32', '10:47', '12:57', '13:35', '14:27', '14:37', '16:37', '18:43', '20:12'];
  var strzelecka1szpitalDif = ['5:42', '6:33', '7:53', '8:33', '10:48', '12:58', '13:36', '14:28', '14:38', '16:38', '18:44', '20:13'];
  var sikorskiego1szpitalDif = ['5:43', '6:34', '7:54', '8:34', '10:49', '12:59', '13:37', '14:29', '14:39', '16:39', '18:45', '20:14'];
  var rozana1szpitalDif = ['5:44', '6:35', '7:55', '8:35', '10:50', '13:00', '13:38', '14:30', '14:40', '16:40', '18:46', '20:15'];
  var konopnickiej1szpitalDif = ['5:45', '6:36', '7:56', '8:36', '10:51', '13:01', '13:39', '14:31', '14:41', '16:41', '18:47', '20:16'];
  var szydlice1szpitalDif = ['5:46', '6:37', '7:57', '8:37', '10:52', '13:02', '13:40', '14:32', '14:42', '16:42', '18:48', '20:17'];
  var malcuzynskiego1szpitalDif = ['5:47', '6:38', '7:58', '8:38', '10:53', '13:03', '13:41', '14:33', '14:43', '16:43', '18:49', '20:18'];
  var matejki1szpitalDif = ['18:32'];
  var skarszewska1szpitalDif = ['18:33'];
  var kapliczna1szpitalDif = ['18:34'];

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
  var pkp3szpitalDif = ['6:57', '7:39', '10:10', '13:40', '14:40', '15:25', '17:10'];
  var michalowskiego3szpitalDif = ['6:58', '7:40', '10:11', '13:41', '14:41', '15:26', '17:11'];
  var matejki3szpitalDif = ['6:59', '7:41', '10:12', '13:42', '14:42', '15:27', '17:12'];
  var skarszewska3szpitalDif = ['7:00', '7:42', '10:13', '13:43', '14:43', '15:28', '17:13'];
  var kapliczna3szpitalDif = ['7:01', '7:43', '10:14', '13:44', '14:44', '15:29', '17:14'];
  var galeria3szpitalDif = ['7:03', '7:45', '10:16', '13:46', '14:46', '15:31', '17:16'];
  var marca3szpitalDif = ['7:05', '7:47', '10:18', '13:48', '14:48', '15:33', '17:18'];
  var staszica3szpitalDif = ['7:06', '7:48', '10:19', '13:49', '14:49', '15:34', '17:19'];
  var konopnickiej3szpitalDif = ['7:07', '7:49', '10:20', '13:50', '14:50', '15:35', '17:20'];
  var szydlice3szpitalDif = ['7:08', '7:50', '10:21', '13:51', '14:51', '15:36', '17:21'];
  var malcuzynskiego3szpitalDif = ['7:09', '7:51', '10:22', '13:52', '14:52', '15:37', '17:22'];

  /*line 4 direction szpital*/
  var pkp4szpitalDif = ['7:30', '12:25'];
  var michalowskiego4szpitalDif = ['7:31', '12:26'];
  var matejki4szpitalDif = ['7:32', '12:27'];
  var skarszewska4szpitalDif = ['7:33', '12:28'];
  var kapliczna4szpitalDif = ['7:34', '12:29'];
  var galeria4szpitalDif = ['7:36', '12:31'];
  var roltex4szpitalDif = ['7:37', '12:32'];
  var klasztorna4szpitalDif = ['7:38', '12:33'];
  var wierzysko4szpitalDif = ['7:40'];
  var chojnickaklasztorna4szpitalDif = ['7:42', '12:34'];
  var cegielnia4szpitalDif = ['7:43', '12:35'];
  var staszica4szpitalDif = ['7:44', '12:36'];
  var konopnickiej4szpitalDif = ['7:45', '12:37'];
  var szydlice4szpitalDif = ['7:46', '12:38'];
  var malcuzynskiego4szpitalDif = ['7:47', '12:39'];

  /*line 1/3 direction szpital*/
  var galeria7szpitalDif = ['7:18'];
  var marca7szpitalDif = ['7:20'];
  var staszica7szpitalDif = ['7:21'];
  var konopnickiej7szpitalDif = ['7:22'];
  var szydlice7szpitalDif = ['7:23'];
  var malcuzynskiego7szpitalDif = ['7:24'];

  /*line 2/3 direction szpital*/
  var pkp8szpitalDif = ['7:10'];
  var dworcowa8szpitalDif = ['7:11'];
  var drogowcow8szpitalDif = ['7:12'];
  var budowlanych8szpitalDif = ['7:14'];
  var towarowa8szpitalDif = ['7:15'];
  var michalowicza8szpitalDif = ['7:16'];
  var tatarkiewicza8szpitalDif = ['7:17'];
  var kossaka8szpitalDif = ['7:19'];
  var matejki8szpitalDif = ['7:20'];
  var skarszewska8szpitalDif = ['7:21'];
  var kapliczna8szpitalDif = ['7:22'];
  var galeria8szpitalDif = ['7:24'];
  var marca8szpitalDif = ['7:26'];
  var staszica8szpitalDif = ['7:27'];
  var konopnickiej8szpitalDif = ['7:28'];
  var szydlice8szpitalDif = ['7:29'];
  var malcuzynskiego8szpitalDif = ['7:30'];
  
  var szpital7pkpDif = ['7:03'];
  var szpital6pkpDif = ['12:35'];
 
  var dayTypeDif = "dni robocze";
};
