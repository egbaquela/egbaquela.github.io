var tasks = [
{'startDate': new Date('Sep 2 06:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 06:15:00 GMT-0300 2015'), 'taskName':'Ingreso', 'status':'DEMORA', 'taskType':'task', 'element':'Ingreso'},
{'startDate': new Date('Sep 2 06:35:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 09:30:00 GMT-0300 2015'), 'taskName':'No hay autoriz de calc para abrir tolva o cargar horno', 'status':'DEMORATERNIUM', 'taskType':'task', 'element':'No hay autoriz de calc para abrir tolva o cargar horno'},
{'startDate': new Date('Sep 2 09:30:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 10:00:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 2 10:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 10:30:00 GMT-0300 2015'), 'taskName':'Refrigerio', 'status':'DEMORA', 'taskType':'task', 'element':'Refrigerio'},
{'startDate': new Date('Sep 2 10:55:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 11:05:00 GMT-0300 2015'), 'taskName':'Descarga de Tolvas En Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de Tolvas En Receptora'},
{'startDate': new Date('Sep 2 11:45:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 12:20:00 GMT-0300 2015'), 'taskName':'Descarga de camion', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de camion'},
{'startDate': new Date('Sep 2 12:30:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 13:00:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 2 12:30:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 13:25:00 GMT-0300 2015'), 'taskName':'Apertura de bolsones en Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Apertura de bolsones en Receptora'},
{'startDate': new Date('Sep 2 13:20:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 13:30:00 GMT-0300 2015'), 'taskName':'Limpieza de zarandas', 'status':'TAREA', 'taskType':'task', 'element':'Limpieza de zarandas'},
{'startDate': new Date('Sep 2 13:45:00 GMT-0300 2015'), 'endDate': new Date('Sep 2 14:00:00 GMT-0300 2015'), 'taskName':'Egreso', 'status':'DEMORA', 'taskType':'task', 'element':'Egreso'},
{'startDate': new Date('Sep 3 06:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 06:15:00 GMT-0300 2015'), 'taskName':'Ingreso', 'status':'DEMORA', 'taskType':'task', 'element':'Ingreso'},
{'startDate': new Date('Sep 3 06:50:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 07:10:00 GMT-0300 2015'), 'taskName':'Limpieza en Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Limpieza en Receptora'},
{'startDate': new Date('Sep 3 07:15:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 07:30:00 GMT-0300 2015'), 'taskName':'Fundentes', 'status':'TAREA', 'taskType':'task', 'element':'Fundentes'},
{'startDate': new Date('Sep 3 07:30:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 07:50:00 GMT-0300 2015'), 'taskName':'Apile en Silos', 'status':'TAREA', 'taskType':'task', 'element':'Apile en Silos'},
{'startDate': new Date('Sep 3 07:50:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 10:00:00 GMT-0300 2015'), 'taskName':'Apertura de bolsones en Silos de Calcinacion', 'status':'TAREA', 'taskType':'task', 'element':'Apertura de bolsones en Silos de Calcinacion'},
{'startDate': new Date('Sep 3 08:30:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 10:00:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 3 10:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 10:30:00 GMT-0300 2015'), 'taskName':'Refrigerio', 'status':'DEMORA', 'taskType':'task', 'element':'Refrigerio'},
{'startDate': new Date('Sep 3 11:15:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 11:25:00 GMT-0300 2015'), 'taskName':'Fundentes', 'status':'TAREA', 'taskType':'task', 'element':'Fundentes'},
{'startDate': new Date('Sep 3 11:25:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 12:15:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 3 12:20:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 13:30:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 3 13:45:00 GMT-0300 2015'), 'endDate': new Date('Sep 3 14:00:00 GMT-0300 2015'), 'taskName':'Egreso', 'status':'DEMORA', 'taskType':'task', 'element':'Egreso'},
{'startDate': new Date('Sep 10 14:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 14:15:00 GMT-0300 2015'), 'taskName':'Ingreso', 'status':'DEMORA', 'taskType':'task', 'element':'Ingreso'},
{'startDate': new Date('Sep 10 16:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 16:30:00 GMT-0300 2015'), 'taskName':'Descarga de camion', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de camion'},
{'startDate': new Date('Sep 10 16:30:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 16:50:00 GMT-0300 2015'), 'taskName':'Limpieza en Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Limpieza en Receptora'},
{'startDate': new Date('Sep 10 16:50:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 18:00:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 10 18:05:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 18:35:00 GMT-0300 2015'), 'taskName':'Refrigerio', 'status':'DEMORA', 'taskType':'task', 'element':'Refrigerio'},
{'startDate': new Date('Sep 10 18:50:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 19:30:00 GMT-0300 2015'), 'taskName':'No hay autoriz de calc para abrir tolva o cargar horno', 'status':'DEMORATERNIUM', 'taskType':'task', 'element':'No hay autoriz de calc para abrir tolva o cargar horno'},
{'startDate': new Date('Sep 10 19:30:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 21:00:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 10 20:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 20:30:00 GMT-0300 2015'), 'taskName':'Fundentes', 'status':'TAREA', 'taskType':'task', 'element':'Fundentes'},
{'startDate': new Date('Sep 10 20:40:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 20:55:00 GMT-0300 2015'), 'taskName':'Fundentes', 'status':'TAREA', 'taskType':'task', 'element':'Fundentes'},
{'startDate': new Date('Sep 10 21:10:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 21:25:00 GMT-0300 2015'), 'taskName':'Descarga de camion', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de camion'},
{'startDate': new Date('Sep 10 21:45:00 GMT-0300 2015'), 'endDate': new Date('Sep 10 22:00:00 GMT-0300 2015'), 'taskName':'Egreso', 'status':'DEMORA', 'taskType':'task', 'element':'Egreso'},
{'startDate': new Date('Sep 13 22:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 13 22:15:00 GMT-0300 2015'), 'taskName':'Ingreso', 'status':'DEMORA', 'taskType':'task', 'element':'Ingreso'},
{'startDate': new Date('Sep 13 23:05:00 GMT-0300 2015'), 'endDate': new Date('Sep 13 23:20:00 GMT-0300 2015'), 'taskName':'Descarga de Tolvas En Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de Tolvas En Receptora'},
{'startDate': new Date('Sep 13 23:20:00 GMT-0300 2015'), 'endDate': new Date('Sep 13 23:55:00 GMT-0300 2015'), 'taskName':'Limpieza en Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Limpieza en Receptora'},
{'startDate': new Date('Sep 14 00:45:00 GMT-0300 2015'), 'endDate': new Date('Sep 14 01:00:00 GMT-0300 2015'), 'taskName':'Descarga de Tolvas En Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de Tolvas En Receptora'},
{'startDate': new Date('Sep 14 01:05:00 GMT-0300 2015'), 'endDate': new Date('Sep 14 01:25:00 GMT-0300 2015'), 'taskName':'Carga de camion en Silos de Calcinacion', 'status':'TAREA', 'taskType':'task', 'element':'Carga de camion en Silos de Calcinacion'},
{'startDate': new Date('Sep 14 01:25:00 GMT-0300 2015'), 'endDate': new Date('Sep 14 02:15:00 GMT-0300 2015'), 'taskName':'Descarga de Tolvas En Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de Tolvas En Receptora'},
{'startDate': new Date('Sep 14 02:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 14 02:30:00 GMT-0300 2015'), 'taskName':'Refrigerio', 'status':'DEMORA', 'taskType':'task', 'element':'Refrigerio'},
{'startDate': new Date('Sep 14 02:10:00 GMT-0300 2015'), 'endDate': new Date('Sep 14 03:20:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 14 02:35:00 GMT-0300 2015'), 'endDate': new Date('Sep 14 02:55:00 GMT-0300 2015'), 'taskName':'Descarga de Tolvas En Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de Tolvas En Receptora'},
{'startDate': new Date('Sep 14 03:35:00 GMT-0300 2015'), 'endDate': new Date('Sep 14 04:05:00 GMT-0300 2015'), 'taskName':'Apertura de bolsones en Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Apertura de bolsones en Receptora'},
{'startDate': new Date('Sep 14 04:25:00 GMT-0300 2015'), 'endDate': new Date('Sep 14 04:50:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 14 05:45:00 GMT-0300 2015'), 'endDate': new Date('Sep 14 06:00:00 GMT-0300 2015'), 'taskName':'Egreso', 'status':'DEMORA', 'taskType':'task', 'element':'Egreso'},
{'startDate': new Date('Sep 15 22:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 15 22:15:00 GMT-0300 2015'), 'taskName':'Ingreso', 'status':'DEMORA', 'taskType':'task', 'element':'Ingreso'},
{'startDate': new Date('Sep 15 22:40:00 GMT-0300 2015'), 'endDate': new Date('Sep 15 22:50:00 GMT-0300 2015'), 'taskName':'Descarga de Tolvas En Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de Tolvas En Receptora'},
{'startDate': new Date('Sep 15 23:05:00 GMT-0300 2015'), 'endDate': new Date('Sep 15 23:20:00 GMT-0300 2015'), 'taskName':'Descarga de Tolvas En Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de Tolvas En Receptora'},
{'startDate': new Date('Sep 15 23:30:00 GMT-0300 2015'), 'endDate': new Date('Sep 15 23:45:00 GMT-0300 2015'), 'taskName':'Descarga de Tolvas En Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de Tolvas En Receptora'},
{'startDate': new Date('Sep 15 23:50:00 GMT-0300 2015'), 'endDate': new Date('Sep 15 00:05:00 GMT-0300 2015'), 'taskName':'Descarga de Tolvas En Receptora', 'status':'TAREA', 'taskType':'task', 'element':'Descarga de Tolvas En Receptora'},
{'startDate': new Date('Sep 16 00:05:00 GMT-0300 2015'), 'endDate': new Date('Sep 16 01:20:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 16 02:00:00 GMT-0300 2015'), 'endDate': new Date('Sep 16 02:30:00 GMT-0300 2015'), 'taskName':'Refrigerio', 'status':'DEMORA', 'taskType':'task', 'element':'Refrigerio'},
{'startDate': new Date('Sep 16 03:15:00 GMT-0300 2015'), 'endDate': new Date('Sep 16 04:45:00 GMT-0300 2015'), 'taskName':'Carga de Hornos de Calcinacion desde playa', 'status':'TAREA', 'taskType':'task', 'element':'Carga de Hornos de Calcinacion desde playa'},
{'startDate': new Date('Sep 16 05:45:00 GMT-0300 2015'), 'endDate': new Date('Sep 16 06:00:00 GMT-0300 2015'), 'taskName':'Egreso', 'status':'DEMORA', 'taskType':'task', 'element':'Egreso'},



];



jsonData = [
{"date": "Wed Aug 19 08:10:00 GMT-0300 2015", "taskName":"LF02","elementType": "tarea", "element": "LF02", "type":"startDate"},
{"date": "Wed Aug 19 08:30:00 GMT-0300 2015", "taskName":"LF02","elementType": "tarea", "element": "LF02", "type":"endDate"},
{"date": "Wed Aug 19 08:10:00 GMT-0300 2015", "taskName":"LF02","elementType": "operario", "element": "operario01", "type":"startDate"},
{"date": "Wed Aug 19 08:30:00 GMT-0300 2015", "taskName":"LF02","elementType": "operario", "element": "operario01", "type":"endDate"},
{"date": "Wed Aug 19 08:10:00 GMT-0300 2015", "taskName":"LF02","elementType": "maquinaria", "element": "autoelevador01", "type":"startDate"},
{"date": "Wed Aug 19 08:30:00 GMT-0300 2015", "taskName":"LF02","elementType": "maquinaria", "element": "autoelevador01", "type":"endDate"},
{"date": "Wed Aug 19 08:10:00 GMT-0300 2015", "taskName":"LF02","elementType": "delay", "element": "DEM01", "type":"startDate"},
{"date": "Wed Aug 19 08:30:00 GMT-0300 2015", "taskName":"LF02","elementType": "delay", "element": "DEM01", "type":"endDate"}
]

var i;
var jsonDataStart = [];
var jsonDataEnd = [];
var jsonDataFinal = [];

for (i=0; i<jsonData.length; i++){
  jsonData[i].date = new Date(jsonData[i].date);
  if (jsonData[i].type == "startDate"){
    jsonDataStart.push(jsonData[i]);
  }else{
    jsonDataEnd.push(jsonData[i]);
  } 
}

var temp
for (i=0; i<jsonData.length/2; i++){
  temp = {startDate: jsonDataStart[i].date,
    endDate: jsonDataEnd[i].date,
    taskName: jsonDataEnd[i].element,
    elementType: jsonDataEnd[i].elementType,
    element: jsonDataEnd[i].element
  }
  jsonDataFinal.push(temp);
}

//var tasks = jsonDataFinal


var taskStatus = {
    "TAREA": "bar-succeeded",
    "DEMORA" : "bar-killed",
    "DEMORATERNIUM" : "bar-failed",
    "RUNNING" : "bar-running",
    "KILLED" : "bar-killed",
    "NI" : "bar-ni"
};



var taskNames = ["Ingreso", 
"Refrigerio",
"Egreso",
"No hay autoriz de calc para abrir tolva o cargar horno",
"Apertura de bolsones en Receptora",
"Apertura de bolsones en Silos de Calcinacion",
"Apile en Silos",
"Carga de camion en Silos de Calcinacion",
"Carga de Hornos de Calcinacion desde playa",
"Descarga de camion",
"Descarga de Tolvas En Receptora",
"Fundentes",
"Limpieza de zarandas",
"Limpieza en Receptora",

 ];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%H:%M";
var timeDomainString = "1day";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);

var margin = {
     top : 20,
     right : 40,
     bottom : 20,
     left : 80
};
gantt.margin(margin);

gantt.timeDomainMode("fixed");
changeTimeDomain(timeDomainString);

gantt(tasks);

function changeTimeDomain(timeDomainString) {
    this.timeDomainString = timeDomainString;
    switch (timeDomainString) {
    case "20150902":
        alert("aca");
	format = "%H:%M:";
	gantt.timeDomain([ new Date("Sep 2 06:00:00 GMT-0300 2015"), new Date("Sep 2 14:00:00 GMT-0300 2015")]);
	break;
    case "20150903":
	format = "%H:%M";
	gantt.timeDomain([ new Date("Sep 3 06:00:00 GMT-0300 2015"), new Date("Sep 3 14:00:00 GMT-0300 2015")]);
	break;

    case "20150910":
	format = "%H:%M";
	gantt.timeDomain([ new Date("Sep 10 14:00:00 GMT-0300 2015"), new Date("Sep 10 22:00:00 GMT-0300 2015")]);
	break;

    case "20150913":
	format = "%H:%M";
	gantt.timeDomain([ new Date("Sep 13 22:00:00 GMT-0300 2015"), new Date("Sep 14 06:00:00 GMT-0300 2015")]);
	break;

    case "20150915":
	format = "%H:%M";
	gantt.timeDomain([ new Date("Sep 15 22:00:00 GMT-0300 2015"), new Date("Sep 16 06:00:00 GMT-0300 2015")]);
	break;
	
    default:
	format = "%H:%M"

    }
    gantt.tickFormat(format);
    gantt.redraw(tasks);
}

function getEndDate() {
    var lastEndDate = Date.now();
    if (tasks.length > 0) {
	lastEndDate = tasks[tasks.length - 1].endDate;
    }

    return lastEndDate;
}

function addTask() {

    var lastEndDate = getEndDate();
    var taskStatusKeys = Object.keys(taskStatus);
    var taskStatusName = taskStatusKeys[Math.floor(Math.random() * taskStatusKeys.length)];
    var taskName = taskNames[Math.floor(Math.random() * taskNames.length)];

    tasks.push({
	"startDate" : d3.time.hour.offset(lastEndDate, Math.ceil(1 * Math.random())),
	"endDate" : d3.time.hour.offset(lastEndDate, (Math.ceil(Math.random() * 3)) + 1),
	"taskName" : taskName,
	"status" : taskStatusName
    });

    changeTimeDomain(timeDomainString);
    gantt.redraw(tasks);
};

function removeTask() {
    tasks.pop();
    changeTimeDomain(timeDomainString);
    gantt.redraw(tasks);
};
