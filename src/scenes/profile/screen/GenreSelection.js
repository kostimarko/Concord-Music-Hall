import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import AnimatedCheckbox from '../../../components/AnimatedCheckbox';
import { actions as Network } from '../../../network';
import { styles } from './styles';
import Select from '../../../assets/lottie/Genre.json';

const { GenreToggleCheckbox, SelectedGenres } = Network;
const navigationAction = NavigationActions.navigate({
  routeName: 'Profile'

});
class GenreSelection extends Component {
  static navigationOptions = {
    headerTitle: 'Select Genres You Like',
    headerTitleStyle: {
      color: '#191919',
      fontSize: 24,
      fontWeight: '300',
      marginLeft: 10
    },
    headerStyle: {
      elevation: 0
    },

    headerRight: null
  };
  _sendData = () => {
    const { Genres } = this.props;
    Object.keys(Genres).map((g) => {
      const checked = Genres[g];
      this.props.SelectedGenres(g, checked);
    });
    this.props.navigation.dispatch(navigationAction);
  };
  _toggleCheckBox = (name, checked) => {
    this.props.GenreToggleCheckbox(name, checked);
  };
  _genreList = () => {
    const { Genres } = this.props;
    return Object.keys(Genres).map((g) => {
      const checked = Genres[g];
      return (
        <View key={g} style={styles.CardContainer}>
          <AnimatedCheckbox
            Anim={Select}
            width={40}
            height={40}
            checked={checked}
            onPress={() => this._toggleCheckBox(g, checked)}
          />
          <Text style={styles.TextStyle}>{g}</Text>
        </View>
      );
    });
  };
  render() {
    const {
      ButtonText, Button, ButtonContainer, SelectorContainer
    } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <ScrollView
          contentContainerStyle={SelectorContainer}
          showsVerticalScrollIndicator={false}
        >
          {this._genreList()}
        </ScrollView>
        <TouchableOpacity
          style={ButtonContainer}
          onPress={this._sendData}
        >
          <View style={Button}>
            <Text style={ButtonText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { Genres } = state.userReducer;
  return {
    Genres
  };
};

export default connect(mapStateToProps, { GenreToggleCheckbox, SelectedGenres })(GenreSelection);
