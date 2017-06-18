/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ReateNativeDemo extends Component {
    render() {
        return ( 
            <View style = { styles.container } >
            <Text style = { styles.welcome } >
            Welcome to React Native!
            </Text> 
            <Text style = { styles.instructions } >
            To get started, edit index.ios.js
            </Text>
            <Text style = { styles.instructions } >
            Press Cmd + R to reload, { '\n' }
            Cmd + D or shake
            for dev menu
            </Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

/**
 * 注册顶层组件
 * 为了使用ReateNativeDemo组件，你需要在React中注册一个相同名字的组件，
 * 这样才能在AppDelegate.m文件中使用。一般不需要修改。
 */

AppRegistry.registerComponent('ReateNativeDemo', () => ReateNativeDemo);