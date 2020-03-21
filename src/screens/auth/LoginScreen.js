import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import FBLoginButton from '../../components/FBLoginButton';
import LoginForm from '../../components/LoginForm';
import GoogleSignInComponent from '../../components/GoogleSignInComponent';
import axios from 'axios';

export default class LoginScreen extends Component {
    render() {
        // axios.get('http://inageo-development.us-west-2.elasticbeanstalk.com/api/token/')
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => console.log(response.data))
            .catch(err => console.log(err))

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
                    <GoogleSignInComponent />
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