import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOutUser } from "../actions/UserActions"
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from 'react-native-google-signin';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this._handleSignOut = this._handleSignOut.bind(this);
    }

    _handleSignOut() {
        this._signOutGoogle()
        this.props.signOutUser()
    }

    _signOutGoogle = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
            //Remove user session from the device.
            try {
                await GoogleSignin.revokeAccess();
                await GoogleSignin.signOut();
            } catch (error) {
                console.error(error);
            }
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>{this.props.userState.accessToken}</Text>
                {this.props.userState.accessToken
                    ? <Button title="Sign Out" onPress={() => this._handleSignOut()} />
                    : null
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { userState } = state
    return { userState }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        signOutUser,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);