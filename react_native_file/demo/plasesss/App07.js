import React , { Component } from 'react';
import { View , Text , Image , StyleSheet , Alert } from 'react-native';

class StieNameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name };
    }
    //触摸事件
    updateState = () => {
        const name = this.state.name == "111" ? "222" : "111";
        this.setState({name : name});
    }

    render() {
        const { name } = this.state;
        return (
            <View>
                <Text onPress = {this.updateState}>{name}</Text>
            </View>
        );
    }

}

export default class App extends React.Component {
    
    render() {
        return (
            <View style= {styles.container}>
                <StieNameComponent name={'111'}/> 
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});