# Neighborhood Map Project
---
This is a React web-based application that allows users to find coffe shops in a local Arizona city. Users can filter through a set of restaurant results, returned from Four Square API and Google Maps API, that will show the name, address, and average customer rating of the shop. 


## Table of Contents
---
* [Project-Overview](#project-overview)
* [Installation](#installation)
* [Important](#important)
* [Dependencies](#dependencies)
* [Contributions](#contributions)


## Project-Overview
---
For the ***Neighborhood Map*** project, I started from scratch and used [Create React App](https://github.com/facebookincubator/create-react-app) to build my initial file structure and install the required dependencies. I added [Google Maps API](https://developers.google.com/maps/documentation/) to provide the map feature and the markers that are on the map. I also utilized the [Four Square API](https://developer.foursquare.com/docs) to supply the list of restaurants/venues. The other main features of this project include: offline capability, accessibility-friendly, and mobile responsiveness.


## Installation
---
**You will need to have Node.js downloaded in order to use this application. If you do not have it, download it from [here](https://nodejs.org/en/).**

1. Clone or download this repository from GitHub to your local machine.

2. Using terminal or a command line, enter the folder directory that was cloned or downloaded and install all project dependencies with the command `npm install`. To start the server, run the command `npm start` and a new window will start up in your browser. In the event a new window does not appear, go to `http://localhost:3000` in your browser. 

3. Once the app is running, either click on any of the markers on the map or type in the input field on the top left to filter through the list of coffee shops. Clicking on a marker will open an InfoWindow that display information about the marker. If you click on the coffee shop name on from the list an InfoWindow will appear as well. 

4. If you are viewing the app on a mobile-device, you have the ability to scroll through the list of coffee shops. 


## Important
---
This project will only run in development mode currently. It is important you follow the steps provided in [Installation](#Installation).

The app was designed to only show 10 coffee shop locations in Tucson, AZ by default, however, that can be modified by changing the settings in src/App.js, lines 47-49. Line 47 will allow you to change the city you want to search in. Modifications to Line 48 will update what kind of venue results you will give (i.e. 'coffee', 'library', 'tacos'). Lastly, any changes to Line 49 will increase or decrease the number of total venues that will be available (it currently is at 10). 


## Dependencies
---
* [Udacity](https://github.com/udacity) for lessons on React and Google Maps API.
* [Create-React-App](https://www.npmjs.com/package/create-react-app) boilerplate for React application.
* [React Docs](https://reactjs.org/) for React documentation.
* [FreeCodeCamp](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc)
* [Ryan Waite's FEND Project 7 WalkThrough](https://www.youtube.com/watch?v=LvQe7xrUh7I&t=3837s&index=6&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s)
* [Forrest Walker's Neighborhood Map WalkThrough](https://www.youtube.com/playlist?list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP)
* [Yahya Elharony Udacity Neighborhood Map Walkthrough](https://www.youtube.com/channel/UCcWSbBe_s-T_gZRnqFbtyIA)


## Contributing
---
To contribute, please create a pull request that clearly details any changes made and/or the benefit of the changes that have been made. Provide an example of how this change will enhance the Neighborhood Map application. 

If you need help to create a pull request, please use proper documentation such as: https://help.github.com/articles/creating-a-pull-request/ or https://help.github.com/articles/creating-a-pull-request-from-a-fork/.

Changes that fix the format of the code or remove whitespace will be politely declined.

If you find a bug, create a GitHub issue, but ensure that this same bug has not already been reported. If you need direction on how to do this, please review: https://help.github.com/articles/creating-an-issue/.