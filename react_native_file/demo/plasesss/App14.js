import React , { Component } from 'react';
import { View , Text, Switch , StyleSheet } from 'react-native';

export default class App extends Component {
    constructor() {
        super();
        this.label = { false: '关' , true: '开' }
        this.state = {
            switchValue: true
        }
    }

    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    }

    render() {
        return (
            <View style = {styles.container}>
                <Switch
                    onValueChange = {this.toggleSwitch}
                    value = {this.state.switchValue}
                ></Switch>
                <View><Text>Switch 当前的状态是: {this.label[this.state.switchValue]}</Text></View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    }
});