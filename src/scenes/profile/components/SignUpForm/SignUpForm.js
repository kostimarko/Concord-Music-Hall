import React from 'react';
import { Dimensions, StyleSheet, View,Text} from 'react-native';




const SignUpForm = ()=>{
    return(
        <View style={styles.Container}>
            <Text>Sign up form</Text>
        </View>
    )
}
const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
        Container:{
            flex:1            
        }

})
export default SignUpForm