import React , {Component} from 'react';
import { View , StyleSheet , ActivityIndicator , Text ,TouchableOpacity ,Button } from 'react-native';

class App extends Component {
    state = {animating: true}

    closeActivityIndicator = () => {
        this.setState({animating:!this.state.animating})
    }

    componentDidMount = () => this.closeActivityIndicator();

    render() {
        const animating = this.state.animating;
        return (
            <View style = {styles.container}>
                {/*活动指示器，切换animating属性进行显示隐藏切换*/}
                <ActivityIndicator
                    animating = {animating}
                    color = "#bc2b78"
                    size = 'large'
                    style = {styles.activityIndicator}
                    />
                <Button onPress={this.closeActivityIndicator} title="切换显示loading"></Button>
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70
    },
    activityIndicator: {
        height:80
    }
})