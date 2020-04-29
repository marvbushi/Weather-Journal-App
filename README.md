# Weather-Journal App Project

## Overview
On this project, I created an asynchronous web app that uses Web API and user data to dynamically update the UI. I modified the `server.js` file and the `website/app.js` file.

## Project Walkthrough

- Start by setting up project environment.
- Add a GET route that returns the projectData object.
- Add a POST route that adds incoming data to projectData.
- Acquire API credentials from OpenWeatherMap Website.
- Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
- Chain another Promises that updates the UI dynamically.