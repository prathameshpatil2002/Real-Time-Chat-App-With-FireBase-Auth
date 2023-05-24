# Real-Time Chat App

This is a real-time chat application that allows users to send and receive messages in real time.
The backend services are hosted on Firebase, and users authenticate with their Google accounts.
## Features

- Google User Authentication: Users can log in and log out using their Google accounts via Firebase Authentication.
- Real-Time Messaging: Messages sent by users appear in the chat room in real time.
- Message History: The chat application stores the history of messages for each chat room, which is visible to users when they join the room.

## Technologies Used

- HTML, CSS, and JavaScript for the frontend.
- Firebase for hosting the backend services, user authentication, and real-time database.
- Firebase Authentication for Google account authentication.
- Firebase Firestore for storing chat room data and messages.

## Setup and Installation

1. Clone the repository or download the source code.
2. Set up a Firebase project and enable the necessary services (Authentication and Firestore).
3. Update the Firebase configuration details in the `app.js` file.
4. Deploy the frontend code to a hosting provider of your choice (e.g., Firebase Hosting).
5. Deploy the backend code (Firebase Cloud Functions) to Firebase.
6. Set up the necessary security rules and permissions for Firestore to ensure data privacy and access control.

## Usage

1. Access the deployed application through the provided URL : https://real-time-chat-d71e7.web.app/
2. Log in using your Google account.
3. Start sending and receiving real-time messages within the chat room.

## Folder Structure
- public/index.html => HTML file for the frontend
- public/style.css  => CSS styles for the frontend
- public/app.js     => JavaScript code for the frontend functionality

