import { createStore, combineReducers, Store } from 'redux';
import { Provider } from 'react-redux';
import React, { ReactNode } from 'react';
import savedPropertiesReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    savedProperties: savedPropertiesReducer,
});

const store: Store<RootState> = createStore(rootReducer);

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default StoreProvider;
