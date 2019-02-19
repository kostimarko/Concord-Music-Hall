import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput,StatusBar, KeyboardAvoidingView,Image, Animated,TouchableOpacity, Keyboard,Platform } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import Button from '../../../components/Button';
import logo from './logo.png';
import { actions as Network } from '../../../network';

const {
  onEmailChange,onNameChange,onPasswordChange,CreateUserFromAnon
} = Network;

class SignUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Sign Up',
    headerTitleStyle: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: '300',
      marginLeft: 10
    },
    headerStyle: {
      elevation: 0,
      backgroundColor:'#000000'
    },
    headerTintColor:'#ffffff',
    headerRight: null
  });

  onNameChange = (text) => {
    this.props.onNameChange(text);
  }
  onEmailChange = (text) => {
    this.props.onEmailChange(text);
  }
  onPasswordChange = (text) => {
    this.props.onPasswordChange(text);
  }
  render() {
    const { Email,Password } = this.props;
    return (

      <KeyboardAvoidingView style={styles.container} contentContainerStyle={styles.container} behavior="position" enabled>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          onChangeText={text => this.onNameChange(text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={text => this.onEmailChange(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={text => this.onPasswordChange(text)}
          secureTextEntry
        />

        <Button
          style={styles.ButtonStyle}
          ButtonText="Create Account"
          OnPress={() => {
            this.props.CreateUserFromAnon(Email,Password,() => {
              this.props.navigation.navigate('Profile');
            });
          }}
          textStyle={{ color:'black',fontSize:16,fontWeight:'700' }}
        />
      </KeyboardAvoidingView>

    );
  }
}
const mapStateToProps = (state) => {
  const {
    User, FullName, Email,Password
  } = state.userReducer;
  return {
    User, FullName, Email, Password
  };
};

export default connect(mapStateToProps,{
  onNameChange,onEmailChange,onPasswordChange, CreateUserFromAnon
})(SignUp);
