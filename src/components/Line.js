import React, {Component} from 'react';
import {View} from 'react-native';

class Line extends Component {
  render() {
    return <View style={style.lineStyle} />;
  }
}

const style = {
  lineStyle: {
    width: 150,
    height: 1,
    backgroundColor: '#FFF',
  },
};
