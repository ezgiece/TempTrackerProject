
class TempTracker {
constructor(value){
  this.value=value
}
 addNew() {
  if (this.value!=="") {
    temperatures.push(parseInt(this.value));
    var table = document.getElementById("table");
    var row= document.createElement("tr");
    var td = document.createElement("td");   
    td.innerHTML =this.value;
    row.appendChild(td);
    table.children[0].appendChild(row);
    return true;
  }
  return false;
  }

getAvg(temperatures){
  var sum=  temperatures.reduce(function(a,b){
    return a + b
  }, 0);
  avg.innerHTML=sum / temperatures.length;
}
  getMax(temperatures) {
    var max = document.getElementById("max");
    max.innerHTML= Math.max(...temperatures);
}
 getMin(temperatures) {
  var min = document.getElementById("min");
  min.innerHTML= Math.min(...temperatures);
}

}



var input = document.getElementById("newTemp");
var temperatures=[];
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var temp=new TempTracker(input.value);
  if (temp.addNew()) {
    input.value="";
    temp.getAvg(temperatures);
    temp.getMax(temperatures);
    temp.getMin(temperatures);
  } 
  }
});

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

setInputFilter(document.getElementById("newTemp"), function(value) {
  return /^\d*$/.test(value); });
