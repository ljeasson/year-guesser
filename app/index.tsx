import { Button, Alert, StyleSheet, Image, Platform, Text, SafeAreaView, View } from "react-native";

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const Separator = () => <View style={styles.separator} />;

export default function TitleMenu() {
  return (
    <SafeAreaView style={styles.titleContainer}>
      <View>
        <ThemedText style={styles.titleText}>YEAR GUESSER</ThemedText>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="PLAY"      onPress={() => Alert.alert('Play Button pressed')}/>
        <Button title="TUTORIAL"  color="#f194ff"  onPress={() => Alert.alert('Tutorial Button pressed')}/>
        <Button title="SETTINGS"  color="#841584"  onPress={() => Alert.alert('Settings Button pressed')}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    gap: 8,
    flex: 1,
  },
  baseText: {
    fontFamily: 'SpaceMono-Regular',
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
  buttonContainer: {
    marginVertical: 8,
  }
});