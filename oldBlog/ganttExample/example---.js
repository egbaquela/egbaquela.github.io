var tasks = [
{"startDate":new Date("Wed Aug 19 08:10:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 08:30:00 GMT-0300 2015"),"taskName":"LF02","status":"TAREA","taskType": "task", "element": "LF02"},
{"startDate":new Date("Wed Aug 19 07:00:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 07:15:00 GMT-0300 2015"),"taskName":"LF03","status":"TAREA","taskType": "task", "element": "LF03"},
{"startDate":new Date("Wed Aug 19 08:35:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 09:00:00 GMT-0300 2015"),"taskName":"CCD01","status":"TAREA","taskType": "task", "element": "CCD01"},
{"startDate":new Date("Wed Aug 19 12:35:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 13:00:00 GMT-0300 2015"),"taskName":"CCD03","status":"TAREA","taskType": "task", "element": "CCD03"},
{"startDate":new Date("Wed Aug 19 11:40:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 12:30:00 GMT-0300 2015"),"taskName":"CCD04","status":"TAREA", "progress": 0.75,"taskType": "task", "element": "CCD04"},
{"startDate":new Date("Wed Aug 19 13:00:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 13:40:00 GMT-0300 2015"),"taskName":"CCD04","status":"TAREA", "progress": 0.25,"taskType": "task", "element": "CCD04"},
{"startDate":new Date("Wed Aug 19 06:35:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 07:00:00 GMT-0300 2015"),"taskName":"ALMA05","status":"TAREA","taskType": "task", "element": "ALMA05"},
{"startDate":new Date("Wed Aug 19 09:00:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 10:00:00 GMT-0300 2015"),"taskName":"ALMA06","status":"TAREA","taskType": "task", "element": "ALMA06"},
{"startDate":new Date("Wed Aug 19 06:00:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 06:35:00 GMT-0300 2015"),"taskName":"DEM01","status":"DEMORA","taskType": "delay", "element": "DEM01"},
{"startDate":new Date("Wed Aug 19 07:15:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 08:10:00 GMT-0300 2015"),"taskName":"DEM02","status":"DEMORATERNIUM","taskType": "delay", "element": "DEM02"},
{"startDate":new Date("Wed Aug 19 08:35:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 10:00:00 GMT-0300 2015"),"taskName":"DEM02","status":"DEMORATERNIUM","taskType": "delay", "element": "DEM02"},
{"startDate":new Date("Wed Aug 19 10:30:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 11:00:00 GMT-0300 2015"),"taskName":"DEM04","status":"DEMORA","taskType": "delay", "element": "DEM04"},
{"startDate":new Date("Wed Aug 19 10:00:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 10:30:00 GMT-0300 2015"),"taskName":"DEM05","status":"DEMORA","taskType": "delay", "element": "DEM05"},
{"startDate":new Date("Wed Aug 19 13:40:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 19 14:00:00 GMT-0300 2015"),"taskName":"DEM07","status":"DEMORA","taskType": "delay", "element": "DEM07"},
{"startDate":new Date("Thu Aug 20 09:30:00 GMT-0300 2015"),"endDate":new Date("Thu Aug 20 10:00:00 GMT-0300 2015"),"taskName":"LF03","status":"TAREA","taskType": "task", "element": "LF03"},
{"startDate":new Date("Thu Aug 20 12:00:00 GMT-0300 2015"),"endDate":new Date("Thu Aug 20 12:15:00 GMT-0300 2015"),"taskName":"CCD04","status":"TAREA","taskType": "task", "element": "CCD04"},
{"startDate":new Date("Thu Aug 20 07:20:00 GMT-0300 2015"),"endDate":new Date("Thu Aug 20 07:30:00 GMT-0300 2015"),"taskName":"ALMA01","status":"TAREA","taskType": "task", "element": "ALMA01"},
{"startDate":new Date("Thu Aug 20 08:10:00 GMT-0300 2015"),"endDate":new Date("Thu Aug 20 09:20:00 GMT-0300 2015"),"taskName":"ALMA04","status":"TAREA","taskType": "task", "element": "ALMA04"},
{"startDate":new Date("Thu Aug 20 10:45:00 GMT-0300 2015"),"endDate":new Date("Thu Aug 20 11:20:00 GMT-0300 2015"),"taskName":"ALMA04","status":"TAREA","taskType": "task", "element": "ALMA04"},
{"startDate":new Date("Thu Aug 20 06:50:00 GMT-0300 2015"),"endDate":new Date("Thu Aug 20 07:20:00 GMT-0300 2015"),"taskName":"ALMA05","status":"TAREA","taskType": "task", "element": "ALMA05"},
{"startDate":new Date("Thu Aug 20 07:30:00 GMT-0300 2015"),"endDate":new Date("Thu Aug 20 07:50:00 GMT-0300 2015"),"taskName":"CONV01","status":"TAREA","taskType": "task", "element": "CONV01"},
{"startDate":new Date("Thu Aug 20 10:10:00 GMT-0300 2015"),"endDate":new Date("Thu Aug 20 10:45:00 GMT-0300 2015"),"taskName":"DEM03","status":"DEMORA","taskType": "delay", "element": "DEM03"},
{"startDate":new Date("Fri Aug 21 07:00:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 07:25:00 GMT-0300 2015"),"taskName":"LF01","status":"TAREA","taskType": "task", "element": "LF01"},
{"startDate":new Date("Fri Aug 21 07:50:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 08:15:00 GMT-0300 2015"),"taskName":"LF02","status":"TAREA","taskType": "task", "element": "LF02"},
{"startDate":new Date("Fri Aug 21 08:20:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 08:30:00 GMT-0300 2015"),"taskName":"CCD01","status":"TAREA","taskType": "task", "element": "CCD01"},
{"startDate":new Date("Fri Aug 21 09:50:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 10:05:00 GMT-0300 2015"),"taskName":"CCD02","status":"TAREA","taskType": "task", "element": "CCD02"},
{"startDate":new Date("Fri Aug 21 10:05:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 10:40:00 GMT-0300 2015"),"taskName":"CCD04","status":"TAREA","taskType": "task", "element": "CCD04"},
{"startDate":new Date("Fri Aug 21 12:00:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 12:15:00 GMT-0300 2015"),"taskName":"ALMA03","status":"TAREA","taskType": "task", "element": "ALMA03"},
{"startDate":new Date("Fri Aug 21 11:35:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 13:40:00 GMT-0300 2015"),"taskName":"ALMA06","status":"TAREA","taskType": "task", "element": "ALMA06"},
{"startDate":new Date("Fri Aug 21 06:00:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 06:40:00 GMT-0300 2015"),"taskName":"DEM01","status":"DEMORA","taskType": "delay", "element": "DEM01"},
{"startDate":new Date("Fri Aug 21 07:25:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 07:50:00 GMT-0300 2015"),"taskName":"DEM02","status":"DEMORATERNIUM","taskType": "delay", "element": "DEM02"},
{"startDate":new Date("Fri Aug 21 08:30:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 09:50:00 GMT-0300 2015"),"taskName":"DEM02","status":"DEMORATERNIUM","taskType": "delay", "element": "DEM02"},
{"startDate":new Date("Fri Aug 21 10:45:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 11:15:00 GMT-0300 2015"),"taskName":"DEM05","status":"DEMORA","taskType": "delay", "element": "DEM05"},
{"startDate":new Date("Fri Aug 21 13:40:00 GMT-0300 2015"),"endDate":new Date("Fri Aug 21 14:00:00 GMT-0300 2015"),"taskName":"DEM07","status":"DEMORA","taskType": "delay", "element": "DEM07"},
{"startDate":new Date("Mon Aug 24 06:45:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 07:10:00 GMT-0300 2015"),"taskName":"LF01","status":"TAREA","taskType": "task", "element": "LF01"},
{"startDate":new Date("Mon Aug 24 07:20:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 07:30:00 GMT-0300 2015"),"taskName":"LF02","status":"TAREA","taskType": "task", "element": "LF02", "progress":0.25},
{"startDate":new Date("Mon Aug 24 07:10:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 07:20:00 GMT-0300 2015"),"taskName":"LF03","status":"TAREA","taskType": "task", "element": "LF03", "progress":0.50},
{"startDate":new Date("Mon Aug 24 09:45:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 10:00:00 GMT-0300 2015"),"taskName":"LF03","status":"TAREA","taskType": "task", "element": "LF03", "progress":0.50},
{"startDate":new Date("Mon Aug 24 07:30:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 07:50:00 GMT-0300 2015"),"taskName":"CCD01","status":"TAREA","taskType": "task", "element": "CCD01"},
{"startDate":new Date("Mon Aug 24 08:50:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 09:15:00 GMT-0300 2015"),"taskName":"CCD01","status":"TAREA","taskType": "task", "element": "CCD01"},
{"startDate":new Date("Mon Aug 24 08:10:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 08:40:00 GMT-0300 2015"),"taskName":"CCD02","status":"TAREA","taskType": "task", "element": "CCD02"},
{"startDate":new Date("Mon Aug 24 09:15:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 09:35:00 GMT-0300 2015"),"taskName":"CCD03","status":"TAREA","taskType": "task", "element": "CCD03"},
{"startDate":new Date("Mon Aug 24 06:00:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 06:35:00 GMT-0300 2015"),"taskName":"DEM01","status":"DEMORA","taskType": "delay", "element": "DEM01"},
{"startDate":new Date("Mon Aug 24 07:50:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 08:10:00 GMT-0300 2015"),"taskName":"DEM02","status":"DEMORATERNIUM","taskType": "delay", "element": "DEM02"},
{"startDate":new Date("Mon Aug 24 10:30:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 11:45:00 GMT-0300 2015"),"taskName":"DEM04","status":"DEMORA","taskType": "delay", "element": "DEM04"},
{"startDate":new Date("Mon Aug 24 10:40:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 10:30:00 GMT-0300 2015"),"taskName":"DEM05","status":"DEMORA","taskType": "delay", "element": "DEM05"},
{"startDate":new Date("Mon Aug 24 13:35:00 GMT-0300 2015"),"endDate":new Date("Mon Aug 24 14:00:00 GMT-0300 2015"),"taskName":"DEM07","status":"DEMORA","taskType": "delay", "element": "DEM07"},
{"startDate":new Date("Tue Aug 25 11:20:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 12:00:00 GMT-0300 2015"),"taskName":"LF03","status":"TAREA","taskType": "task", "element": "LF03"},
{"startDate":new Date("Tue Aug 25 07:50:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 08:00:00 GMT-0300 2015"),"taskName":"ALMA01","status":"TAREA","taskType": "task", "element": "ALMA01"},
{"startDate":new Date("Tue Aug 25 10:30:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 10:40:00 GMT-0300 2015"),"taskName":"ALMA02","status":"TAREA","taskType": "task", "element": "ALMA02"},
{"startDate":new Date("Tue Aug 25 09:25:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 10:30:00 GMT-0300 2015"),"taskName":"ALMA04","status":"TAREA","taskType": "task", "element": "ALMA04"},
{"startDate":new Date("Tue Aug 25 12:40:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 13:20:00 GMT-0300 2015"),"taskName":"ALMA04","status":"TAREA","taskType": "task", "element": "ALMA04"},
{"startDate":new Date("Tue Aug 25 06:55:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 07:50:00 GMT-0300 2015"),"taskName":"ALMA05","status":"TAREA","taskType": "task", "element": "ALMA05"},
{"startDate":new Date("Tue Aug 25 13:20:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 13:35:00 GMT-0300 2015"),"taskName":"ALMA05","status":"TAREA","taskType": "task", "element": "ALMA05"},
{"startDate":new Date("Tue Aug 25 08:25:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 08:50:00 GMT-0300 2015"),"taskName":"CONV01","status":"TAREA","taskType": "task", "element": "CONV01"},
{"startDate":new Date("Tue Aug 25 06:00:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 06:55:00 GMT-0300 2015"),"taskName":"DEM01","status":"DEMORA","taskType": "delay", "element": "DEM01"},
{"startDate":new Date("Tue Aug 25 08:00:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 08:25:00 GMT-0300 2015"),"taskName":"DEM03","status":"DEMORA","taskType": "delay", "element": "DEM03"},
{"startDate":new Date("Tue Aug 25 09:05:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 09:25:00 GMT-0300 2015"),"taskName":"DEM03","status":"DEMORA","taskType": "delay", "element": "DEM03"},
{"startDate":new Date("Tue Aug 25 10:40:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 11:20:00 GMT-0300 2015"),"taskName":"DEM03","status":"DEMORA","taskType": "delay", "element": "DEM03"},
{"startDate":new Date("Tue Aug 25 13:35:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 25 14:00:00 GMT-0300 2015"),"taskName":"DEM07","status":"DEMORA","taskType": "delay", "element": "DEM07"},
{"startDate":new Date("Wed Aug 26 06:45:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 07:10:00 GMT-0300 2015"),"taskName":"LF01","status":"TAREA","taskType": "task", "element": "LF01"},
{"startDate":new Date("Wed Aug 26 09:45:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 10:30:00 GMT-0300 2015"),"taskName":"LF02","status":"TAREA","taskType": "task", "element": "LF02"},
{"startDate":new Date("Wed Aug 26 10:40:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 11:00:00 GMT-0300 2015"),"taskName":"LF03","status":"TAREA","taskType": "task", "element": "LF03"},
{"startDate":new Date("Wed Aug 26 07:35:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 08:00:00 GMT-0300 2015"),"taskName":"CCD01","status":"TAREA","taskType": "task", "element": "CCD01"},
{"startDate":new Date("Wed Aug 26 08:40:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 09:00:00 GMT-0300 2015"),"taskName":"CCD02","status":"TAREA","taskType": "task", "element": "CCD02"},
{"startDate":new Date("Wed Aug 26 08:00:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 08:30:00 GMT-0300 2015"),"taskName":"CCD03","status":"TAREA","taskType": "task", "element": "CCD03"},
{"startDate":new Date("Wed Aug 26 06:00:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 06:40:00 GMT-0300 2015"),"taskName":"DEM01","status":"DEMORA","taskType": "delay", "element": "DEM01"},
{"startDate":new Date("Wed Aug 26 08:30:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 08:40:00 GMT-0300 2015"),"taskName":"DEM02","status":"DEMORATERNIUM","taskType": "delay", "element": "DEM02"},
{"startDate":new Date("Wed Aug 26 09:20:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 09:45:00 GMT-0300 2015"),"taskName":"DEM02","status":"DEMORATERNIUM","taskType": "delay", "element": "DEM02"},
{"startDate":new Date("Wed Aug 26 11:00:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 11:45:00 GMT-0300 2015"),"taskName":"DEM05","status":"DEMORA","taskType": "delay", "element": "DEM05"},
{"startDate":new Date("Wed Aug 26 13:20:00 GMT-0300 2015"),"endDate":new Date("Wed Aug 26 14:00:00 GMT-0300 2015"),"taskName":"DEM07","status":"DEMORA","taskType": "delay", "element": "DEM07"},


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



var taskNames = [ "LF01", "LF02", "LF03", "CCD01", "CCD02", "CCD03", "CCD04", "ALMA01", "ALMA02", 
"ALMA03","ALMA04","ALMA05","ALMA06","ALMA07", "CONV01", "DEM01","DEM02","DEM03","DEM04","DEM05",
"DEM06","DEM07" ];

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
    case "20150819":
	format = "%H:%M:";
	//gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -1), getEndDate() ]);	
	gantt.timeDomain([ new Date("Wed Aug 19 06:00:00 GMT-0300 2015"), new Date("Wed Aug 19 14:00:00 GMT-0300 2015")]);
	break;
    case "20150820":
	format = "%H:%M";
	gantt.timeDomain([ new Date("Thu Aug 20 06:00:00 GMT-0300 2015"), new Date("Thu Aug 20 14:00:00 GMT-0300 2015")]);
	break;

    case "20150821":
	format = "%H:%M";
	gantt.timeDomain([ new Date("Fri Aug 21 06:00:00 GMT-0300 2015"), new Date("Fri Aug 21 14:00:00 GMT-0300 2015")]);
	break;

    case "20150824":
	format = "%H:%M";
	gantt.timeDomain([ new Date("Mon Aug 24 06:00:00 GMT-0300 2015"), new Date("Mon Aug 24 14:00:00 GMT-0300 2015")]);
	break;

    case "20150825":
	format = "%H:%M";
	gantt.timeDomain([ new Date("Tue Aug 25 06:00:00 GMT-0300 2015"), new Date("Tue Aug 25 14:00:00 GMT-0300 2015")]);
	break;
	
    case "20150826":
	format = "%H:%M";
	gantt.timeDomain([ new Date("Wed Aug 26 06:00:00 GMT-0300 2015"), new Date("Wed Aug 26 14:00:00 GMT-0300 2015")]);
	break;
	
    case "ultimaSemana":
	format = "%a %H:%M";
	gantt.timeDomain([ d3.time.day.offset(getEndDate(), -7), getEndDate() ]);
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
