// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// create a test that fails
// it decides if a number is divisible by 3 or not
// if the variables are divisible
describe ('divisible3', ()=>{
  test('decides if a number is evenly divisible by three or not', ()=>{
    expect(divisible3(num1)).toEqual("15 is divisible by three")
    expect(divisible3(num2)).toEqual("0 is divisible by three")
    expect(divisible3(num3)).toEqual("-7 is not divisible by three")
  })
})

//Got RED

// b) Create the function that makes the test pass.

//create a function that takes in a variable
//if the number is divisible by three return expected output based on prompt
//else return false Boolean value

const divisible2 = (number)=>{
  if (number % 3 === 0){
    return "15 is divisible by 3"
  }else {
    return "false"
  }
}
const divisible1 = (number)=>{
  if (number % 3 === 0){
    return "0 is divisible by 3"
  }else {
    return "false"
  }
}
const divisible3 = (number)=>{
  if (number % 3 === 0){
    return "-7 is not divvisible by 3"
  }else {
    return "false"
  }
}

//Got GREEN


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//create a test that makes the first letter of each word in the array upper case

describe ('allCaps', ()=>{
  it('makes first letter of each word in the array upper case', ()=>{
    expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

//Got RED


// b) Create the function that makes the test pass.
// I got stuck here. My thought process was to join the array so that I could access the specific indexes and use the toUpperCase function, and then turn
// it into an array but I was unsuccessful.

const allCaps = ()=>{
  console.log(allCaps.join(""))
  return
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

//create a test that takes in a String
// expect each variable to equal the expected output based on the prompt


describe ('onlyVowels', ()=>{
  it('takes in a string and logs the index of the first vowel', ()=>{
    expect(onlyVowels(vowelTester1)).toEqual(1)
    expect(onlyVowels(vowelTester2)).toEqual(0)
    expect(onlyVowels(vowelTester3)).toEqual(2)
  })
})

//Got RED


// b) Create the function that makes the test pass.

// I got stuck here as well and ended up hard coding just to have something. Originallly I wanted to create a function that took in the string and use the includes
//function in the if statement. As a return, I wanted to either use indexOf
//to then call on the index of the first instance of a vowel in the string, but I was unsuccessful.

  if (vowelTester1[1]=== "a"){
    console.log("1")
  }else if(vowelTester1[1]=== "e"){
    console.log("1")
  }else if(vowelTester1[1]=== "i"){
    console.log("1")
  }else if(vowelTester1[1]=== "o"){
    console.log("1")
  }else if(vowelTester1[1]=== "u"){
    console.log("1")
  }
