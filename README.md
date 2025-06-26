# blackjack
TechWise Cohort 3 — Final Homework (Web Development)

This is a basic but functional MERN stack Blackjack application, developed as a technical checkpoint to demonstrate how the backend, database, and frontend integrate.

The app uses:
- Node.js + Express for the backend
- MongoDB + Mongoose for the database
- React for the frontend
- Axios for API communication

This app includes:
- Full MongoDB integration with Mongoose models
- Two models implemented: Game and Player
- Games store player names, status (in-progress, won, lost), and timestamps
- Players track name, bankroll, number of wins, and losses
- Basic Blackjack logic: Generates a random hand (two cards) and calculates win/loss
- Frontend built with React, styled with a cozy light brown & creamy white theme
- Frontend allows:
    - Creating new games
    - Displaying generated hands
    - Displaying game history
    - Showing player stats (wins & losses)
    - Deleting games

All 4 levels in the assignment description have been completed.

To run this app:

Navigate to the backend folder by running "cd backend" and then run "npm install" to install dependencies.

Make sure MongoDB is running.

Start the backend by running npm run start.

Navigate to the frontend folder by running "cd frontend" and then run "npm install" to install dependencies.

Start the React app by running "npm start".



Some known issues include:

Player stats must be manually created via API if player doesn't already exist

Basic Blackjack logic only covers initial two-card hand (no hit/stand yet)

No form validation for empty player names

Basic frontend layout — future improvements planned for better design & structure