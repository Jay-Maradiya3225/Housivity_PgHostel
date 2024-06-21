import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import StoreProvider from './src/redux/store';

const App: React.FC = () => {
    return (
        <StoreProvider>
            <AppNavigator />
        </StoreProvider>
    );
};

export default App;