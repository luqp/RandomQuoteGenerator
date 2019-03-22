/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/* Thank you for lessons of Unit 1, I really enjoyed  
   I hope to  "Exceeds Expectations" grade.
*/
// Variables: (The array is in another Data Page)
var message = '';
var timeOut;
// Randomly select one number of the size passed as parameter
function getRandomValue(size) {
  return numRamdom = Math.floor(Math.random() * size);
}
//Generating quote's property if existing and add it to a HTML structure
function makingProperty(prop, name) {
  var addproperty = '';
  if (prop !== null) {
    addproperty += '<span class="' + name + '">' + prop + '</span>';
  }
  return addproperty;
}
//Generating a list of tags if existing and add them to a HTML structure
function makingTags(tags) {
  var addTags = '';
  if (tags !== null) {
    addTags += '<ul class="tags">';
    for (let i = 0; i < tags.length; i++) {
      addTags += '<li>' + tags[i] + '</li>';
    }
    addTags += '</ul>';
  }
  return addTags;
}
// Generating quote HTML structure
function makingQuote(quoteOb) {
  message = makingTags(quoteOb.tags);
  message += '<p class="quote">' + quoteOb.quote + '</p>';
  message += '<p class="source">' + quoteOb.source;
  message += makingProperty(quoteOb.citation, 'citation');
  message += makingProperty(quoteOb.year, 'year');
  message += '</p>';
  return message;
}
// Print the HTML string into the document
function printQuote() {
  let indexRamdom = getRandomValue(quotes.length);
  document.getElementById('quote-box').innerHTML = makingQuote(quotes[indexRamdom]);
  changeBackgroudColor();
  setAutomaticRefresh(20); // In seconds
}
// Allow to change the quote in the screen each "seg" seconds
function setAutomaticRefresh(sec) {
  window.clearTimeout(timeOut);
  timeOut = window.setTimeout(printQuote, sec * 1000);
}
// Select a color randomly and change the background-color
function changeBackgroudColor() {
  let color = getRandomValue(256);
  document.body.style.backgroundColor = 'hsl(' + color + ', 54%, 46%)';
}

// The program starts here
printQuote();
// Change quotes by clicking on the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);