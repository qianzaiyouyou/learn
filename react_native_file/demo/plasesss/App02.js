import React, {Component} from 'react';
import  {View,Text} from 'react-native';

const App = () => {
    return (
        <View>
            <View>
                <Text>
                    start
                </Text>
            </View>
            <View style={{marginTop:8,padding:8,backgroundColor: 'blue'}}>
                <Text style={{color:'white'}}>one</Text>
            </View>
            <View style={{marginTop:8,padding:8,width:200,backgroundColor: 'red'}}>
                <Text style={{color:'white'}}>two</Text>
            </View>
        </View>
    )
}
export default App;