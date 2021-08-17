/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {AlbumsProvider} from './src/contexts/albums-context';
import Routes from './src/routes/Routes';

const App = () => {
  return (
    <AlbumsProvider>
      <SafeAreaView>
        <Routes />
      </SafeAreaView>
    </AlbumsProvider>
  );
};

export default App;
