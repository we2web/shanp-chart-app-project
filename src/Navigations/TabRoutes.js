import * as React from 'react';
import { Map,Chat,Camera,Stories } from '../Screens/Index'
import NavigationStrings from '../Constants/NavigationStrings';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { Image } from 'react-native';
import imagePath from '../Constants/imagePath';
import colors from '../Screens/Styles/colors';


const BottomTab = createBottomTabNavigator(); 

const TabRoutes = () => {
    return (
        <BottomTab.Navigator
        tabBar={(tabsProps)=>(
        <>
        <BottomTabBar {...tabsProps} />
        </>
        )}
        initialRouteName={NavigationStrings.CHAT}
        tabBarOptions={{
        style: { backgroundColor:colors.black },
        showLabel: false
        }}
        >
        <BottomTab.Screen
        name={NavigationStrings.MAP}
        component={Map}
        options={{
        tabBarIcon: ({focused})=>{
        return <Image style={{tintColor : focused? colors.green: colors.white, width:40, height:40 }} source={imagePath.icLoc} />
        }
        }}
        />
        <BottomTab.Screen
        name={NavigationStrings.CHAT}
        component={Chat}
        options={{
            tabBarIcon: ({focused})=>{
            return <Image style={{tintColor : focused? colors.green: colors.white, width:40, height:40 }} source={imagePath.icChat} />
            }
            }}
        />
        <BottomTab.Screen
        name={NavigationStrings.CAMERA}
        component={Camera}
        options={{
            tabBarIcon: ({focused})=>{
            return <Image style={{tintColor : focused? colors.green: colors.white, width:40, height:40}} source={imagePath.icCamera} />
            }
            }}
        />
        <BottomTab.Screen
        name={NavigationStrings.STORIES}
        component={Stories}
        options={{
            tabBarIcon: ({focused})=>{
            return <Image style={{tintColor : focused? colors.green: colors.white, width:40, height:40}} source={imagePath.icPeople} />
            }
            }}
        />
        </BottomTab.Navigator>
    )
}

export default TabRoutes;