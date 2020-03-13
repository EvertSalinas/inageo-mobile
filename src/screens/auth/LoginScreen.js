import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FBLoginButton from '../../components/FBLoginButton'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}> Login With Facebook</Text>
                <FBLoginButton />
                <Button title="Login Screen" onPress={() => navigation.navigate('Login')} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    label: {
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 48,
    },
});