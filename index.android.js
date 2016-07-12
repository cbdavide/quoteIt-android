import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Image} from 'react-native';
import Quote from './js/Quote';
import data from './js/data';
import style from './js/styles.js';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let quotes = data.map((data) => {
      return (
        <Quote quote={data.quote} author={data.author} key={data.id}>
        </Quote>
      );
    })

    return (
      <Image source={require('./img/background.jpg')} style={style.container}>
        <View style={style.header}>
          <View style={style.header_content}>
            <Text style={[style.text, style.header_content_text]}>
              Quote It
            </Text>
          </View>
          <View style={style.header_control}>
            <Text style={[style.text, style.header_control_text]}>
              +
            </Text>
          </View>
        </View>
        <ScrollView>
          {quotes}
        </ScrollView>
      </Image>
    );
  }
}

AppRegistry.registerComponent('quotesAndroid', () => MyComponent);
