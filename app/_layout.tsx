import { Tabs } from "expo-router";
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TitleScreen from './title';
import TutorialScreen from './tutorial';
import SettingsScreen from './settings';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
          <Stack.Screen name="Title"    component={TitleScreen}/>
          <Stack.Screen name="Tutorial" component={TutorialScreen}/>
          <Stack.Screen name="Settings" component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    /*
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
    */
  );
}
