import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Image} from 'react-native';
import Quote from './js/Quote';
import Header from './js/header';
import style from './js/styles';
import core from './js/controller';

class App extends Component {
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
				<Header />
        <ScrollView>
          {quotes}
        </ScrollView>
      </Image>
    );
  }
}

AppRegistry.registerComponent('quotesAndroid', () => App);
