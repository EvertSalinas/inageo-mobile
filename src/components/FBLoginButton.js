import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signInUser } from "../actions/UserActions"
import API from "../api/config";

class FBLoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this._handleSignIn = this._handleSignIn.bind(this);
    }

    _handleSignIn(token) {
        API.post('/token/facebook/', {
            token: token
        }).then(response => {
            console.log("--------")
            console.log(response.data)
            console.log("--------")
            this.props.signInUser(response.data.access, response.data.refresh)
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
                                        this._handleSignIn(data.accessToken.toString())
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        signInUser,
    }, dispatch)
);

export default connect(mapDispatchToProps)(FBLoginButton);