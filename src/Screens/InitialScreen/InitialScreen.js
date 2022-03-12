import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
// 3rd party 

import { SafeAreaView } from 'react-native-safe-area-context';
import BtnComp from '../../Components/BtnComp';
import imagePath from '../../Constants/imagePath';
import colors from '../Styles/colors'
import NavigationStrings  from '../../Constants/NavigationStrings'
import strings from '../../Constants/lang';


const InitialScreen = ({ navigation }) => {

    const moveToScreen = (screen)=>() => {
        navigation.navigate(screen)
    }
    return (
        <ImageBackground
            style={{ flex: 1, justifyContent: 'flex-end' }}
            source={imagePath.bgImage}
        >
            <SafeAreaView>
             <BtnComp
             btnText={strings.LOGIN}
             onPress={moveToScreen(NavigationStrings.LOGIN)}
             />
            <BtnComp
             btnText={strings.SIGNUP}
             btnStyle={{backgroundColor:colors.blue}}
             onPress={moveToScreen(NavigationStrings.SIGNUP)}
            />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default InitialScreen

const styles = StyleSheet.create({
})
