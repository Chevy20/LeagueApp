# **LeagueApp**  
A Full-Stack (MERN) web application utilizing the Riot Games API for League of Legends.  
_Current Status: Early Development_

---

## **Contributors**
- Matthew Cheverie

---

## **Description**
LeagueApp is a comprehensive full-stack application built using the MERN stack (MongoDB, Express, React, Node.js). It leverages the Riot Games API to provide League of Legends players with advanced tools, such as champion draft assistance and summoner statistics, to enhance their gameplay experience.

---

## **Current Status**
### **Back-End Testing**
Focused on testing backend services to ensure robust data handling and API interactions.

#### **Services Currently Working:**
- Account API Test Page
- Summoner API Test Page
- Champion API Test Page
- League API Test Page
- LOL Status API Test Page
- Spectator API Test Page

#### **Services in Development:**
- League EXP API Test Page
- Clash API Test Page
- Match API Test Page
- LOL Challenges API Test Page
- Champion Mastery API Test Page

---

## **Goals**
- Fully integrate core Riot Games API services into the application.
- Establish a smooth CI/CD pipeline for seamless and efficient deployments.
- Design a responsive and user-friendly UI for League of Legends players.
- Provide features such as:
  - Champion draft assistance.
  - Summoner statistics and performance tracking.
  - Centralized access to gameplay-enhancing insights.

---

## **Tech Stack**
- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **API**: Riot Games API  
- **Deployment**: AWS EC2, Docker  

---

## **CI/CD Pipeline**
LeagueApp utilizes GitHub Actions to automate the Continuous Integration/Continuous Deployment (CI/CD) process. The pipeline includes:  
1. **Building and Testing**: Automated builds and tests for both backend and frontend services using Node.js.  
2. **Dockerization**: Creating and pushing Docker images for backend and frontend services.  
3. **Deployment**: Deploying the application to an AWS EC2 instance via SSH.  
4. **Secure Data Management**: Leveraging GitHub secrets to securely manage sensitive data.

---
