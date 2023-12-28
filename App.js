import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FunAndClass, FirstAssignment, Details } from './src/components/master/Index';
import { Button } from 'react-native-elements';
import { View } from 'react-native';
import { DrawerNavigator } from './src/navigate/drawer'
import Navigation from './src/navigate';

const Stack = createNativeStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Navigation />
            {/* <Stack.Navigator>
                <Stack.Screen name="Weekly First Assignment" component={FirstAssignment} />
                <Stack.Screen name="Home" component={FunAndClass} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator> */}
        </NavigationContainer>
    );
}

export default App;
