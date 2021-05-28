//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import Header from '../components/Header';
import UserTextInput from '../components/UserTextInput';
import SubmitButton from '../components/SubmitButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
const SignUp = props => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title="SignUp" navigation={props.navigation} />
      <View style={{marginTop: 40}}>
        <UserTextInput title="Enter Name" />
        <UserTextInput title="Enter Phone Number" />
        <UserTextInput title="Enter E-mail" />
        <UserTextInput title="Enter Password" />
      </View>

      <SubmitButton title="SignUp" />

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SignUp;
