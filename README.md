### Voting-System Api

# This is a CRUD application the is designed using the MERN stack
- The application uses the following dependencies to help implement them functions.
- body-parser - 
- dotenv": "^16.4.5",
- express": "^4.19.2",
- joi": "^17.13.1",
- mysql2": "^3.9.9",
- nodemon": "^3.1.2",
- sequelize": "^6.37.3"

# App structure
- The application has the following folders:
- 1 Config - which carries the db configuration
- 2 Models - Which contain all the database models(i.e voters, election, ballots,candidate and admin models )
- 3 Route - This house the routes configurations of the of the app

# Other files
- app.js file - which runs the application
- .env file - which hold the important api keys

# Brief explanation of the api logic
- Admin - The admin route has access to all the other models for general solution to voters, election, cndidate and the ballot models via the sequelize ORM association

