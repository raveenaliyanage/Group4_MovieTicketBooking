import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface PaymentMethodProps {
    paymentMode: string;
    name: string;
    icon: any;
    isIcon: boolean;
  }

  const PaymentMethod: React.FC<PaymentMethodProps> = ({
    paymentMode,
    name,
    icon,
    isIcon,
  }) => {

  return (
    <View style={styles.PaymentCardContainer}>
            <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientRegular}>
          <Image source={icon} style={styles.PaymentImage} />
          <Text style={styles.PaymentTitle}>{name}</Text>
        </LinearGradient>
    </View>
  );
  };

  const styles = StyleSheet.create({
    PaymentCardContainer: {
      borderRadius: BORDERRADIUS.radius_15 * 2,
      backgroundColor: COLORS.primaryGreyHex,
      borderWidth: 3,
    },
    LinearGradientRegular: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.space_12,
        paddingHorizontal: SPACING.space_24,
        gap: SPACING.space_24,
        borderRadius: BORDERRADIUS.radius_15 * 2,
      },
      PaymentTitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.White,
      },
      PaymentImage: {
        height: SPACING.space_36,
        width: SPACING.space_36,
      },
    });
    
    export default PaymentMethod;
