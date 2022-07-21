# Installing for the first time
- Prerequisites: MongoDB installed and running (for now), .env file in backend folder.
recommend global installation of Node.js package `nodemon` to run backend server
- `npm i` @ /root directory
- `npm start` @ /src
- `nodemon server` @ /backend
> Make sure your .env file has these:

`DATABASE_URL=mongodb://localhost:27017/User`

`JWT_SECRET=(Your secret key here, can be anything)`
