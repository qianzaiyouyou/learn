import React , { Component }  from 'react';
import { Alert , Text , TouchableOpacity , StyleSheet , View, TouchableHighlight , TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
    state = {
        'name': '力有不逮乎?',
        'inputText': '安得倚天抽宝剑'
    }

    async readName() {
        try {
            //读取数据
            const value = await AsyncStorage.getItem('name');
            if(value !== null){
                this.setState({"name": value});
            }
            Alert.alert('数据读取成功');
        } catch(e) {
            console.log(e);
            Alert.alert("读取数据失败！");
        }
    }

    setName = () => {
        //保存数据
        AsyncStorage.setItem('name', this.state.inputText);
        Alert.alert('保存成功!');
    }
    render() {
        return (
            <View style = {styles.container}>
                <TextInput
                    style = {styles.textInput}
                    autoCapitalize = 'none'
                    value = {this.state.inputText}
                />
                <View style = {{flexDirection: 'row'}}>
                    <TouchableHighlight style = {[styles.button,{marginRight:8}]} onPress = {this.setName}>
                        <Text style={styles.buttonTxt}>保存</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style = {[styles.button,{backgroundColor: "blue"}]} onPress = {this.readName.bind(this)}>
                        <Text style={styles.buttonTxt}>读取</Text>
                    </TouchableHighlight>
                </View>
                <View style = {{marginTop: 8}}>
                    <Text>当前的值: {this.state.name}</Text>
                </View> 
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    textInput: {
        margin: 5,
        height: 44,
        width: '100%',
        borderWidth: 1,
        borderColor: "#dddddd"
    },
    button: {
        flex: 1,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        backgroundColor: 'red'
    },
    buttonTxt: {
        justifyContent: 'center',
        color: '#ffffff'
    }
});