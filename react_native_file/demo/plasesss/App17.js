import React , { Component } from 'react';
import { StyleSheet , Text , View , Image } from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies
                });
            });
    }
    
    render() {
        if(!this.state.movies) {
            return this.renderLoadingView();
        }
        var movie = this.state.movies[0];
        return this.renderMovie(movie);
    }

    renderLoadingView() {
        return (
            <View style = {styles.container}>
                <Text>loading...</Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style = {styles.container}>
                <Image 
                    style = {styles.thumbnail}
                    source = {{uri: movie.posters.thumbnail}}
                />
                <View style = {styles.rightContainer}>
                    <Text style = {styles.title}>{movie.title}</Text>
                    <Text style = {styles.year}>{movie.year}</Text>
                </View>

            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    thumbnail: {
        width: 100,
        height: 80
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    }
});