/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Variables: (The array is in another Data Page)
var message = '';
var timeOut;
// Randomly select one Item of the array passed as parameter
function getRandomValue( size ) {
  return numRamdom = Math.floor( Math.random() * size);
}

//Check if a property existing
function testingProperties (prop, name) {
  var addproperty = '';
  if ( prop !== null ) {
    addproperty += '<span class="' + name + '">' + prop + '</span>';
  }
  return addproperty;
} 

// Create a HTML string
function makingQuotes(quoteOb) {
  
  message = '<p class="quote">' + quoteOb.quote + '</p>';
  message += '<p class="source">' + quoteOb.source;  
  message += testingProperties(quoteOb.citation, 'citation');
  message += testingProperties(quoteOb.year, 'year');
  message += '</p>';
  return message;
}

// Print the HTML string into the document
function printQuote () {
  let indexRamdom = getRandomValue(quotes.length);
  document.getElementById('quote-box').innerHTML = makingQuotes( quotes[indexRamdom] );
  changeBackgroudColor();       
  window.clearTimeout(timeOut);
  timeOut = window.setTimeout( printQuote, 20000);
}

function changeBackgroudColor() {
  let color = getRandomValue(256);
  document.body.style.backgroundColor = 'hsl('+ color +', 54%, 46%)'; 
}

printQuote();

// Change quotes by clicking on the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);