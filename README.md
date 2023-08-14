# Flipkart_API
  
 <b>I developed a web application called "Flipkart Scraping API." The primary objective of this project was to create an API that allows users to sign up, log in using JWT-based authentication, and scrape product details from Flipkart URLs. The scraped data is then stored in a MongoDB database with a proper schema, including user information. <b> 

## Table of Contents
-  <b> [Features](#features)</b>
-  <b> [Getting Started](#getting-started)</b>
-  <b> [Tech Stack](#Tech-Stack) </b>
-  <b> [Project Demo](#Project-Demo) </b>
-  <b> [Author](#Author)</b>

## Features
-  <b>1. JWT-Based Authentication </b>
     <p>Users could sign up and log in using JWT-based authentication, which ensured secure access to the application's functionalities.</p>
-  <b> 2. Post API for Scraping </b>
    <p>The application provided a post API that allowed users to input a Flipkart URL as a payload. When invoked, the API scraped essential product information from the URL, such as title, price, description (if available), number of reviews, ratings, and the number of media counts in the product display box..</p>
-  <b> 3. Data Storage in MongoDB</b>
    <p>The scraped data was stored in a Postgres database with a proper schema design that accommodated the scraped fields and user information.</p>
-  <b> 4. URL Validation and Ownership Check </b>
    <p>Before scraping data, the application checked if the URL corresponded to the logged-in user. If the URL was already present in the database for the user, the application returned the data from the database. Otherwise, if the URL was not present or did not belong to the logged-in user, appropriate error messages were shown.</p>

## Getting Started
-  <b> 1. &nbsp; Clone Git Repo  </b>
    <br>----<i> git clone https://github.com/Sahil-Sayyad/Flipkart_API.git</i><br><br>
-  <b> 2.  &nbsp;Install NPM dependencies </b>
   <br>----<i> npm install</i> <br><br>
-  <b> 2.  &nbsp;Set Up .env file  </b>
   <br>----<i> add mongodb your url</i>
   <br>----<i> add access_token_sceret</i> <br><br>
-  <b> 3. &nbsp; Then simply start your app </b>
   <br>----<i>npm start </i><br><br>
-  <b> 4. &nbsp; Set up Auth</b>
   <br>----<i> after login you got a access token you can simply add this token in postman or thunder-client at auth section as jwt Bearer then you can make req.</i>


### Prerequisites
- <b>NodeJs Any Version</b>

### Usage


## Tech Stack
- <b> Back-end </b>
   <p>Node.js: For server-side development and handling API requests.
      Express.js: As a framework to create the application's server-side routes and manage the HTTP requests and responses.
      MongoDB: served as the database to store the scraped data and user information with a well-defined schema.</p>
-  <b> 2. Authentication </b>
    <p>jwt: For implementing the authentication system and managing user sign-up and sign-in.</p>

## Project Demo
 - <b> <i>Scraped Data Demo  </i></b> <br><br>
 ![dataDemo](https://github.com/Sahil-Sayyad/Flipkart_API/assets/96423459/99aa77df-ecf6-480f-89a8-d1a1018da3c2)

-  <b> <i> Access Token Demo  </i></b> <br><br>
![AccessToken](https://github.com/Sahil-Sayyad/Flipkart_API/assets/96423459/75e504dd-8c93-4b3d-a841-7839285a37d2)

-  <b> <i> Adding Access Token Demo</i></b> <br><br>
![token](https://github.com/Sahil-Sayyad/Flipkart_API/assets/96423459/720c8d25-fdcd-47b1-9605-1996addc80a0)

-  <b> <i>Passing URL For Scraping Data Demo  </i></b> <br><br>

![Screenshot (98)](https://github.com/Sahil-Sayyad/Flipkart_API/assets/96423459/d1c14a5b-e2d2-4c39-96c0-b948c79ea3b0)

## Author


- Name: Sahil Sayyad
- GitHub:  <a href = "https://github.com/Sahil-Sayyad/Flipkart_API"> <b>Link</b> </a>
- Email: 
- Website: 
