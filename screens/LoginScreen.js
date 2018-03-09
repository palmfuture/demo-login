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

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isFailure: false
        }
    }

    handleUsername = (event) => {
        this.setState({username: event});
    }

    handlePassword = (event) => {
        this.setState({password: event});
    }

    handleLogin = () => {
        // check username length >= 10 charecters and password not null
        if(this.state.username.length != 10 || !this.state.password.length) {
            this.setState({isFailure: true});
            return false;
        }
        this.props.handleLogin();
    }
 
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
                <FormInput style={{ width: 250, height: 50, }} placeholder=' PSU passport' keyboardType='numeric' onChangeText={this.handleUsername} />
                <FormLabel color='steelblue' style={{ width: 250, }}>Password</FormLabel>
                <FormInput style={{ width: 250, height: 50, }} secureTextEntry={true} placeholder=' Password' onChangeText={this.handlePassword} />
                <FormLabel></FormLabel>
                <Button title='Login' backgroundColor={this.state.isFailure ? 'pink' : 'skyblue'} onPress={this.handleLogin} />

            </KeyboardAvoidingView>
        );
    }
}