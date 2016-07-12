import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import style from './styles';

class Quote extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={style.quote_box}>
        <Text style={[style.text, style.quote_text]}>
          {this.props.quote}
        </Text>
        <Text style={[style.text, style.quote_author]}>
          {'— ' + this.props.author}
        </Text>
      </View>
    );
  }
}

export default Quote;
