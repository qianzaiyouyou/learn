import React, { Component } from 'react';
import { View, Text , Picker , StyleSheet } from 'react-native';

class App extends Component {
    users = [
        {label: '请选择性别' , value: ''},
        {label: '男' , value: 'male'},
        {label: '女' , value: 'female'},
        {label: '其他' , value: 'other'},
    ]
    state = {user: ''}
    updateUser = (user) => {
        this.setState({user: user});
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.label}>请选择性别</Text>
                {/*设置选择器*/}
                <Picker 
                    selectedValue = {this.state.user}//选中的值
                    onValueChange = {this.updateUser}
                >
                    {
                        //设置选项
                        this.users.map((o,index) => 
                            <Picker.Item label={o.label} value = {o.value} />
                        )
                    }
                </Picker>
                <Text style = {styles.label}>你的选择是</Text>
                <Text style = {styles.text}>{this.state.user}</Text>
            </View>
        );
    }

}

export default App;

const styles = StyleSheet.create({
    container: {
        margin: 50
    },
    label: {
        fontSize: 14,
        color: '#333333'
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
});