import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,153,255,0.7)',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10
  },
  text: {
    color: 'white'
  },
  quote: {
    textAlign: 'center',
  },
  author: {
    textAlign: 'right',
    marginTop: 10
  }
});

class Quote extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={[styles.text, styles.quote]}>{this.props.quote}</Text>
        <Text style={[styles.text, styles.author]}>{'— ' + this.props.author}</Text>
      </View>
    );
  }
}

export default Quote;
