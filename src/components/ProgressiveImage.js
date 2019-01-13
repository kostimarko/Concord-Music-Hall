import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated
} from 'react-native';

class ProgressiveImage extends Component {
      onImageLoad = () => {
        Animated.timing(this.imageAnimated, {
          toValue: 1,
        }).start();
      }
      handleThumbnailLoad = () => {
        Animated.timing(this.thumbnailAnimated, {
          toValue: 1,
        }).start();
      }
      thumbnailAnimated = new Animated.Value(0);
      imageAnimated = new Animated.Value(0);
      render() {
        const { Thumbnail,JumboImage,style } = this.props;
        return (
          <View style={styles.container}>
            <Animated.Image
              {...this.props}
              source={{ uri:Thumbnail }}
              style={style}
              blurRadius={2}
              onLoad={this.handleThumbnailLoad}
            />
            <Animated.Image
              {...this.props}
              source={{ uri:JumboImage }}
              style={[styles.imageOverlay,style]}
              onLoad={this.onImageLoad}
            />
          </View>
        );
      }
}

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});

export default ProgressiveImage;
