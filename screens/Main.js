
import React, { Component } from 'react';
import { KeepAwake } from 'expo';
import { StyleSheet, View, Text } from 'react-native';
import MainMap from '../components/MainMap';

class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <KeepAwake />
                <MainMap/>
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
// });

export default Main;
