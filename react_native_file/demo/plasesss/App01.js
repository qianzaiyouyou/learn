import React from "react";

import {
    //样式对象
    StyleSheet,
    //视图组件
    View,
    //文本组件
    Text,
}from 'react-native';


const App = () => {
    //定义组件视图的JSX对象
    //JSX只能有一个根对象
    //创建UI时最基础的组件view, 类似于网页中的div
    //文本的内容需要放置到Text组件中

    return (
        <>
            <View style = {styles.view}>
                <Text>
                    Hello world
                </Text>
            </View>
        </>
    );
};

//定义样式对象
const styles = StyleSheet.create({
    view: {
        height: 200,
        width: 200,
        backgroundColor: 'rgba(200,255,0,0.5)',
    },
});
export default App;