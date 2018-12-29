import React, { PureComponent } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  Text,
  View,
  ActivityIndicator,
  StatusBar
} from "react-native";
import { NavigationActions } from "react-navigation";
import { actions as Network } from "../../network";
const {bootApp} = Network;
const LoadedAction = NavigationActions.navigate({
    routeName: 'Home'
  });

class Loading extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
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


  render() {
      console.log(this.props)
  return(
      <View>
          <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
  )

  }
}

const mapStateToProps = state => {
    const { Loaded, Events } = state.eventsReducer;
    return { Loaded, Events };
  };

export default connect(
    mapStateToProps,
    {bootApp}
  ) (Loading);
