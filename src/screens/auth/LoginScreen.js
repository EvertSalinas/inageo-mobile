import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import FBLoginButton from '../../components/FBLoginButton'
import LoginForm from '../../components/LoginForm'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.titleStyle}> Login With Facebook</Text>
                    <LoginForm />
                    <View style={styles.divider} />
                    <View style={{ alignSelf: "center" }}>
                        <FBLoginButton />
                    </View>
                    <Button title="Home Screen" onPress={() => this.props.navigation.navigate('Home')} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 10,
        // justifyContent: "center"
    },
    titleStyle: {
        fontSize: 18,
        marginVertical: 20
    },
    formContainer: {
        flex: 1,
        borderColor: "#FFF222",
        flexDirection: "column",
        alignItems: "stretch"
    },
    divider: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginVertical: 20,
    },
});