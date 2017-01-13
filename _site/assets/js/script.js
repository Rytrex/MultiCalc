var currentEquation = [] //Holds the current equation
var previousEquations = [] //Holds the last 10 equation entries
var currentEntry = document.getElementById("current-entry") //Pointer to current-entry on HTML
var previousEntries = document.getElementById("prev-entry") //Pointer to prev-entry on HTML

//Adds numbers and operations to the current equation
function add(input) {
  currentEquation.push(input)
  console.log("Added " + input)
  currentEntry.innerHTML = currentEntry.innerHTML + input
}

//Checks if the inputed var is an operation symbol
function isSymbol(input) {
  if (currentEquation[0] === "+" || currentEquation[0] === "-" || currentEquation[0] === "*" || currentEquation[0] === "/") {
    return true
  }
  return false
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
  console.log("Start Calculator")
  if (isSymbol()) {
    console.log("Detected " + currentEquation[0])
  }
  else {
    var sum = currentEquation[0]
    //For loop is used to iterate through currentEquation to complete the calculations
    for (i = 1; i < currentEquation.length; i = i + 2) {
      if (currentEquation[i] === "+") {
        console.log("Detected " + currentEquation[i])
        if (isSymbol()) {
          console.log("Detected " + currentEquation[i + 1])
          break
        }
        else{
          sum = sum + currentEquation[i + 1]
          console.log("Added " + currentEquation[i + 1])
        }
      }
      else if (currentEquation[i] === "-") {
        console.log("Detected " + currentEquation[i])
        if (isSymbol()) {
          console.log("Detected " + currentEquation[i + 1])
          break
        }
        else{
          sum = sum - currentEquation[i + 1]
          console.log("Subtracted " + currentEquation[i + 1])
        }
      }
      else if (currentEquation[i] === "*") {
        console.log("Detected " + currentEquation[i])
        if (isSymbol()) {
          console.log("Detected " + currentEquation[i + 1])
          break
        }
        else{
          sum = sum * currentEquation[i + 1]
          console.log("Multiplied " + currentEquation[i + 1])
        }
      }
      else if (currentEquation[i] === "/") {
        console.log("Detected " + currentEquation[i])
        if (isSymbol()) {
          console.log("Detected " + currentEquation[i + 1])
          break
        }
        else{
          //Checks for dividing by zero
          if (currentEquation[i + 1] == 0) {
            sum = NaN
            console.log("Divided " + currentEquation[i + 1])
          }
          else {
            sum = sum / currentEquation[i + 1]
            console.log("Divided " + currentEquation[i + 1])
          }
        }
      }
    }
    console.log("Totaled " + sum)
    if (currentEquation.length % 2 == 1 && currentEquation.length > 2){
      if (previousEquations.length === 10) {
        previousEquations.shift()
      }
      currentEquation.push("=")
      currentEquation.push(sum)
      var stringEquation = ""
      for (i = 0; i < currentEquation.length; i++) {
        stringEquation += currentEquation[i]
      }
      console.log(stringEquation)
      previousEquations.push(stringEquation)
      console.log("Cached current equation")
      currentEntry.innerHTML = ""
    }
    else {
      alert("Not a valid equation")
    }
    if (currentEquation.length > 0 ) {
      loadPreviousEntries()
    }
    clear()
    return sum
  }
}
