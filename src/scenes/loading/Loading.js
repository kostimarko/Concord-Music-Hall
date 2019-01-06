import React, { PureComponent } from "react";
import { connect } from "react-redux";
import LottieView from 'lottie-react-native';
import moment from "moment";
import {
  View,
  StatusBar,
  Dimensions,
  Animated
} from "react-native";
import { NavigationActions } from "react-navigation";
import { actions as Network } from "../../network";
import ConcordLetters from '../../assets/lottie/ConcordLetters.json';

const {bootApp} = Network;
const LoadedAction = NavigationActions.navigate({
    routeName: 'Home'
  });

  const {width, height} = Dimensions.get('window');

class Loading extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ColorValue: new Animated.Value(0)
    };
  }
  componentDidMount() {
    const start = moment().format("YYYY-MM-DD");
    const end = moment()
      .add(7, "days")
      .format("YYYY-MM-DD");
    this.props.bootApp(start,end,()=>{
        this.props.navigation.dispatch(LoadedAction);
    });
  }

  AnimateBackground = ()=>{
  Animated.loop(
    Animated.sequence([ 
      Animated.timing(this.state.ColorValue,{
        toValue:1,
        duration:500
      }),
      Animated.timing(this.state.ColorValue,{
        toValue:2,
        duration:500,
      }),
      Animated.timing(this.state.ColorValue,{
        toValue:3,
        duration:500
      }),
      Animated.timing(this.state.ColorValue,{
        toValue:4,
        duration:500
      }),
      Animated.timing(this.state.ColorValue,{
        toValue:5,
        duration:500
      })
    ])
  ).start()
  }

  render() {
    let color = this.state.ColorValue.interpolate({
      inputRange:[0,1,2,3,4,5],
      outputRange:["#FFB505","#7ceae6","#e05959","#a43ded","#5ff49b","#FFB505"]
    })
  return(
    <View>
      <StatusBar backgroundColor="black" barStyle="light-content" hidden={false} />
      <Animated.View style={[{width:width, height:height, justifyContent:'center', backgroundColor:'black'}]}>
      <LottieView
              ref={(animation) => {
                if (animation) {
                  animation.play();
                }
              }}
              source={ConcordLetters}
              loop={true}
              style={{width:width/2, height:width/2, alignSelf:'center'}}
            />
      </Animated.View>
      </View>
  )

  }
}

export default connect(
    null,
    {bootApp}
  ) (Loading);
