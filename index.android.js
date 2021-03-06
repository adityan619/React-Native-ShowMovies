/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  ListView,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MOCK_MOVIES_DATA = [
  {
    'title':"MOCKING_JAY",
    'year':2013,
    'posters':{thumbnail: 'http://i.imgur.com/UePbdph.jpg'}
  }
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class AwesomeProject extends Component {
  constructor(props){
    super(props);
    this.state = {movies:null};
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_URL)
      .then((response)=>response.json())
      .then((responseData)=>{
        this.setState({movies:responseData.movies,})
      })
      .done();
  }

  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }
    var movie = this.state.movies[0];
    return this.renderMovie(movie);
  }
  renderLoadingView(){
    return(
      <View style = {styles.container}>
        <Text>Loading Movies..</Text>
      </View>
      );
  }
  renderMovie(movie){
    return(
      <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width:53,
    height:81
  },  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rightContainer:{
    flex:1,
    // backgroundColor:'#FF00FF',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
