import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Navbar from '../components/Navbar';

const Stack = createNativeStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="home" options={{
                   headerShown:false
                }} component={Home} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}