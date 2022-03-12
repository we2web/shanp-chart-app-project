
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import fontFamily from '../Screens/Styles/fontFamily';
import colors from '../Screens/Styles/colors'

import commonStyles from '../Screens/Styles/commonStyles';
 import { moderateScale } from '../Screens/Styles/responsiveSize';

const BtnComp = ({
    btnText,
    onPress,
    btnStyle,
    textStyle,
    isDisable = false
}) => {
    return (
        <TouchableOpacity
            style={{ ...styles.btnStyle, ...btnStyle }}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={isDisable}
        >
            <Text style={{ ...styles.textStyle, ...textStyle}}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: colors.red,
        height: moderateScale(62),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
    ...commonStyles.fontSize24,      
    }
});

export default BtnComp;
