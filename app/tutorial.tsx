import { Button, Alert, StyleSheet, Image, Platform, Text, SafeAreaView, View } from "react-native";
import styles from './_styles';

const TutorialScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Tutorial</Text>
        </View>
      
        <View style={styles.questionContainer}>
            <Text style={styles.tutorialText}>A game has 10 questions</Text>
            <Text style={styles.tutorialText}>Each questions lists a movie, video game, and song</Text>
            <Text style={styles.tutorialText}>The movie, game, and song were all released in the same year</Text>
            <Text style={styles.tutorialText}>Try to correctly guess the year</Text>
        </View>

        <View style={styles.buttonContainer}>
            <Button title="BACK" onPress={() => navigation.navigate('Title', {name: 'Title'})}/>
        </View>
    </View>
  );
}
export default TutorialScreen;