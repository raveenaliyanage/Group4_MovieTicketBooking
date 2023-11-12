import React,{useEffect,useState} from 'react';
import{
    Text, 
    View, 
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    StatusBar,
} from 'react-native';
import { COLORS,SPACING } from '../theme/theme';
import { upcomingMovies,nowPlayingMovies,popularMovies } from '../api/apicalls';
import InputHeader from '../components/InputHeader';

const {width,height}=Dimensions.get('window');

const getNowPlayingMoviesList = async () => {
    try {
        let response = await fetch(nowPlayingMovies);
        let json = await response.json();
        return json;
      } catch (error) {
        console.error(
          ' Something went wrong in getNowPlayingMoviesList Function',
          error,
        );
      }
    };

    const getUpcomingMoviesList = async () => {
        try {
          let response = await fetch(upcomingMovies);
          let json = await response.json();
          return json;
        } catch (error) {
          console.error(
            ' Something went wrong in getUpcomingMoviesList Function',
            error,
          );
        }
      };
      
      const getPopularMoviesList = async () => {
        try {
          let response = await fetch(popularMovies);
          let json = await response.json();
          return json;
        } catch (error) {
          console.error(
            ' Something went wrong in getPopularMoviesList Function',
            error,
          );
        }
      };

      



const HomeScreen =({navigation}:any)=>{
const [nowPlayingMoviesList, setNowPlayingMoviesList]=useState<any>(undefined);
const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>(undefined);

useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMoviesList();
      setNowPlayingMoviesList({...tempNowPlaying});

      let tempPopular = await getPopularMoviesList();
      setPopularMoviesList({...tempPopular});


      let tempUpcoming = await getUpcomingMoviesList();
      setUpcomingMoviesList({...tempUpcoming});
    })();
},[]);




const searchMoviesFunction=()=>{
    navigation.navigate('Search');
}
if (
    nowPlayingMoviesList == undefined &&
    nowPlayingMoviesList == null &&
    popularMoviesList == undefined &&
    popularMoviesList == null &&
    upcomingMoviesList == undefined &&
    upcomingMoviesList == null
  ) {
    return  (
    <ScrollView 
    style={styles.container}
    bounces={false}
    contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden/>
        <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.Orange} />
        </View>
    </ScrollView>
    );
    
  }




    return(
        <ScrollView 
    style={styles.container}
    bounces={false}
    contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden/>
        <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} />
        </View>

        
    </ScrollView>
    );
};

const styles=StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:COLORS.Black,
    },
    scrollViewContainer: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    InputHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_28,
      },

});

export default HomeScreen;