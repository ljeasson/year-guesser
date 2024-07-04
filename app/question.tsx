import React from 'react';
import { Button, Text, View, TextInput, Alert } from "react-native";
import styles from './_styles';

const Question = ({navigation}: {navigation: any}) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    
    return (
    <View style={{flex: 1}}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Question 1</Text>
        </View>

        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>MOVIE:    The Avengers</Text>
            <Text style={styles.questionText}>GAME:     Farcry 3</Text>
            <Text style={styles.questionText}>SONG:     'Gangnam Style' by Psy</Text>
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