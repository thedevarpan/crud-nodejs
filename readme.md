# CRUD Application

A simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB. This application allows users to create, read, update, and delete user information.

## Features

- Create a new user
- Read user data
- Update existing user information
- Delete a user with confirmation

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/crud-application.git
   cd crud-application


## Install dependencies:
```bash
npm install

## Start the MongoDB server:
```bash
mongod

## Run the application:
```bash

nodemon
npm start


## Visit the application:
```bash
Open your browser and go to http://localhost:3000

## Usage
--------
## Create a User
1. Navigate to http://localhost:3000/create.
2. Fill in the form with the user's details.
3. Click the "Add Data" button to create a new user.

## Read User Data

1. Navigate to http://localhost:3000/read-data.
2. View the list of all users.

## Update a User
1. Navigate to http://localhost:3000/read-data.
2. Click the "Update" button next to the user you want to update.
3. Modify the user's details in the form.
4. Click the "Update" button to save the changes.

## Delete a User
1. Navigate to http://localhost:3000/read-data.
2. Click the "Delete" button next to the user you want to delete.
3. Confirm the deletion in the popup dialog.
4. Project Structure

## Project Structure

crud-application/
├── views/
│   ├── create.ejs
│   ├── read.ejs
│   ├── update.ejs
│   └── index.ejs
├── models/
│   └── user.js
├── public/
│   └── css/
│       └── styles.css
├── routes/
│   └── index.js
├── app.js
├── package.json
└── README.md