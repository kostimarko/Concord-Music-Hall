import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput,StatusBar, KeyboardAvoidingView,Image, StyleSheet,Dimensions, Keyboard,Platform } from 'react-native';
import Button from '../../../components/Button';
import logo from '../../signUp/screen/logo.png';
import { actions as Network } from '../../../network';

const { width,height } = Dimensions.get('window');

const {
  onEmailChange,onNameChange,onPasswordChange,UpdateUser
} = Network;

class EditProfile extends Component {
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
    const { Email,Password, FullName } = this.props;
    return (

      <KeyboardAvoidingView style={styles.container} contentContainerStyle={styles.container} behavior="position" enabled>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="Full name"
          value={FullName}
          style={styles.input}
          onChangeText={text => this.onNameChange(text)}
        />
        <TextInput
          placeholder="Email"
          value={Email}
          style={styles.input}
          onChangeText={text => this.onEmailChange(text)}
        />

        <Button
          style={styles.ButtonStyle}
          ButtonText="Save"
          OnPress={() => {
            console.log('Saved');
            console.log('props');
          }}
          textStyle={{ color:'black',fontSize:16,fontWeight:'700' }}
        />
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: width - 30
  },
  logo: {
    width: width - 50,
    resizeMode: 'contain',
  },
  ButtonStyle:{
    height:50,
    borderRadius:25,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:15
  },
  register:{
    marginBottom:20,
    width:window.width - 100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor: '#ffae',
  }
});

const mapStateToProps = (state) => {
  const {
    User, FullName, Email,Password
  } = state.userReducer;
  return {
    User, FullName, Email, Password
  };
};

export default connect(mapStateToProps,{
  onNameChange,onEmailChange,onPasswordChange, UpdateUser
})(EditProfile);
