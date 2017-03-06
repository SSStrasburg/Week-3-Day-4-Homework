
let myParser = require('./parse.js');
let parking_data = './data/parking_feb_2016.csv';

let usableDataFormat = myParser(parking_data);
let dataLineArray = myParser(parking_data);
let splitUpStrings = myParser(parking_data);

//console.log(usableDataFormat);

console.log(usableDataFormat[0]); // displays headers
numberofColumns = usableDataFormat[0].length; // counts number of columns
console.log(usableDataFormat.length);  //displays columns
numberOfRows = usableDataFormat.length;  // counts nummber of rows
console.log(dataLineArray.length);    // displays rows
console.log(usableDataFormat[0].length);
console.log(splitUpStrings.legth);
//

let x=0; //this will only get the emelent we want it blank
let y=9;


let violationTypeObject = {};

usableDataFormat.forEach( function printRow(row /* , index, array */ ) {
  if (violationTypeObject[ row[9] ]) {
    violationTypeObject[ row[9] ]++;
  } else {
    violationTypeObject[ row[9] ] = 1;
  }

 //console.log(row.length);

//count all words in column 9 as an object; (double-parking:1, meter-expired:313, etc...)
//display word that has maximum word display;
//display length (-1 for header) to show the number of types of tickets


});



//console.log('does this output index 9', violationTypeArray);

let iteration = {};


usableDataFormat.forEach( function violationTypeArrayNormalized(row){
if(!iteration[ row[9] ] ) {  //parking [9], moving row[17]
  iteration[ row[9] ] = 1;

} else {
  iteration[ row[9] ] = iteration[ row[9] ] + 1;
}

});
//
//

let violationTypeArraySpecificViolations = Object.keys(iteration);
let maxViolation = {

name: 'defult',
count: 0
};

let tempHoldMaxNumber =0; //tempNumCont
let tempHoldMaxName = 'NA'; // holds coresponding max number label
let tempPossibleMax;
console.log(violationTypeArraySpecificViolations ); // tickettype

console.log('number', iteration[violationTypeArraySpecificViolations[0]]);
console.log('name', violationTypeArraySpecificViolations[2]);

for(i=1; i < violationTypeArraySpecificViolations.length; i++) {

  //console.log( iteration[violationTypeArraySpecificViolations[i] );

  if ( iteration[violationTypeArraySpecificViolations[i] ]> tempHoldMaxNumber) {
    tempHoldMaxNumber = iteration[violationTypeArraySpecificViolations[i]];
    tempHoldMaxName = violationTypeArraySpecificViolations[i];
  }


}

console.log('The max number from array ', tempHoldMaxNumber);
console.log('The most common corresponding violation type ', tempHoldMaxName);



violationTypeArraySpecificViolations.forEach( function maxViolation(violationCode) {
  if (iteration[violationCode]  > maxViolation.count) {
    maxViolation.count = iteration[violationCode];
    maxViolation.name = violationCode;
  }

});



//////////////////////
//////////////////////
//////////////////////


// let myParsedParkingData = myParser('./data/parking_feb_2016.csv');
// let myParsedMovingData = myParser('./data/moving_jan_2016.csv');

// arrayRows = stringValue.split(',');
// console.log(arrayRows);



// Asynchronous way to do things
// //Parking fines data
//   let filesystem = require('fs');  // fs = filesystem, part of JavaScript
//
//   filesystem.readFile('./parking_feb_2016.csv', function printOutTheContents(possibleError, contentsOfTheFile) { // if null then no error,
//     if(possibleError) {
//       console.log(possibleError); // this will stop the funtion if there was an error
//       return;
//     }
//
//     let stringValue = contentsOfTheFile.toString();
//     let rows = stringValue.split('\n');  // find new lines
//     console.log(row);
//     console.log(stringValue);  // stringValue not contentsOfTheFile now
//
//   } );  // look in the current directory.  Asynchronous.  what to do when it's done
//





//
// //Moving fines data
// let filesystem require('fs');  // fs = filesystem, part of JavaScript
//
// filesystem.readFile('./moving_jan_2016.csv', function printOutTheContents(possibleError, contentsOfTheFile) { // if null then no error,
//   if(possibleError) {
//     console.log(possibleError); // this will stop the funtion if there was an error
//     return;
//   }
//
    // let stringValue = contentsOfTheFile.toString();
    // let rows = stringValue.split('\n');  // find new lines
    // console.log(row);
    // console.log(stringValue);  // stringValue not contentsOfTheFile now
    //
    // } );  // look in the current directory.  Asynchronous.  what to do when it's done
