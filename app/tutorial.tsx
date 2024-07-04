import { Button, Alert, StyleSheet, Image, Platform, Text, SafeAreaView, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const TutorialScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Tutorial</Text>
        </View>
      
        <View style={styles.buttonContainer}>
            <Text style={styles.title}>You made it to the Tutorial</Text>
            <Button title="BACK" onPress={() => navigation.navigate('Title', {name: 'Title'})}/>
        </View>
    </View>
  );
}
export default TutorialScreen;



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