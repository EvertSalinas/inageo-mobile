import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
// import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

export default class RootNavigator extends React.Component {
    render() {
        // if (true) {
        //     // We haven't finished checking for the token yet
        //     return <SplashScreen />;
        // }

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

            // <NavigationContainer>
            //     <Stack.Navigator>
            //         {null == null ? (
            //             // No token found, user isn't signed in
            //             <Stack.Screen
            //                 name="Login"
            //                 component={LoginScreen}
            //                 options={{ title: 'Sign in' }}
            //             />
            //         ) : (
            //                 // User is signed in
            //                 <Stack.Screen name="Home" component={HomeScreen} />
            //             )}
            //     </Stack.Navigator>
            // </NavigationContainer>