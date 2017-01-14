var currentEquation = "" //Holds the current equation
var previousEquations = [] //Holds the last 10 equation entries
var currentEntry = document.getElementById("current-entry") //Pointer to current-entry on HTML
var previousEntries = document.getElementById("prev-entry") //Pointer to prev-entry on HTML

//Adds numbers and operations to the current equation
function add(input) {
  currentEquation += input
  console.log("Added " + input)
  currentEntry.innerHTML = currentEquation
}

//Shell function for clear method
function clr(){
  clear()
}

//Clears the current equation
function clear() {
  currentEquation = []
  currentEntry.innerHTML = ""
  console.log("Cleared")
}

//This function removes the last item added to currentEquation
function pop() {
  currentEquation = currentEquation.substring(0, currentEquation.length - 1)
  console.log("Popped")
  currentEntry.innerHTML = currentEquation
}

//Used to load the previous 10 equations on screen from most recent to oldest
function loadPreviousEntries() {
  console.log("Start load previousEquations")
  previousEntries.innerHTML = ""
  for (i = 0; i < previousEquations.length; i++) {
    previousEntries.innerHTML = previousEntries.innerHTML + previousEquations[i] + "<br>"
  }
}

//Used the stored information in currentEquation to calculate the sum or product
function calculate(){
  try {
    var sum = eval(currentEquation)
  } catch (e) {
    alert("Not a valid equation")
    console.log(sum)
  }
  if (sum !== undefined){
    console.log("Calculated " + sum)
    currentEquation  = currentEquation + "=" + sum
    previousEquations.push(currentEquation)
    loadPreviousEntries()
    clear()
  }
  return sum
}

//TODO: remove when complete
//Extra function for testing
window.onload = function() {
  console.log(eval(8^2))
}
