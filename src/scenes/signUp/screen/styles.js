import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
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
