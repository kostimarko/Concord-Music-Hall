import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import LottieView from 'lottie-react-native';
import Button from './Button';
import NotFound from '../assets/lottie/not_found.json';

const { width } = Dimensions.get('window');

class AnonUser extends Component {
  componentDidMount() {
    this._sub = this.props.navigation.addListener(
      'didFocus',
      this._animation
    );
  }

  _animation =() => {
    if (this.animation) {
      this.animation.play();
    }
  }

  componentWillUnmount() {
    this._sub.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex:1, padding:15 }}>
          <LottieView
            ref={(animation) => {
              this.animation = animation;
              }}
            source={NotFound}
            loop={true}
            style={{ width:width / 2, height:width / 2, }}
          />
        </View>
        <View style={{
flex:1, padding:15, alignItems:'flex-start', justifyContent:'center'
}}
        >
          <Text style={{ fontSize:21, fontWeight:'700', marginBottom:10 }}>What are you even looking for?</Text>
          <Text style={{ fontSize:14, fontWeight:'300' }}>Sign up to get get contest info, be first on the list to get tickets, maybe you'll get into your show before everyone else. All we can tell you is not signing doesn't really do anything for you. </Text>
        </View>

        <View style={{
flex:1, padding:15, alignItems:'flex-start', justifyContent:'center'
 }}
        >
          <Button
            style={styles.ButtonStyle}
            ButtonText="Sign Up"
            OnPress={() => {
                    this.props.navigation.navigate('SignUp');
                }}
            textStyle={{ color:'white',fontSize:16,fontWeight:'700' }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'column'
  },
  ButtonStyle:{
    height:50,
    borderRadius:25,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  }
});

const mapStateToProps = (state) => {
  const {  User } = state.userReducer;
  return {  User };
};

export default connect(mapStateToProps,null)(AnonUser);
