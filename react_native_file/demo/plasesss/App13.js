import React , { Component } from 'react';
import { View , StyleSheet , Animated , TouchableOpacity } from 'react-native';

class App extends Component {
    UNSAFE_componentWillMount = () => {
        //创建动画属性对象
        this.animatedWidth = new Animated.Value(50);
        this.animatedHeight = new Animated.Value(100);
    }
    animatedBox = () => {
        //点击后动画变化
        Animated.timing(this.animatedWidth,{
            toValue: 200,
            duration: 1000
        }).start()
        Animated.timing(this.animatedHeight, {
            toValue: 500,
            duration: 500
        }).start()
    }

    render() {
        const animatedStyle = {
            width: this.animatedWidth,
            height: this.animatedHeight
        }

        return (
            <TouchableOpacity
                style = {styles.container}
                onPress = {this.animatedBox}
            >
                <Animated.View style = {[styles.box, animatedStyle]}></Animated.View>
            </TouchableOpacity>
        );
    }

}

export default App;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: 'blue',
        width: 50,
        height: 100
    }
});