# Just In Time News

### [Deploy Link](https://just-in-time-pi.vercel.app/)

## Project Overview
Just In Time News is a news reader application that pulls articles from the [New York Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). This project was intended to simulate a take-home challenge experince. We were given 8 hours to complete the MVP which included consuming a RESTful API, displaying a list of articles to users, allowing the user to filter or search by category, and giving the user a detailed view with additional information and access to the NYT full article. 

## Preview of Application
Logo image from <a href="https://www.flaticon.com/free-icons/news-office" title="news office icons">News office icons created by Bima Pamungkas - Flaticon</a>
<img src="https://user-images.githubusercontent.com/106957849/222611781-61137c0d-bc08-4a94-b126-c464bfe25c00.png" width=60% height=60%>
<img src="https://user-images.githubusercontent.com/106957849/222611835-d8ec5734-f63c-49f6-8e53-57e7dbc49a6a.png" width=60% height=60%>

## Tech Stack
![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Setup
* Clone down this repo to your local machine.
* `cd` into the repository.
* Run `npm install` to ensure you have all necessary depencdencies.
* In order to run the application in your browser, run `npm start`.
* You are ready to code!

## Project Roadmap

### Project Board
[Trello Project Board](https://trello.com/b/B0iZOLso/just-in-time-project-board)

### Wireframe
<img src="https://user-images.githubusercontent.com/106957849/222281314-78f279fd-3629-4aa2-bd09-81638af8ced4.png" width=70% height=70%>

### Component Architecture Map
<img src="https://user-images.githubusercontent.com/106957849/222281010-aa83e461-6b21-4f69-a821-6336e5f98c79.png" width=40% height=40%>

## Reflections
* Looking back, I may have spent a little too much time in the planning phase. I went down several paths creating my component architecture map, ultimately settling on the simplest version which allowed for more modular, reusable components. 
* One decision that I made early in the project was to filter using the different endpoints provided by the NYT API rather than using a filter function on the existing data. 
* While this application had a simple MVP, I ran into some minor challenges when consuming data that did not have images or links to NYT articles. * Given more time, I would have like to incorporate Cypress E2E testing and make my website responsive on mobile devices. If I had to do it again, I would have spent less time on design and styling and more time on testing and accessbility across devices. 
* One of my greatest wins was properly implementing loading status such that my detailed article view persists across page refresh. 
* One thing I want to explore further is using params to set state for my categories as an potential solution to a minor bug my site currently has.
* Overall, this was a fun take home challenge to build up and assess my fluency using the React framework. 

## Contributors
  <p>Jennifer Yacoubian</p>
  <img src="https://avatars.githubusercontent.com/u/106957849?v=4" width=10% height=10%>
  <a href="https://github.com/jmyacobn" rel="nofollow noreferrer">
     <img src="https://i.stack.imgur.com/tskMh.png" alt="github"> Github
  </a><br>
  <a href="https://www.linkedin.com/in/jennifer-yacoubian/" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/gVE0j.png" alt="linkedin"> LinkedIn
  </a>
