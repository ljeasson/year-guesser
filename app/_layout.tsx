import { Tabs } from "expo-router";
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Initialize Stack of app pages
import TitleScreen from './title';
import TutorialScreen from './tutorial';
import SettingsScreen from './settings';
import Question from "./question";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
          <Stack.Screen name="Title"    component={TitleScreen}/>
          <Stack.Screen name="Tutorial" component={TutorialScreen}/>
          <Stack.Screen name="Settings" component={SettingsScreen}/>
          <Stack.Screen name="Question" component={Question}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
