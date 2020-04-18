import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

// Navigators
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

// Screens
import SplashScreen from '../screens/SplashScreen';

const RootStack = createStackNavigator();

class RootNavigator extends React.Component {
    render() {
        if (this.props.userState.isLoading) {
            return <SplashScreen />;
        }

        return (
            <RootStack.Navigator headerMode="none">
                {this.props.userState.accessToken ? (
                    <RootStack.Screen
                        name="Main"
                        component={MainNavigator}
                        options={{
                            animationEnabled: false
                        }}
                    />
                ) : (
                        <RootStack.Screen
                            name="Auth"
                            component={AuthNavigator}
                            options={{
                                animationEnabled: false
                            }}
                        />
                    )}
            </RootStack.Navigator>
        );
    }
}


const mapStateToProps = (state) => {
    const { userState } = state
    return { userState }
}

export default connect(mapStateToProps)(RootNavigator);
