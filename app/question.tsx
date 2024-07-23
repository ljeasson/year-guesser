import React from 'react';
import { Button, Text, View, TextInput, Alert } from "react-native";
import styles from './_styles';

////////////////////////////////////////////////////////////////////////////

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUmGXXBQ6WWn_kjeW_Mwsm3NImxkACD0M",
  authDomain: "year-guesser-data.firebaseapp.com",
  databaseURL: "https://year-guesser-data-default-rtdb.firebaseio.com",
  projectId: "year-guesser-data",
  storageBucket: "year-guesser-data.appspot.com",
  messagingSenderId: "606771513553",
  appId: "1:606771513553:web:e1caa12c4cd71d70d01df0",
  measurementId: "G-H6T295XD4X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Read data from database
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
let movies = ""; let songs = ""; let games = ""; 
let YEAR

const movie_query = ref(db, 'Movies/1988/');        onValue(movie_query, (snapshot) => { movies = snapshot.val(); });
const songs_query = ref(db, 'Songs/1988/');         onValue(songs_query, (snapshot) => { songs = snapshot.val(); });
const games_query = ref(db, 'Video Games/1988/');   onValue(games_query, (snapshot) => { games = snapshot.val(); });

//let MOVIE = movies.slice(1,movies.length)[Math.floor(Math.random()*(movies.length-1))];//movies[Math.floor(Math.random()*movies.length)];
//let GAME = games.slice(1,games.length)[Math.floor(Math.random()*(games.length-1))];
//let SONG = songs.slice(1,songs.length)[Math.floor(Math.random()*(songs.length-1))];

console.log(movies)
console.log(games)
console.log(songs)


/*
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
*/

////////////////////////////////////////////////////////////////////////////

const Question = ({navigation}: {navigation: any}) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    
    return (
    <View style={{flex: 1}}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Question 1</Text>
        </View>

        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>MOVIE:    {movies}</Text>
            <Text style={styles.questionText}>GAME:     {games}</Text>
            <Text style={styles.questionText}>SONG:     {songs}</Text>
        </View>
      
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>What year was it?</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Guess the release year"
                keyboardType="numeric"
            />
            <Button title="ANSWER" onPress={() => Alert.alert('Maybe Correct?')}/>
        </View>
    </View>
  );
}
export default Question;