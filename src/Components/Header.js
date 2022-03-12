import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import imagePath from '../Constants/imagePath'

import { useNavigation } from '@react-navigation/native';
import {moderateScale} from '../Screens/Styles/responsiveSize'
import colors from '../Screens/Styles/colors';

const Header = ({
    leftImg = imagePath.icBack,
    onPress,
    headerStyle
}) => {
    const navigation = useNavigation()
    return (
        <View style={{...styles.headerStyle, ...headerStyle}}>
            <TouchableOpacity
                onPress={!!onPress ? onPress : () => navigation.goBack()}
            >
                <Image style={{tintColor: colors.blue}} source={leftImg} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
       headerStyle: {
           minHeight: moderateScale(48)
       }
    
});

export default Header;
