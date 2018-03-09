import React, { Component } from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { WebBrowser } from 'expo';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { MonoText } from '../components/StyledText';

export default class LoginScreen extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                //alignItems: 'center',
                //width : 250,
            }}>
                <FormLabel color='steelblue' style={{ width: 250, }}>PSU Passport</FormLabel>
                <FormInput style={{ width: 250, height: 50, }} placeholder=' PSU passport' onChangeText={email => this.setState({ email })} />
                <FormLabel color='steelblue' style={{ width: 250, }}>Password</FormLabel>
                <FormInput style={{ width: 250, height: 50, }} secureTextEntry={true} placeholder=' Password' onChangeText={password => this.setState({ password })} />
                <FormLabel></FormLabel>
                <Button title='Login' backgroundColor='skyblue' onPress={() => this.props.handleLogin()} />

            </KeyboardAvoidingView>
        );
    }
}