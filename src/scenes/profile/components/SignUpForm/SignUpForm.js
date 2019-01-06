import React from 'react';
import { Dimensions, StyleSheet} from 'react-native';
import {Text,View} from 'react-native-animatable';



const SignUpForm = ()=>{
    return(
        <View 
        animation={'fadeInUp'} 
        duration={300}
        style={styles.Container}
        easing={'ease-in-out-cubic'}>
            <Text>Sign up form</Text>
        </View>
    )
}
const {width,height} = Dimensions.get('window');
const styles= StyleSheet.create({
        Container:{
            width:width,
            height: height/2,
            backgroundColor:'blue'
        }

})
export default SignUpForm