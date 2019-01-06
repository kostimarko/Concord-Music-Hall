import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const{width,height} = Dimensions.get('window');

class SignUpModal extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection: 'column', justifyContent: 'flex-end'}}>
                <View style={styles.ModalContainer}>
                    <Text onPress={() => this.props.navigation.goBack()}>THIS IS MY MODAL, Click me to close</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ModalContainer:{
        height:height-150, 
        backgroundColor:'blue', 
    }
})

export default SignUpModal;