/*This is th Example of google Sign in*/
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from 'react-native-google-signin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signInUser } from "../actions/UserActions"
import API from "../api/config";

class GoogleSignInComponent extends React.Component {
    constructor(props) {
        super(props);
        super(props);
        this.state = { username: '', password: '' };
        this._handleSignIn = this._handleSignIn.bind(this);
    }

    componentDidMount() {
        //initial configuration
        GoogleSignin.configure({
            //It is mandatory to call this method before attempting to call signIn()
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            // Repleace with your webClientId generated from Firebase console
            webClientId: '840156785488-47l2i9tdrdgm73ota78euvuv2fbk8l5m.apps.googleusercontent.com',
        });
        //Check if user is already signed in
        this._isSignedIn();
    }

    // abstract user login to another file
    _handleSignIn(token) {
        console.log("jajaja")
        API.post('/token/google/', {
            id_token: token
        }).then(response => {
            console.log("--------")
            console.log(response.data)
            console.log("--------")
            this.props.signInUser(response.data.access_token, response.data.refresh_token)
        }).catch(error => {
            // Show error or redirect
            console.log(error);
        });
    }

    _isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
            console.log('User is already signed in');
            //Get the User details as user is already signed in
            this._getCurrentUserInfo();
        } else {
            //alert("Please Login");
            console.log('Please Login');
        }
        this.setState({ gettingLoginStatus: false });
    };

    _getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            this._handleSignIn(userInfo.idToken);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                console.log('User has not signed in yet');
            } else {
                console.log("Something went wrong. Unable to get user's info");
            }
        }
    };

    _signIn = async () => {
        //Prompts a modal to let the user sign in into your application.
        try {
            await GoogleSignin.hasPlayServices({
                //Check if device has Google Play Services installed.
                //Always resolves to true on iOS.
                showPlayServicesUpdateDialog: true,
            });
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info --> ', userInfo);
            this._handleSignIn(userInfo.idToken);
        } catch (error) {
            console.log('Message', error.message);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User Cancelled the Login Flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Signing In');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services Not Available or Outdated');
            } else {
                console.log('Some Other Error Happened');
            }
        }
    };

    _signOut = async () => {
        //Remove user session from the device.
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ userInfo: null }); // Remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <GoogleSigninButton
                    style={{ width: 312, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={this._signIn}
                />
                {/* <Text>{this.state.userInfo}</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 30,
    },
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        signInUser,
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(GoogleSignInComponent);