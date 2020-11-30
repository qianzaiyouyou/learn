import React, { component } from 'react';
import {View,Text,StyleSheet} from 'react-native';

class App extends React.Component {
    render() {
        return (
            <View style = {StyleSheet.container}>
                {/* 没有样式继承的，每一个组件都要单独设置样式 */}
                <View style ={[styles.txt,{color:'#333300'}]}>
                    <Text>写错一个算我输</Text>
                </View>
                {/* 直接设置样式对象 */}
                <View style={style.card}></View>
                {/* 创建样式对象 */}
                <View style={{marginTop:8,maginBottom:8,height:100,backgroundColor: 'blue'}}></View>
                {/* 合并多个样式对选哪个，同样的设置，右边的优先级越高 */}
                <View style={[styles.card, {backgroundColor: 'yellow'}]}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#eeeeee'
    },
    card: {
        height: 100,
        backgroundColor: '#ffffff',
    }
});

export default App;