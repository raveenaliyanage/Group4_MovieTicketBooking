import React,{useState} from 'react';
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

const {width,height}=Dimensions.get('window');

const HomeScreen =({navigation}:any)=>{
const [nowPlayingMoviesList, setNowPlayingMoviesList]=useState<any>(undefined);
const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>(undefined);

if (
    nowPlayingMoviesList == undefined &&
    nowPlayingMoviesList == null &&
    popularMoviesList == undefined &&
    popularMoviesList == null &&
    upcomingMoviesList == undefined &&
    upcomingMoviesList == null
  ) {
    return  <ScrollView style={styles.container}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden/>
        <View style={styles.InputHeaderContainer}>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.Orange} />
        </View>
    </ScrollView>;
  }




    return(
        <View style={styles.container}></View>
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