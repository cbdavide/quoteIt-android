import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Image} from 'react-native';
import Quote from './js/Quote';
import style from './js/styles';
import core from './js/controller';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {quotes: []};
  }

  componentWillMount() {
    core.getQuotes()
      .then(q => {
        this.setState(old => {
          return {quotes: q};
        })
      })
  }

  render() {
    let quotes = this.state.quotes.map((data) => {
      return (
        <Quote quote={data.quote} author={data.author} key={data.id} />
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
