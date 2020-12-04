import React , { Component } from "react";
import { View , Text , StatusBar , StyleSheet , TouchableOpacity } from 'react-native';

class App extends Component {

    state = {
        hidden: false,
        barStyle: 'default'
    }

    changeHidden = () => {
        var hidden = this.state.hidden ? false : true;
        this.setState({hidden: hidden});
    }

    changeBarStyle = () => {
        var barStyle = this.state.barStyle == 'light-content' ? 'dark-content' : 'light-content';
        this.setState({barStyle: barStyle});
    }

    render() {
        return (
            <View>
                <StatusBar barStyle = {this.state.barStyle} hidden = {this.state.hidden}></StatusBar>
                <TouchableOpacity style = {styles.button} onPress = {this.changeHidden}>
                    <Text>显示或隐藏</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress = {this.changeBarStyle}>
                    <Text>改变主题颜色</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default App;


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: "center",
        marginTop: 100
    }
});