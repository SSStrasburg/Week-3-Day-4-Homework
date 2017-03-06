
let filesystem = require('fs');  // fs = filesystem, part of JavaScript

module.exports = function parse(filename) {

    let contentsOfTheFile = filesystem.readFileSync(filename);
    // the contents of the file are actually a buffer
    // console.log(contentsOfTheFile.toString() );

    let stringValue = contentsOfTheFile.toString();
    let dataLineArray = stringValue.split('\n');
    //console.log(dataLineArray);
    //the data is split into each line being an array


    let usableDataFormat = [];
    // students.forEach( function printRow(students, i, theOriginalArray) {
    dataLineArray.forEach( function printRow(eachLine) {
        let splitUpStrings = eachLine.split(',');
        usableDataFormat.push(splitUpStrings);
    });

    //console.log(usableDataFormat);

    // console.log(usableDataFormat[0][1]);
    return usableDataFormat;
};
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
