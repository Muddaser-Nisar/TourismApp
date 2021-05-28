//import liraries
import React from 'react';
import {Text, StyleSheet, Pressable, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
// create a component
const SubmitButton = ({title, PressEvent}) => {
  return (
    <Pressable
      style={styles.AddUserButtonStyle}
      onPress={title === 'SignUp' ? () => PressEvent.navigate('SignUp') : null}>
      <Text style={{fontSize: 16, color: '#fff'}}>{title}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  AddUserButtonStyle: {
    width: width * 0.33,
    paddingVertical: 15,
    alignItems: 'center',
    //  width: width * 0.5,
    //height: height * 0.08,
    alignSelf: 'center',
    margin: '5%',
    borderRadius: 10,
    backgroundColor: '#ee6e73',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    justifyContent: 'center',
  },
});

//make this component available to the app
export default SubmitButton;
