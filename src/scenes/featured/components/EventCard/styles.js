import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  Container:{
    marginBottom:15,
    height: height / 2,
  },
  ImageStyle: {
    resizeMode: 'cover',
    flex:1,
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'center',
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:15,
  },
  SoldOutImageStyle:{
    resizeMode: 'cover',
    flex:1,
    flexDirection: 'column',
    alignItems:'flex-end',
    justifyContent:'space-between',
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:15,
  },
  CardContainerStyle:{
    backgroundColor:'#ffffff',
    height:150,
    borderRadius:5,
    flex:1,
    paddingLeft:15,
    paddingTop:15,
    paddingBottom:15,
    paddingRight:15,
    flexDirection:'column',
    justifyContent:'space-between'
  },
  SoldOutCardContainer:{
    backgroundColor: '#ffb505',
    height:150,
    flex:1,
    paddingLeft:15,
    paddingTop:15,
    paddingBottom:15,
    paddingRight:15,
    flexDirection:'column',
    justifyContent:'space-between'
  },
  SoldOutImageContainer:{
    width:150,
    height:150,
    backgroundColor: '#ffb505',
  },
  TextContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  DateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a4a4a'
  },
  AgeLimitText:{
    fontSize:15,
    fontWeight:'700'
  },
  ArtistText:{
    fontSize:24,
    fontWeight:'100',
    color:'#4a4a4a'
  },
  PriceText:{
    fontSize:18,
    fontWeight:'300',
    color:'#4a4a4a'
  }
});
