import React , { Component } from 'react';
import { View } from 'react-native';
export default class FlexDirectionBasics extends Component {
    render() {
        return (
            //设置三个元素，水平排列，水平平均分布，竖直居中
            <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{width:50, height:50 , backgroundColor: 'powderblue'}}></View>
                <View style={{width:50, height: 50,backgroundColor: 'skyblue'}}></View>
                <View style={{width:50, height: 50, backgroundColor: 'steelblue'}}></View>
            </View>
        );
    }
};
