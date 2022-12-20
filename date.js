let from = document.getElementById("from");
let to = document.getElementById("to");
let result = document.getElementById("result");
// let date1 = new Date("01/12/2022");
// let date2 = new Date("31/12/2022");

function calculate(){
    // alert("clicked");
    let fromDate= new Date(from.value);
    let toDate= new Date(to.value);
    let fromTime = fromDate.getTime();
    let toTime = toDate.getTime();
    let diff = toTime- fromTime;
    let day = diff / (1000 * 60 * 60 * 24);
    result.append(day);
}