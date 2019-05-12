import React from "react";
import {createAppContainer} from "react-navigation";
import AppNavigator from './navigation/AppNavigator';

import store from './redux/store';
import {persistStoreWithCallback} from './redux/store/configureStore';
import {Provider} from 'react-redux';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

    componentDidMount() {
        if (!store.getState()._persist) {
            persistStoreWithCallback(store);
        }
    }

    render() {
        return <Provider store={store}>
            <AppContainer/>
        </Provider>
    }
}