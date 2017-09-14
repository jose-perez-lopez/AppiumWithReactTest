import React,{Component} from 'react';
import { AppRegistry} from 'react-native';
import {Main} from './src/components/index'

class AppiumTest extends Component {
    render() {
        return (<Main />);
    }
}

export default  AppiumTest;
AppRegistry.registerComponent('AppiumTest', () => AppiumTest);

