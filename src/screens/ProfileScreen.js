import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class ProfileScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
                <Text>email: {this.props.userState.email}</Text>
                <Text>loading: {this.props.userState.isLoading}</Text>
                <Text>atoken: {this.props.userState.accessToken}</Text>
                <Text>rtoken: {this.props.userState.refreshToken}</Text>
                <Text>signout: {this.props.userState.isSignout}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { userState } = state
    return { userState }
}

export default connect(mapStateToProps)(ProfileScreen);