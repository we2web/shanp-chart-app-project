import React from 'react';
import NavigationStrings from '../Constants/NavigationStrings';
import TabRoutes from './TabRoutes';




export default function (Stack) {
   console.log('this is my stack file')
    return (
        <>
            <Stack.Screen
                name={NavigationStrings.CHAT}
                component={TabRoutes}
                options={{ headerShown: false }}
            />

            </>
    )
}
