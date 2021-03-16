# APP-API
- This is a backend component of a microservice full-stack application
- It is built with node and express

## WEBSITE
- http://iproudu.com

## STRUCTURE
- Communicates with app-ui via **RESTful API and GraphQL**
- Created a middleware for a user authentication with **JWT-Token**
- Created a type validation middleware for login and signup requests with **celebrate**
- Used **Mongoose Schemas** to model **user and article** to store and manipulate in **MongoDB**
- Assigns cookies to users to prevent from repeating login
- Encrypts a user password with **bcrypt**
- Incorporated **Docker**
