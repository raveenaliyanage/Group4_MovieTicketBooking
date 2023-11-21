import React, {useState} from 'react';
import { Text, View,StyleSheet, Dimensions, StatusBar,ScrollView,TouchableOpacity } from 'react-native';
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
  } from '../theme/theme';
  import AppHeader from '../components/AppHeader';
import PaymentMethod from '../components/PaymentMethod';



//const {width, height} = Dimensions.get('window');

const PaymentList = [
    {
      name: 'Credit Card',
      icon: require('../assets/image/Card.png'),
      isIcon: false,
    },
    {
        name:'Wallet',
        icon: require('../assets/image/wallet.png'),
        isIcon:false,
    },
    {
        name: 'Google Pay', 
        icon: require('../assets/image/gpay.png'),
        isIcon: false,
      },
      {
        name: 'Apple Pay',
        icon: require('../assets/image/applepay.png'),
        isIcon: false,
      },
      {
        name: 'Amazon Pay',
        icon: require('../assets/image/amazonpay.png'),
        isIcon: false,
      },
    ];
    
const PaymentScreen=({navigation}: any) => {
    const [paymentMode, setPaymentMode] = useState('Credit Card');

    //const buttonPressHandler = () => {
        //navigation.navigate('GateWay');
    //};

    return(
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.Black} />
            <ScrollView 
            showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
            <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header={'Payment'}
          action={() => navigation.goBack()}
        />
      </View>

      <View style={styles.PaymentOptionsContainer}>

        {PaymentList.map((data:any) => (
          <TouchableOpacity key={data.name}>
          <PaymentMethod 
          paymentMode={paymentMode}
          name={data.name}
          icon={data.icon}
          isIcon={data.isIcon}
        />
            
            </TouchableOpacity>
            
        ))}
        </View>
        </ScrollView>
        </View>
  );
};
    


const styles=StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.Black,
      },
      ScrollViewFlex: {
        flexGrow: 1,
      },
      appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_20 * 2,
        marginBottom: SPACING.space_20 * 4,
      },
      PaymentOptionsContainer: {
        padding: SPACING.space_15,
        gap: SPACING.space_15,
        
      },
});

export default PaymentScreen;