# APP-API
- This is a backend component of a microservice full-stack application
- It is built with node and express

# WEBSITE
- http://iproudu.com

## STRUCTURE
- Communicates with app-ui via **RESTful API and GraphQL**
- Created a type validation middleware for login and signup requests with **celebrate**
- Created a middleware for a user authentication with **JWT-Token**
- Assigns cookies to users to prevent constant re-login
- Used **Mongoose Schemas** to model **user and article** to store and manipulate in **MongoDB**
- Encrypts a user password with **bcrypt**
