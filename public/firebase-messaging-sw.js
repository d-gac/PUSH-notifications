importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCSfMkDPLCsMjzBmhqRJiTlcpaMvZmimCo",
    authDomain: "laravel-notyfications.firebaseapp.com",
    projectId: "laravel-notyfications",
    storageBucket: "laravel-notyfications.appspot.com",
    messagingSenderId: "12518348958",
    appId: "1:12518348958:web:a9ca8ec9afd5936dd3438f",
    measurementId: "G-H7K4J6BQJF"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});
