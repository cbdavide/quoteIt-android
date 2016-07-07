import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Image} from 'react-native';
import Quote from './js/Quote';
import data from './js/data';

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
      <Image source={require('./img/background.jpg')} style={{
        flex: 1,
        width: null,
        height: null
      }}>
        <ScrollView>
          {quotes}
        </ScrollView>
      </Image>
    );
  }
}

AppRegistry.registerComponent('quotesAndroid', () => MyComponent);
