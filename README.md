# Chat APP UI In React

I have Spent good amount of time on this project. This chat UI uses Redux and Hooks concept to create UI part of Chat,
Created Actions, reducers, Store for Global state management by Redux. Worked on useSelector, useDispatch , usestate,
useEffect hooks. Used Routes, Browser Router , Route for displaying chats of multiple contacts, Binded all app data with Routes
and Provider.

Used Bootstarp, React Bootstrap for styling.

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
  npm start
```

## How to Approach

Steps:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Now create Different Components to render it over a same page. As I created 4 components CRUD, Form, Table.
Now this all components are rendered on App component and app component is rendered at index which show view Live.

## Screenshots

![App Screenshot](/chatUI1.jpg?raw=true "Optional Title")
![App Screenshot](/chatUI2.jpg?raw=true "Optional Title")
![App Screenshot](/chatUI3.jpg?raw=true "Optional Title")
![App Screenshot](/chatUI4.jpg?raw=true "Optional Title")
![App Screenshot](/chatUI5.jpg?raw=true "Optional Title")

## Deployment

This project is deployed on :

# Live view:

# Video of Explaination

# To deploy this project run

```bash
  npm run deploy
```

## Tech Stack

React , Redux , React-Hooks , React Routers , React Bootstarp, Bootstarp, react-toastify , props , useSelector,useDispatch, useState, useEffect hooks, Dummy API data to build this project

## Features

- Dummy logged in user.
- Search bar to search conversations by contact name.
- Left Side bar having all conversation created list.
- In Left Side Bar Each conversation has contact name and some text of the last message in the chat
- Conversation button
- - On clicking this open a pop up and load all the contacts (from the dummy data.json/js file).
- - On clicking the contact should start a new conversation (if no conversation was previously started).
    Or open the existing conversation for that contact.
- Ride Side View Showing the current selected conversation messages.
- Send a message in the conversation.
- Handle errors and success alerts and show appropriate Alert/Notification.

- Used only react-router and React hooks.

## Structure

- |-- Chatting-App
    |-- .gitignore
    |-- chatUI1.jpg
    |-- chatUI2.jpg
    |-- chatUI3.jpg
    |-- chatUI4.jpg
    |-- chatUI5.jpg
    |-- directoryList.md
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- robots.txt
    |-- src
        |-- index.css
        |-- index.js
        |-- logo.svg
        |-- reportWebVitals.js
        |-- components
        |   |-- App.js
        |   |-- LeftSideView
        |   |   |-- ContactLastMessage.js
        |   |   |-- ContactList.js
        |   |   |-- ContactName.js
        |   |   |-- ContactsImage.js
        |   |   |-- ContactTab.js
        |   |   |-- NewConversation.js
        |   |   |-- NewConversationTab.js
        |   |   |-- ProfileHeader.js
        |   |   |-- SearchBar.js
        |   |-- RightSideView
        |   |   |-- ConversationList.js
        |   |   |-- LeftChatBubble.js
        |   |   |-- MessageBox.js
        |   |   |-- MessageInput.js
        |   |   |-- NoConvo.js
        |   |   |-- RightChatBubble.js
        |   |-- styles
        |       |-- App.css
        |       |-- LeftSideView.css
        |       |-- RightSideView.css
        |-- Data
        |   |-- users.js
        |-- redux
            |-- actions
            |   |-- actionTypes.js
            |   |-- contact.js
            |-- reducers
            |   |-- contact.js
            |   |-- index.js
            |   |-- user.js
            |-- store
                |-- index.js

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Author

- [@Akshay](https://www.github.com/akshay058)
