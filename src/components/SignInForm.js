import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signInUser } from "../actions/UserActions"
import API from "../api/config";

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', error: '' };
        this._handleSignIn = this._handleSignIn.bind(this);
    }

    // abstract user login to another file
    _handleSignIn(username, pass) {
        API.post('/token/', {
            username: username,
            password: pass
        }).then(response => {
            this.props.signInUser(response.data.access, response.data.refresh)
        }).catch(error => {
            // Show error or redirect
            this.setState({ error: "Your credentials are invalid" })
            console.log(error);
        });
    }

    render() {
        return (
            <View>
                <Text>access: {this.props.userState.accessToken}</Text>
                <Text>refres: {this.props.userState.refreshToken}</Text>
                <Text>username: {this.state.username}</Text>
                <Text>password: {this.state.password}</Text>
                <Text style={styles.errorMessage}>{this.state.error}</Text>
                <Text style={styles.inputLabel}> Username </Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <Text style={styles.inputLabel}> Password </Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Sign in" onPress={() => this._handleSignIn(this.state.username, this.state.password)} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 48,
        borderColor: "#FFF222"
    },
    divider: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 18
    },
    inputLabel: {
        fontSize: 18,
        fontWeight: "bold"
    },
    errorMessage: {
        fontSize: 16,
        color: '#DC143C'
    }
});

const mapStateToProps = (state) => {
    const { userState } = state
    return { userState }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        signInUser,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);