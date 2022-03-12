import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import imagePath from '../Constants/imagePath'

import { useNavigation } from '@react-navigation/native';
import {moderateScale} from '../Screens/Styles/responsiveSize'
import commonStyles from '../Screens/Styles/commonStyles'
import fontFamily from '../Screens/Styles/fontFamily';
import RoundImg from './Roundimg';

const HomeHeader = ({
    leftImg = imagePath.icBack,
    onPress,
    headerStyle,
    centerText,
    lastImg = imagePath.icMore,
    setting
}) => {
    const navigation = useNavigation()
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <RoundImg
                    image='https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'
                />

                <Image style={{ marginLeft: moderateScale(16) }} source={imagePath.icSearch} />
            </View>
            <Text style={styles.textStyle}>{centerText}</Text>

            {!!setting ?
                <TouchableOpacity>
                    <Image source={setting} />
                </TouchableOpacity>
            : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ marginRight: moderateScale(16) }} source={imagePath.icAdd} />
                    <Image source={lastImg} />
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textStyle: {
        ...commonStyles.fontSize20,
        fontFamily: fontFamily.bold,
        flex:1,
    }
});

export default HomeHeader;
