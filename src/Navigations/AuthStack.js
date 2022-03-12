import React from 'react';
import { InitialScreen, Login, Signup } from '../Screens/Index'
import NavigationStrings from '../Constants/NavigationStrings';



export default function (Stack) {
   
    return (
        <>
            <Stack.Screen
                name={NavigationStrings.INITIAL_SCREEN}
                component={InitialScreen}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name={NavigationStrings.LOGIN}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NavigationStrings.SIGNUP}
                component={Signup}
                options={{ headerShown: false }}
            />
        </>
    )
}
