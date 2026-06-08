# Introduction to Node.js and APIs - Part 1

A beginner Node.js and Express exercise with two simple routes. This project was built to practice setting up an Express server, separating routes from controller functions, and returning basic text responses from API endpoints.

## Features

- Express server
- Separate route file
- Separate controller file
- Root route that returns `"Hello World!"`
- `/tTech` route that returns `"Tooele Tech is Awesome!"`
- Nodemon-based development script

## Tech Stack

- Node.js
- Express
- Nodemon

## Project Structure

```text
server.js
controllers/
  index.js
routes/
  index.js
index.html
```

## Routes

```text
GET /        # Returns "Hello World!"
GET /tTech   # Returns "Tooele Tech is Awesome!"
```

## How To Run

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

## Notes

- This is an introductory coursework project, not a full application.
- There is no database, authentication, or frontend build process.
- The point of the project is the basic Express routing pattern.

## What I Practiced

- Creating an Express app
- Mounting a router with `app.use`
- Moving route handler logic into controller functions
- Exporting and importing modules with CommonJS
- Running a local Node server with nodemon
