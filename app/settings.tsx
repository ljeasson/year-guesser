import { Button, Alert, StyleSheet, Image, Platform, Text, SafeAreaView, View } from "react-native";
import styles from './_styles';

const SettingsScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Settings</Text>
        </View>
      
        <View style={styles.questionContainer}>
            <Text style={styles.tutorialText}>Nothing here yet.  Check back later :)</Text>
        </View>

        <View style={styles.buttonContainer}>
            <Button title="BACK" onPress={() => navigation.navigate('Title', {name: 'Title'})}/>
        </View>
    </View>
  );
}
export default SettingsScreen;