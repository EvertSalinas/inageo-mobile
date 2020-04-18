import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { signInUser } from "../actions/UserActions"
import API from "../api/config";

export default class FBLoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this._signIn = this._signIn.bind(this);
    }

    // abstract user login to another file
    _signIn(token) {
        API.post('/token/facebook', {
            token: token
        }).then(response => {
            this.props.signInUser(response.data.access, response.data.refresh)
            // this.props.navigation.navigate('Home')
        }).catch(error => {
            // Show error or redirect
            console.log(error);
        });
    }

    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["email"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.log(data.accessToken.toString())
                                        // this._signIn(data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")} />
            </View>
        );
    }
};

module.exports = FBLoginButton;

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { LoginButton, AccessToken } from 'react-native-fbsdk';

// export default class FacebookButton extends Component {
//     render() {
//         return (
//             <LoginButton
//                 onLoginFinished={
//                     (error, result) => {
//                         if (error) {
//                             console.log("login has error: " + result.error);
//                         } else if (result.isCancelled) {
//                             console.log("login is cancelled.");
//                         } else {
//                             AccessToken.getCurrentAccessToken().then(
//                                 (data) => {
//                                     console.log(data.accessToken.toString())
//                                 }
//                             )
//                         }
//                     }
//                 }
//                 onLogoutFinished={() => console.log("logout.")}
//             />
//         )
//     }
// }

// const styles = StyleSheet.create({});