// Filename: sophisticated_code.js
// Content: A complex and elaborate code example

// Importing necessary libraries
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const readlineSync = require('readline-sync');

// Global variables
let userData = {};
let isLoggedIn = false;

// Function to display a fancy welcome message
function showWelcomeMessage() {
  console.log('===========================================');
  console.log('              SOPHISTICATED CODE           ');
  console.log('===========================================');
  console.log('        Welcome to the Sophisticated App    ');
  console.log('===========================================');
}

// Function to load user data from a file
function loadUserData() {
  const userDataPath = path.join(__dirname, 'userdata.json');
  if (fs.existsSync(userDataPath)) {
    const data = fs.readFileSync(userDataPath, 'utf8');
    userData = JSON.parse(data);
  }
}

// Function to save user data to a file
function saveUserData() {
  const userDataPath = path.join(__dirname, 'userdata.json');
  const data = JSON.stringify(userData);
  fs.writeFileSync(userDataPath, data, 'utf8');
}

// Function to login
function login() {
  if (isLoggedIn) {
    console.log('You are already logged in!');
    return;
  }

  const username = readlineSync.question('Enter your username: ');
  const password = readlineSync.question('Enter your password: ', { hideEchoBack: true });

  if (userData[username] && userData[username].password === password) {
    console.log('Login successful!');
    isLoggedIn = true;
  } else {
    console.log('Invalid credentials. Please try again.');
  }
}

// Function to perform some complex calculations
function performComplexCalculations(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    result += input[i] * Math.pow(2, i);
  }
  return result;
}

// Main program
function main() {
  showWelcomeMessage();
  loadUserData();

  while (true) {
    console.log('\nPlease select an option:');
    console.log('1. Login');
    console.log('2. Perform complex calculations');
    console.log('3. Exit');

    const selectedOption = readlineSync.question('Your choice: ');

    switch (selectedOption) {
      case '1':
        login();
        break;
      
      case '2':
        if (isLoggedIn) {
          const input = readlineSync.question('Enter an array of numbers (space-separated): ');
          const numbers = input.split(' ').map(Number);
          const result = performComplexCalculations(numbers);
          console.log(`Result: ${result}`);
        } else {
          console.log('Please login first!');
        }
        break;

      case '3':
        saveUserData();
        console.log('Goodbye!');
        return;

      default:
        console.log('Invalid option. Please try again.');
        break;
    }
  }
}

// Starting point of the program
main();