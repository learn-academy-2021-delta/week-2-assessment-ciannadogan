// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.split(""))

// a) Your answer: ['Delta', '2021']
// b) Verify and explain: The output was [''D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '1''] because the .split() method
// divides a string into an ordered list of substrings, puts the substrings into an array, and returns the array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 // console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student!'
// b) Verify and explain: The return was undefined because the console log should have included the interpolation.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain:


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
 // console.log(oddsOnly)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The output was [12, 14] because the filter method determined which values were even and filtered out the odd values.


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
 // console.log(learnStudent)

// a) Your answer: { student: "George", cohort: "Delta", year: 2021 }
// b) Verify and explain: The output was Learn { student: 'George', cohort: 'Delta', year: 2021 } because the class name "Learn" is the name of the class.
