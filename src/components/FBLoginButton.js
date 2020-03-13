import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["email"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + error.message);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                alert("Login was successful with permissions: " + result.grantedPermissions)
                                AccessToken.getCurrentAccessToken()
                                    .then((data) => {
                                        callback(data.accessToken)
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
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