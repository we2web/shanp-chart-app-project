//import liraries
import React from 'react';
import { Image } from 'react-native';
import { moderateScale } from '../Screens/Styles/responsiveSize';

const RoundImg = ({
    size = 40,
    image,
    style = {}
}) => {
    return (
        <Image
            source={{uri: image}}
            style={{
                ...style,
                height: moderateScale(size),
                width: moderateScale(size),
                borderRadius: moderateScale(size / 2)
            }}
        />
    );
};

export default RoundImg;
