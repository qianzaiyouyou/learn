import React, { Component } from 'react';
import { Text , View , Image , StyleSheet , TouchableOpacity , TextInput } from 'react-native';


class Inputs extends Component {
    state = {
        eamil: '',
        password: '',
        intro: ''
    }
    handleEmail = (text) => {
        this.setState({email: text});
    }
    handlePassword = (text) => {
        this.setState({password: text});
    }
    handleIntro = (text) => {
        this.setState({intro: text});
    }

    register = (email,pass,intro) => {
        alert('email:' + email + '\npassword: ' + pass + "\nintro:" + intro );
    }

    render() {
        return (
            <View style = {styles.contaniner}>
                <TextInput 
                    style = {styles.input}
                    //设置下划线的颜色，透明则为transparent
                    underlineColorAndroid = 'transparent'
                    //占位符
                    placeholder = '请输入邮箱'
                    //占位符的字体颜色
                    placeholderTextColor = '#ccc'
                    //字母大写模式: 'none', 'sentences', 'words' , 'characters'
                    autoCapitalize = 'none' 
                    //键盘类型,可选的值有 "default", "number-pad","numeric","email-address","phone-pad"
                    keyBoardType = "email-address"
                    //键盘上的返回类型，可选的值有""done","go"，"nexr","search","send"
                    returnKeyType = "next"
                    //文本变更后的回调函数,参数为输入框里的文本
                    onChangeText = {this.handleEmail}
                    ></TextInput>
                <TextInput 
                    style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "请输入密码"
                    placeholderTextColor = "#ccc"
                    autoCapitalize = "none"
                    returnKeyType = "next"
                    //是否属于密码框类型
                    secureTextEntry = {true}
                    onChangeText = {this.handlePassword}
                ></TextInput>
                <TextInput
                    style = {[styles.input,{height:100}]}
                    underlineColorAndroid = "transparent"
                    placeholder = "请输入描述"
                    placeholderTextColor = "#ccc"
                    autoCapitalize = "none"
                    //多行设置
                    multiline = {true}
                    // 行数
                    numberOfLines = {4}
                    //文字位置靠上
                    textAlignVertical = "top"
                    returnKeyType = "done"
                    onChangeText = {this.handleIntro}
                >
                </TextInput>
                {/*封装说明,时期可以正确响应触摸操作*/}
                <TouchableOpacity 
                    style = {styles.submitButton}
                    onPress = {
                        () => this.register(this.state.email, this.state.password,this.state.intro)}>
                        <Text style = {styles.submitButtonText}>注册</Text>
                    </TouchableOpacity>
            </View>
        );
    }

}
export default Inputs;

const styles = StyleSheet.create({
    contaniner: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        paddingLeft: 8,
        height: 40,
        borderColor: "#eeeeee",
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: "#7a42f4",
        padding: 10,
        alignItems: "center",
        margin: 15,
        height:  40
    },
    submitButtonText: {
        color: 'white'
    }
});