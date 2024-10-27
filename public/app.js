document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    };


firebase.initializeApp(firebaseConfig);

// Get Firebase services
const auth = firebase.auth();
const firestore = firebase.firestore();

// DOM elements
const loginContainer = document.getElementById('login-container');
const chatContainer = document.getElementById('chat-container');
const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const logoutButton = document.getElementById('logout-button');

// Login event listener
document.getElementById('login-button').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
});

// Logout event listener
logoutButton.addEventListener('click', () => {
  auth.signOut();
});

// Send message event listener
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    const user = auth.currentUser;
    if (user) {
      const { displayName, uid } = user;
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      firestore.collection('messages').add({
        message,
        displayName,
        uid,
        timestamp
      })
        .then(() => {
          messageInput.value = '';
        })
        .catch(error => {
          console.error('Error sending message:', error);
        });
    }
  }
});

// Firestore real-time listener for messages
firestore.collection('messages')
  .orderBy('timestamp')
  .onSnapshot(snapshot => {
    messageList.innerHTML = '';
    snapshot.forEach(doc => {
      const { message, displayName } = doc.data();
      const listItem = document.createElement('div');
      listItem.textContent = `${displayName}: ${message}`;
      messageList.appendChild(listItem);
    });
  });

// Authentication state change listener
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    loginContainer.style.display = 'none';
    chatContainer.style.display = 'block';
  } else {
    // User is signed out
    loginContainer.style.display = 'block';
    chatContainer.style.display = 'none';
  }
});
});
