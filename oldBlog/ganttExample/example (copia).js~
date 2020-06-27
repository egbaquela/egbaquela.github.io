example();

function example() {

var tasks = [
{"startDate":new Date("Tue Aug 18 06:50:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 07:15:00 GMT-0300 2015"),"taskName":"10-A-03","status":"RUNNING"},
{"startDate":new Date("Tue Aug 18 07:15:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 08:00:00 GMT-0300 2015"),"taskName":"10-A-03-Demora","status":"FAILED"},
{"startDate":new Date("Tue Aug 18 08:00:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 08:20:00 GMT-0300 2015"),"taskName":"10-A-03","status":"SUCCEEDED"},
{"startDate":new Date("Tue Aug 18 08:20:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 09:15:00 GMT-0300 2015"),"taskName":"No Relevado","status":"NI"},
{"startDate":new Date("Tue Aug 18 09:15:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 10:00:00 GMT-0300 2015"),"taskName":"10-B-2-CCD1","status":"SUCCEEDED"},
{"startDate":new Date("Tue Aug 18 10:00:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 10:20:00 GMT-0300 2015"),"taskName":"Refrigerio","status":"KILLED"},
{"startDate":new Date("Tue Aug 18 10:20:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 11:20:00 GMT-0300 2015"),"taskName":"No Relevado","status":"NI"},
{"startDate":new Date("Tue Aug 18 11:20:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 11:50:00 GMT-0300 2015"),"taskName":"10-B-2-CCD2","status":"SUCCEEDED"},
{"startDate":new Date("Tue Aug 18 12:05:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 13:00:00 GMT-0300 2015"),"taskName":"20--12","status":"SUCCEEDED"},
{"startDate":new Date("Tue Aug 18 13:00:00 GMT-0300 2015"),"endDate":new Date("Tue Aug 18 14:00:00 GMT-0300 2015"),"taskName":"No Relevado","status":"NI"}
];



var taskStatus = {
    "SUCCEEDED" : "bar-succeeded",
    "FAILED" : "bar-failed",
    "RUNNING" : "bar-running",
    "KILLED" : "bar-killed",
    "NI" : "bar-ni"
};

var taskNames = [ "10-A-03", "10-A-03-Demora", "10-B-2-CCD1", "10-B-2-CCD2", "20--12", "Refrigerio", "No Relevado" ];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%H:%M";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);

};

