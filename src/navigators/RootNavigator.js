import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

// Screens
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

class RootNavigator extends React.Component {
    render() {
        // if (this.props.userState.isLoading) {
        //     // We haven't finished checking for the token yet
        //     return <SplashScreen />;
        // }

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {this.props.userState.userToken == null ? (
                        <>
                            <Stack.Screen name="SignIn" component={LoginScreen} />
                            <Stack.Screen name="Home" component={HomeScreen} />
                            {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
                            {/* <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
                        </>
                    ) : (
                            <>
                                <Stack.Screen name="Home" component={HomeScreen} />
                                {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
                            </>
                        )}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (state) => {
    const { userState } = state
    return { userState }
}

export default connect(mapStateToProps)(RootNavigator);
