import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routes from './src/Navigations/Routes';
import store from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}> 
    <SafeAreaProvider>
    <Routes/>
    </SafeAreaProvider>
    </Provider>
  );
};

export default App;