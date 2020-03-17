import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveCredentials } from "../actions/UserActions"

class LoginForm extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.userState.email}</Text>
                <Text style={styles.inputLabel}> Email </Text>
                <TextInput
                    style={styles.input}
                    placeholder={this.props.userState.email}
                    onChangeText={(text) => this.props.saveCredentials(text)}
                    value={this.props.userState.email}
                />
                <Text style={styles.inputLabel}> Password </Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    onChangeText={(text) => this.props.saveCredentials(text)}
                    value={this.props.userState.password}
                />
                <Button title="Sign in with email" onPress={() => this.props.saveCredentials("evert@teloslabs.co")} />
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
    }
});

const mapStateToProps = (state) => {
    const { userState } = state
    return { userState }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        saveCredentials,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);