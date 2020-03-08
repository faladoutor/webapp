import {View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import {Input, Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.showImageContainer}>
          <Image
            style={styles.imageStyle}
            source={require('../../../assets/icon.png')}
          />
        </View>
        <View style={styles.formLogin}>
          <Input
            placeholder="Login"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            underlineColorAndroid="transparent"
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Input
            placeholder="Password"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            underlineColorAndroid="transparent"
            inputContainerStyle={styles.inputContainerStyle}
          />
          <View style={{width: '85%'}}>
            <Text style={styles.forgotStyle}> Forgot password?</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => alert('Clickou em sign up')}
            title="SIGN UP"
            buttonStyle={styles.btnStyle}
          />
          <Button
            onPress={() => Actions.main()}
            title="SIGN IN"
            buttonStyle={styles.btnStyle}
          />
        </View>
        <View style={styles.socialMediaContainer}>
          <Text style={styles.labelStyle}> Signin via Social Media</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: 300,
    backgroundColor: '#003929',
  },
  formLogin: {
    height: 200,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerStyle: {
    width: '90%',
    borderBottomWidth: 0,
  },
  inputStyle: {
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
  imgSocialIcon: {
    width: 150,
    height: 150,
  },
  showImageContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    borderRadius: 10,
    width: 150,
    backgroundColor: '#c27e00',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  labelStyle: {
    color: '#FFF',
    marginTop: 50,
    fontSize: 14,
  },
  socialMediaContainer: {
    alignItems: 'center',
  },
  forgotStyle: {
    textAlign: 'right',
    color: '#FFF',
    fontSize: 12,
  },
};

export default LoginPage;
