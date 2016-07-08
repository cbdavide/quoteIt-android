'use strict';

import { AsyncStorage } from 'react-native';

/*
 *  Util function that transform the quotes from a
 *  array of arrays to a array of json objects
 */
const packageQuotes = function(arr) {
  return arr.map((data) => {

    let body = JSON.parse(data[1]);

    return {
      id: data[0],
      quote: body.quote,
      author: body.author
    };
  })
}

const db = {

  saveQuote: function(quote) {

    let {id, quoteText, quoteAuthor} = quote;

    AsyncStorage.setItem(id, JSON.stringify({
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
