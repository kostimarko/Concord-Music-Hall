import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from '../../../../components/Button';
import {SignUpForm} from '../';

class AnonUser extends Component {
    constructor(props){
        super(props)
        this.state={
            visibleForm:null
        }
    }
    render(){
        console.log(this.props)
        return (
            <View style={styles.container}>
                <View style={{backgroundColor:'red', height:200,width:200, borderRadius:50, alignSelf:'center', marginTop:25}}>
                </View>
                <View>{this.state.visibleForm ? <SignUpForm /> : <Button ButtonText="Sign Up" OnPress={() => console.log('hi')} style={styles.ButtonStyle} />}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent:'space-between'
  },
  ButtonStyle:{
      height:50,
      borderRadius:25,
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center'
  }
});

const mapStateToProps = state => {
  const {  User } = state.userReducer;
  return {  User };
};

export default connect(mapStateToProps,null)(AnonUser);
