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
		this.addQuote = this.addQuote.bind(this);
  }

  componentWillMount() {
    core.getQuotes()
      .then(q => {
        this.setState(old => {
          return {quotes: q};
        })
      })
  }

	addQuote() {
		core.downloadQuote()
			.then(quote => {

				this.setState(old => {
					old.quotes.unshift({
						id: quote.quoteLink,
						quote: quote.quoteText,
						author: quote.quoteAuthor
					});					
				});

			})
			.catch(err => {
				//TODO Handle this error in a proper way
				console.log(err);
			});
	}

  render() {
    let quotes = this.state.quotes.map((data) => {
      return (
        <Quote quote={data.quote} author={data.author} key={data.id} />
      );
    })

    return (
      <Image source={require('./img/background.jpg')} style={style.container}>
				<Header add={this.addQuote}/>
        <ScrollView>
          {quotes}
        </ScrollView>
      </Image>
    );
  }
}

AppRegistry.registerComponent('quotesAndroid', () => App);
