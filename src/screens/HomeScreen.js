import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>{this.props.userState.email}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { userState } = state
    return { userState }
}

export default connect(mapStateToProps)(HomeScreen);