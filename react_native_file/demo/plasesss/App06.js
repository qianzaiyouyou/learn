import React , { Component } from 'react';
import { View, Text , Image , StyleSheet } from 'react-native';

export default class App extends React.Component {
    state = {
        name: '111',
        type: '222'
    }
    
    updateState = () => {
        const type = this.state.type == '222' ? '333' : '222';
        this.setState({type});
    }

    render() {
        const {name,type} = this.state;
        return (
            <View style = {styles.container}>
                <Text onPress = {this.updateState}>名称: {name}</Text>
                <Text>特点: {type}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create ({
    container: {
        margin: 10
    }
});