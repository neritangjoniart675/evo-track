/*
Filename: sophisticatedCode.js

This code demonstrates a sophisticated implementation of a digital clock with additional functionalities such as displaying the date, a countdown, and an alarm feature. It also includes various helper functions for time formatting and event handling.

Author: Your Name
Date: YYYY-MM-DD
*/

// Helper function to pad numbers with leading zeros
function pad(num, size) {
  let str = String(num);
  while (str.length < size) {
    str = '0' + str;
  }
  return str;
}

// Function to get the current time with format HH:MM:SS
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedHours = pad(hours, 2);
  const formattedMinutes = pad(minutes, 2);
  const formattedSeconds = pad(seconds, 2);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Function to get the current date with format YYYY-MM-DD
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1, 2);
  const day = pad(now.getDate(), 2);

  return `${year}-${month}-${day}`;
}

// Update the clock every second
function updateClock() {
  const clock = document.getElementById('clock');
  clock.textContent = getCurrentTime();

  // Schedule the next update
  setTimeout(updateClock, 1000);
}

// Update the date every 10 seconds
function updateDate() {
  const dateElement = document.getElementById('date');
  dateElement.textContent = getCurrentDate();

  // Schedule the next update
  setTimeout(updateDate, 10000);
}

// Initialize the clock and date
function init() {
  updateClock();
  updateDate();
}

// Event handler for alarm feature
function setAlarm() {
  const alarmTimeInput = document.getElementById('alarm-time');
  const alarmButton = document.getElementById('set-alarm-button');
  const alarmMessage = document.getElementById('alarm-message');

  const currentTime = new Date();
  const alarmTime = new Date(alarmTimeInput.value);

  if (currentTime > alarmTime) {
    alarmMessage.textContent = 'Invalid alarm time! Please set a future time.';
    return;
  }

  const timeDiff = alarmTime - currentTime;

  alarmButton.disabled = true;
  alarmTimeInput.disabled = true;
  
  setTimeout(() => {
    alarmButton.disabled = false;
    alarmTimeInput.disabled = false;
    alarmMessage.textContent = 'Time\'s up!';

    // Additional alarm actions here...

  }, timeDiff);
}

// Register event listeners
document.addEventListener('DOMContentLoaded', init);
document.getElementById('set-alarm-button').addEventListener('click', setAlarm);

/* 
... Additional code, including DOM elements, CSS styling, and more ...
... ... ...
... ... ...
... ... ...
*/