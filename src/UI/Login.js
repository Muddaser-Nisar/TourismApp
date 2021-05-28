//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import Header from '../components/Header';
import UserTextInput from '../components/UserTextInput';
import SubmitButton from '../components/SubmitButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Login = props => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title="Login" />
      <View style={{marginTop: 40}}>
        <UserTextInput title="Enter User Name" />
        <UserTextInput title="Enter Password" />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Pressable
          style={{
            paddingVertical: 15,
            //paddingHorizontal: 20,
            marginLeft: 45,
            justifyContent: 'center',
          }}>
          <Text>Forget Your Password?</Text>
        </Pressable>
        <SubmitButton title="Login" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Pressable
          style={{
            paddingVertical: 15,
            //paddingHorizontal: 20,
            marginLeft: 45,
            justifyContent: 'center',
          }}>
          <Text>Don't Have Account?</Text>
        </Pressable>
        <View style={{marginLeft: 15}}>
          <SubmitButton title="SignUp" PressEvent={props.navigation} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="facebook" size={60} />
        <Icon name="google" size={60} />
        <Icon name="twitter" size={60} />
      </View>
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Login;
