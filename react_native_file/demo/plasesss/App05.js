import React , { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const App = () => {
    return (
        <>
        <View style = {styles.container}>
            <Text style = {styles.text}>
                {/* 设置红色字体样式 */}
                <Text style = {styles.capitalLfetter}>rush</Text>    

                <Text>go</Text>

                {/* 设置字体加粗 */}
                <Text>
                    oversize
                    <Text style = {styles.wordBold}>ing</Text>two
                </Text>

                {/* 设置斜体 */}
                <Text style = {styles.italicText}>细节</Text>
                {/* 设置文字阴影 */}
                <Text style = {styles.textShadow}>
                    peace
                </Text>
            </Text>       
        </View>
        </>
    )

}
export default App;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
        padding: 20
    },
    text: {
        color: '#41cdf4',
    },
    capitalLfetter :{
        color: 'red',
        fontSize: 20
    },
    wordBold: {
        fontWeight: 'bold',
        color: 'black'
    },
    italicText: {
        color: '#37859b',
        fontStyle: 'italic'
    },
    textShadow: {
        textShadowColor: 'red',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1
    }

})


