import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SignInScreen from '../screens/auth/SignInScreen';

const AuthStack = createStackNavigator();

export default class AuthNavigator extends React.Component {
    render() {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{ title: "Sign In" }}
                />
                {/* <AuthStack.Screen
                    name="CreateAccount"
                    component={CreateAccount}
                    options={{ title: "Create Account" }}
                /> */}
            </AuthStack.Navigator>
        );
    }
}
