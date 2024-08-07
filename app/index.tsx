import { Button, Alert, StyleSheet, Image, Platform, Text, SafeAreaView, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Separator = () => <View style={styles.separator} />;

export default function index() {
  return (
    <View style={{flex: 1}}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>YEAR GUESSER</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="PLAY"      onPress={() => Alert.alert('Play Button pressed')}/>
        <Text style={styles.title}> Play a game of Year Guesser</Text>
      
        <Button title="TUTORIAL"  color="#f194ff"  onPress={() => Alert.alert('Tutorial Button pressed')}/>
        <Text style={styles.title}> Learn how to play Year Guesser</Text>
      
        <Button title="SETTINGS"  color="#841584"  onPress={() => Alert.alert('Settings Button pressed')}/>
        <Text style={styles.title}> Adjust the settings</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'SpaceMono-Regular',
  },

  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'column',
    //justifyContent: "center",
    marginVertical: 64,
    
  },

  
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'red',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
  
  title: {
    textAlign: 'center',
    marginVertical: 2,
  },
  button: {
    
  }
});