// Gets all the variables in 'firebase' and dumps them into the variable firebase
import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = 
{
	apiKey: "AIzaSyAiFt3tmiQUCJOGnTr8V0Bd3CIEXo9v99I",
	authDomain: "shopify-challenge-project.firebaseapp.com",
	databaseURL: "https://shopify-challenge-project-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "shopify-challenge-project",
	storageBucket: "shopify-challenge-project.appspot.com",
	messagingSenderId: "497925478052",
	appId: "1:497925478052:web:07f9e504ae6c4ee337f831",
	measurementId: "G-MFGGN6YNPE"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };