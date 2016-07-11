'use strict';

import { AsyncStorage } from 'react-native';

/*
 *  Util function that transform the quotes from a
 *  array of arrays to a array of json objects
 */
const packageQuotes = function(arr) {
  return arr.map((data) => {

    let body = JSON.parse(data[1]);
    body.id = data[0];

    return body;
  })
}

const db = {

  saveQuote: function(quote) {

    let {quoteLink, quoteText, quoteAuthor} = quote;

    AsyncStorage.setItem(quoteLink, JSON.stringify({
      quote: quoteText,
      author: quoteAuthor
    }));

  },

  getAllQuotesIds: function() {
    return AsyncStorage.getAllKeys();
  },

  getAllQuotes: function() {
    let quotes = [];

    return new Promise((reject, resolve) => {

      this.getAllQuotesIds()
        .then((keys) => {
          AsyncStorage.multiGet(keys)
            .then((quotes) => {
              resolve(packageQuotes(quotes));
            })
            .catch((err) => {
              reject(err);
            })
        });
    });
  }
}

export default db;
