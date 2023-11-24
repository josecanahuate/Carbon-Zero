import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
	apiKey: "AIzaSyCHiubIbxfEBMxWIsThKz8zmNAAZGJIH2s",
	authDomain: "carbon-zero-8a89c.firebaseapp.com",
	projectId: "carbon-zero-8a89c",
	storageBucket: "carbon-zero-8a89c.appspot.com",
	messagingSenderId: "865884105482",
	appId: "1:865884105482:web:2288b60d8e56a04e59a8f3",
	measurementId: "G-PDXZH2GN2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

