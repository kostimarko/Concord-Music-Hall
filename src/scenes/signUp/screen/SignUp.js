import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Animated, Keyboard } from 'react-native';
import { Sae } from 'react-native-textinput-effects';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { actions as Network } from '../../../network';
import AnonUser from '../../../assets/lottie/anon_user.json';
import Button from '../../../components/Button';

const {
  onEmailChange,onNameChange,onPasswordChange,CreateUserFromAnon
} = Network;

const LargeAnimation = 200;
const SmallAnimation = 75;
class SignUp extends Component {
    static navigationOptions = ({ navigation }) => ({
      headerTitle: 'Sign Up',
      headerTitleStyle: {
        color: '#191919',
        fontSize: 24,
        fontWeight: '300',
        marginLeft: 10
      },
      headerStyle: {
        elevation: 0
      },

      headerRight: null
    });
    constructor(props) {
      super(props);

      this.keyboardHeight = new Animated.Value(0);
      this.imageHeight = new Animated.Value(LargeAnimation);
    }

    componentDidMount() {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
      this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }
    componentWillUnmount() {
      this.keyboardWillShowSub.remove();
      this.keyboardWillHideSub.remove();
    }

      keyboardWillShowSub = (event) => {
        Animated.parallel([
          Animated.timing(this.keyboardHeight, {
            duration: event.duration,
            toValue:event.endCoordinates.height
          }),
          Animated.timing(this.imageHeight,{
            duration:event.duration,
            toValue:SmallAnimation
          })
        ]).start();
      }
      keyboardWillHide = (event) => {
        Animated.parallel([
          Animated.timing(this.keyboardHeight,{
            duration:event.duration,
            toValue:0
          }),
          Animated.timing(this.imageHeight,{
            duration:event.duration,
            toValue:LargeAnimation
          })
        ]).start();
      }
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
          <Animated.View style={{ flex:1, backgroundColor:'#ffffff', padding:15 }}>
            <Sae
              label="Full Name"
              iconClass={MaterialCommunityIcons}
              iconName="account-circle"
              iconColor="rgb(224, 89, 89)"
              labelStyle={{ color:'rgb(224, 89, 89)' }}
              inputStyle={{ color:'rgb(224, 89, 89)' }}
                // TextInput props
              autoCapitalize="none"
              autoCorrect={false}
              style={{ marginBottom:25 }}
              onChangeText={text => this.onNameChange(text)}
            />
            <Sae
              label="Email"
              iconClass={MaterialCommunityIcons}
              iconName="at"
              iconColor="rgb(224, 89, 89)"
              labelStyle={{ color:'rgb(224, 89, 89)' }}
              inputStyle={{ color:'rgb(224, 89, 89)' }}
                // TextInput props
              autoCapitalize="none"
              autoCorrect={false}
              style={{ marginBottom:25 }}
              keyboardType="email-address"
              onChangeText={text => this.onEmailChange(text)}
            />
            <Sae
              label="Password"
              iconClass={MaterialCommunityIcons}
              iconName="lock"
              iconColor="rgb(224, 89, 89)"
              labelStyle={{ color:'rgb(224, 89, 89)' }}
              inputStyle={{ color:'rgb(224, 89, 89)' }}
                // TextInput props
              autoCapitalize="none"
              autoCorrect={false}
              style={{ marginBottom:25 }}
              secureTextEntry
              onChangeText={text => this.onPasswordChange(text)}
            />


            <Button
              style={styles.ButtonStyle}
              ButtonText="Create Account"
              OnPress={() => {
                  this.props.CreateUserFromAnon(Email,Password);
                }}
            />

          </Animated.View>


        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  ButtonStyle:{
    height:50,
    borderRadius:25,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop: 50
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
  onNameChange,onEmailChange,onPasswordChange, CreateUserFromAnon
})(SignUp);
