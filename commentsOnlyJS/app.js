/**
 * TODO
 * - Declare Global Variables
 * - Configure URL and API for OpenWeather API
 * - Create a new date instance dynamically with JS
 * - eventListener for HTML DOM element
 * - Function called by event listener
 * - Function to GET Web API Data - getWeatherData()
 * - Function to POST Data - postData()
 * - Function to updateUI
 */

/* Global Variables */
// Configure URL and API for OpenWeather API.
let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=1ee7f7116a57fe711817ae5bc1c06c16";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

// eventListener for HTML DOM element
let generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', performAction);

// Function called by event listener
function performAction(e){
    const zipcode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeatherData(baseURL, zipcode, apiKey)
    .then(function(data){
        postData('/add', { date: newDate, temp: (data.main.temp * 0.1).toFixed(2), content: feelings });
        updateUI('/all');
    });
}

// Function to GET Web API Data - getWeatherData()
const getWeatherData = async (baseURL, zipcode, apiKey) => {
    const res = await fetch(baseURL + zipcode + apiKey);

    // Handle error
    try {
        const data = await res.json();
        console.log(data);

        return data;
    } catch(error){
        console.log("error", error);
    }
}

// Function to POST Data - setData()
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            date: data.date,
            temp: data.temp,
            content: data.content
          })
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch(error) {
      console.log("error", error);
    }
}

// Function to updateUI
const updateUI = async () => {
    const request = await fetch('/all');
    try {
      const allData = await request.json()
      // update new entry values
      document.getElementById('date').innerHTML = "Date: " + allData.date;
      document.getElementById('temp').innerHTML = "Temp: " + allData.temp;
      document.getElementById('content').innerHTML = "Feels: " + allData.content;
    }
    catch (error) {
      console.log("error", error);
    }
  };