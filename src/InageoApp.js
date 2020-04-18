import React from 'react';
import RootNavigator from './navigators/RootNavigator'
import { NavigationContainer } from '@react-navigation/native';

export default class InageoApp extends React.Component {
    // Call observations endpoint to know if user is logged in
    // componentDidMount = () => {
    //     this.props.getProfileFetch()
    // }

    render() {
        return (
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        );
    }
}