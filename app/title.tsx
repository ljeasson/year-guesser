import { Button, Alert, StyleSheet, Image, Platform, Text, SafeAreaView, View } from "react-native";
import styles from './_styles';

//const Separator = () => <View style={styles.separator} />;

const TitleScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>YEAR GUESSER</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="PLAY"      onPress={() => navigation.navigate('Question', {name: 'Question'})}/>
        <Text style={styles.buttonText}> Play a game of Year Guesser</Text>
      
        <Button title="TUTORIAL"  color="#f194ff"  onPress={() => navigation.navigate('Tutorial', {name: 'Tutorial'})}/>
        <Text style={styles.buttonText}> Learn how to play Year Guesser</Text>
      
        <Button title="SETTINGS"  color="#841584"  onPress={() => navigation.navigate('Settings', {name: 'Settings'})}/>
        <Text style={styles.buttonText}> Adjust the settings</Text>
      </View>

    </View>
  );
}
export default TitleScreen;