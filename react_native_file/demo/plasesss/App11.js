import React from 'react';
import { Alert , Text , TouchableOpacity , StyleSheet ,View } from 'react-native';

const App = () => {

    const showAlert = () => {
        Alert.alert('发送数据成功');
    }
    const showTip = () => {
        Alert.alert('删除数据成功');
    }
    const showAlert2 = () => {
        Alert.alert(
            '警告',
            '确认删除?',
            [
                {text:'确认', onPress: () => showTip()},
                {text:'取消',style:'cancel'},
            ],
            {cancelable: false}
        );
    }

    return (
        <View style={{alignItems:"center"}}>
            <TouchableOpacity onPress = {showAlert} style = {styles.button}>
                <Text>发送</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {showAlert2} style = {styles.button}>
                <Text>删除</Text>
            </TouchableOpacity>
        </View>
    );

}

export default App;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4ba37b",
        width: 100,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    }
})