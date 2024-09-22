# **TBA**  
A Full Stack (MERN) web application utilizing the Riot Games API for League of Legends.

## **Contributors**
- [Matthew Cheverie](https://github.com/Chevy20)
- [Victor Chang](https://github.com/junyuchang)

## **Description**
LeagueApp is a comprehensive full-stack application built using the MERN stack (MongoDB, Express, React, Node.js). 

## **Current Status**
- **Back End Testing**: Focus on testing the backend services to ensure robust data handling and API interactions.

## **Goals**
- Implement core Riot Games API services.
- Establish a smooth CI/CD pipeline for seamless deployment.
- Design a responsive and user-friendly UI.
- The application leverages the Riot Games API to deliver services such as Champion draft assistance, summoner statistics, and more. The application aims to provide a centralized platform for League of Legends players to enhance their gameplay experience.

## **Tech Stack**
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: Riot Games API
- **Deployment**: AWS EC2, Docker

## **CI/CD Pipeline**
LeagueApp utilizes GitHub Actions to automate the Continuous Integration/Continuous Deployment (CI/CD) process. The pipeline is configured to:
1. Build and test both the backend and frontend applications using Node.js.
2. Build and push Docker images for both services.
3. Deploy the application to an AWS EC2 instance via SSH.
4. Manage sensitive data using GitHub secrets.

