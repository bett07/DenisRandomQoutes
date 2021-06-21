/******************************************
Author: Denis Bett
ID: 300312397
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
var quotesArrayList =[];

//quotes object to push into the array

var firstQuote ={
  quoteText: 'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited.Imagination encircles the world.',
  quoteSource: 'Albert Einstein',
  citation: 'Viereck Interview',
  year: '1929'
};

var secondQuote={
  quoteText: 'There is no greater agony than bearing an untold story inside you.',
  quoteSource: 'Maya Angelou',
  year:'1970'
};

var thirdQuote={
  quoteText: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  quoteSource: 'Nelson Mandela'

};

var fourthQuote={
  quoteText: 'The way to get started is to quit talking and begin doing.',
  quoteSource: 'Walt Disney'
};

fifthQuote={
  quoteText: 'Always remember that you are absolutely unique. Just like everyone else.',
  quoteSource: 'Margaret Maed'
};
//this add the array objects to array list

quotesArrayList.push(firstQuote);
quotesArrayList.push(secondQuote);
quotesArrayList.push(thirdQuote);
quotesArrayList.push(fourthQuote);
quotesArrayList.push(fifthQuote);
/***
 * `getRanQuote` function
 * this will create a random number and use the number to show the getRandomQoute function
***/
function getRanQuote(){
  
  var size = quotesArrayList.length;
  var randomNum = Math.floor(Math.random() * size);
  return quotesArrayList[randomNum];


}

/***
 * `printQuote` function
 * this generate the HTML string that are displayed on the browser
***/
function printQuote(){
  var quoteItem = getRanQuote();
  var text =  "<p class='quote'>" + quoteItem.quoteText + "</p><br>";
  text += "<p class='source'>" + quoteItem.quoteSource +"</p><br>";
  //check if their is citation and year
  if(quoteItem.citation){
    text += "<p class='citation'>" + quoteItem.citation +"</p><br>";
  }
  if(quoteItem.year){
    text +=  "<p class='year'>" + quoteItem.year +"</p><br>";
  }
  document.getElementById('quote-box').innerHTML = text;
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);