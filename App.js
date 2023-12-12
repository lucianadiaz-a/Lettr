import React from 'react';

import MainNavigator from './src/navigations/MainNavigator';
import {ListingProvider} from './src/components/ListingContext'

const App = () => {
  return (
    <ListingProvider>
      <MainNavigator />
    </ListingProvider>
  )
};

export default App;