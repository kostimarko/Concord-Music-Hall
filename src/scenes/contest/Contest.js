import React, { PureComponent } from 'react';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { View, Text, TouchableWithoutFeedback, StatusBar } from 'react-native';
import moment from 'moment';
import ContestAnim from '../../assets/lottie/User_Enters_Contest.json';
import { styles } from './styles';
import { actions as Network } from '../../network';
import AnonUser from '../../components/AnonUser';

const { UserEntersContest } = Network;

class Contest extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Enter Contest',
    headerTitleStyle: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: '300',
      marginLeft: 10
    },
    headerStyle: {
      elevation: 0,
      backgroundColor:'#473BF0'
    },
    headerTintColor: 'white',
    headerRight: null
  });

  componentDidMount() {
    console.log(this.props.User);
  }
  render() {
    const {
      container,
      lottieContainer,
      titleTextContainer,
      titleText,
      boldText,
      ButtonText,
      Button,
      LottieContainer
    } = styles;
    const { Id,HeadlinerName,Time } = this.props.navigation.state.params;
    const { isAnonymous } = this.props.User;
    if (!isAnonymous) {
      return (
        <View style={container}>
          <StatusBar backgroundColor="#473BF0" barStyle="light-content" />
          <View style={titleTextContainer}>
            <Text style={titleText}>
                Just press the button to enter our contest and win free tickets to{' '}
              <Text style={boldText}>{HeadlinerName}</Text> on{' '}
              <Text style={boldText}>{moment(Time).format('MMM Do YYYY')}</Text>{' '}
                at{' '}
              <Text style={boldText}>{moment(Time).format('hA')}</Text>
            </Text>
          </View>
          <View style={lottieContainer}>
            <LottieView
              ref={(animation) => {
                  if (animation) {
                    animation.play();
                  }
                }}
              source={ContestAnim}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableWithoutFeedback
              style={{ alignItems: 'center' }}
              onPress={() => {
                console.log('entering');
                this.props.UserEntersContest(Id,() => {
                  this.props.navigation.goBack();
                });
              }}
            >
              <View style={Button}>
                <Text style={ButtonText}>Enter Contest</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={{ flex:1 }}>
          <StatusBar backgroundColor="#473BF0" barStyle="light-content" />
          <AnonUser navigation={this.props.navigation} containerStyle={{ backgroundColor:'#473BF0' }} textColor={{ color:'#ffffff' }} />
        </View>
      );
    }
  }
}
const mapStateToProps = (state) => {
  const { User } = state.userReducer;
  return {  User };
};

export default connect(mapStateToProps,{ UserEntersContest })(Contest);
