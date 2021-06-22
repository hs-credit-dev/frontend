# Installing for the first time
- Prerequisites: MongoDB installed and running (for now), .env file in backend folder.
- `npm install` @ /
- `npm start` @ /
- `nodemon server` @ /backend
> Make sure your .env file has these:

`DATABASE_URL=mongodb://localhost:27017/User`

`DB_HOST=127.0.0.1`

`DB_USER=user`

`DB_PASS=pass`

`JWT_SECRET=(Your secret key here, can be anything)`

`JWT_EXPIRATION_TIME=86400`
