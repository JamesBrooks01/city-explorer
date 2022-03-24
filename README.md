# City Explorer

**Author**: James Brooks
**Version**: 1.0.0
<!-- (increment the patch/fix version number if you make more commits past your first submission) -->

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
This project is a simple app that when the name of city in the US is inputted into the form it will give the full address of that city along with the Latitude and Longitude that the city is at then displays a map image of that city. The problem domain of a site like this is a shared one, the desire for information. At it's current form it can provide a location but with data gathered from other sources, it could even tell you the weather in an area, or the movies that are playing locally in that city or perhaps some restaurants in the city.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
To get this app working, you need to have an API key from LocationIQ stored within an `.env` file stored on the root directory of the repo. As well as running `npm install` and making sure it installed Axios and React-Bootstrap.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
This app uses HTML, CSS, JavaScript at base; and uses the libraries of React, React Bootstrap, and Axios. It also uses the API of LocationIQ.

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example: -->

- 03-21-2022 4:31pm - Initial Working File Commit.
- 03-21-2022 5:13pm - Added Form to Query a City Name and return and display via text the Name, Latitude and Longitude retrieved from the Object.
- 03-21-2022 5:40pm - Added map image based upon Latitude and Longitude.
- 03-21-2022 5:50pm - Added CSS Styling.
- 03-21-2022 6:11pm - Added Error message functionality.
- 03-22-2022 6:28pm - Added render functionality for Weather Data
- 03-22-2022 6:35pm - Ensured Error Functionality still functioned with Weather Data added on.
- 03-23-2022 6:40pm - Refactored code to make live weather data render and retrieval better.
- 03-23-2022 8:40pm - Rendered Movie Data.
- 03-23-2022 9:27pm - Added CSS Styling.
- 03-23-2022 10:02pm - Deployed.

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
- Liesl White (Day01 WRRC Partner)
  - [LinkedIn](https://www.linkedin.com/in/lieslwhite/)
- Cole Gibbs (Day02 WRRC Partner)
  - [LinkedIn](https://www.linkedin.com/in/cole-gibbs/)
- Tanesha Brester (Day03 WRRC Partner)
  - [Linkedin](https://www.linkedin.com/in/taneshabrester/)

## Additional Information

- Day 01:
  - ![Day01 WRRC Image](./src/imgs/WRCC%20Lab%2006.png)
- Day 02:
  - ![Day02 WRRC Image](./src/imgs/Lab%2007%20WRRC.png)
- Day 03:
  - ![Day03 WRRC Image](./src/imgs/Lab!08%20WRRC.png)

## Time Estimations

>Name of feature: Set up your React repository & API keys
>Estimate of time needed to complete: 10-15 Minutes
>
>Start time: 4:10pm
>
>Finish time: 4:31pm
>
>Actual time needed to complete: 21 Minutes

>Name of feature: Locations
>
>Estimate of time needed to complete: 30-45 Minutes
>
>Start time: 4:31pm
>
>Finish time: 5:13pm
>
>Actual time needed to complete: 42 Minutes

>Name of feature: Map
>
>Estimate of time needed to complete: 30-45 Minutes
>
>Start time: 5:13pm
>
>Finish time: 5:40pm
>
>Actual time needed to complete: 27 Minutes

>Name of feature: Errors
>
>Estimate of time needed to complete: 30-45 Minutes
>
>Start time: 5:50pm
>
>Finish time: 6:11pm
>
>Actual time needed to complete: 21 Minutes

>Name of feature: Weather(Front-End)
>
>Estimate of time needed to complete: 60 Minutes
>
>Start time: 5:37pm
>
>Finish time: 6:30pm
>
>Actual time needed to complete: 53 Minutes

>Name of feature: Errors (Revisited)
>
>Estimate of time needed to complete: 10 Minutes
>
>Start time: 6:30pm
>
>Finish time: 6:35pm
>
>Actual time needed to complete: 5 Minutes

>Name of feature: Movies
>
>Estimate of time needed to complete: 30 - 45 Minutes
>
>Start time: 8:20pm
>
>Finish time: 8:40pm
>
>Actual time needed to complete: 20 Minutes

>Name of feature: Deploy
>
>Estimate of time needed to complete: 5 Minutes
>
>Start time: 9:31pm
>
>Finish time: 10:02pm
>
>Actual time needed to complete: 31 Minutes
