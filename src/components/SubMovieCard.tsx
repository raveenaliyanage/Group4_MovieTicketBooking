import * as React from 'react';
import{Text, View, StyleSheet} from 'react-native';
import { COLORS } from '../theme/theme';

const SubMovieCard  =(props:any)=>{
    return(
        <View style={styles.container}>
            <Text style={{color:COLORS.White}}>{props.title}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{},
});

export default SubMovieCard;