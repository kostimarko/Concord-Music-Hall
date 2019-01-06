import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import LottieView from 'lottie-react-native';      
import { NavigationActions } from 'react-navigation';
import Button from '../../../../components/Button';
import {SignUpForm} from '../';
import NotFound from '../../../../assets/lottie/not_found.json';
import {actions as Network} from '../../../../network/';

const {CreateUserFromAnon}= Network;

const {width,height}= Dimensions.get('window');

class AnonUser extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:false
        }
    }
    render(){
        return (
            <View style={styles.container}>
             <View style={{width:width, height:width}}>
             <LottieView
              ref={(animation) => {
                if (animation) {
                  animation.play();
                }
              }}
              source={NotFound}
              loop={true}
            />
            </View>
              <View style={{flex:1}}>
                <Text>What are you even looking for?</Text>
                <Text>Sign Up to get get contest info, be first on the list to get tickets, maybe you'll get into your show before everyone else. All we can tell you is not signing doesn't really do anything for you. </Text>
              </View>

            <View style={{flex:1}}>
                <Button style={styles.ButtonStyle} ButtonText={'Sign Up'} OnPress={()=>{
                    console.log('hi')
                    this.setState({visible:true})
                }} />
            </View>
            <SlidingUpPanel
                visible={this.state.visible}
                onRequestClose={() => this.setState({visible: false})}>
                <View style={styles.container}>
                    <Text>Here is the content inside panel</Text>
                    <Button style={styles.ButtonStyle} ButtonText='Hide' OnPress={() => this.setState({visible: false})} />
                </View>
            </SlidingUpPanel>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
