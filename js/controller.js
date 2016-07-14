'use strict';

import model from './model';

let route = 'http://api.forismatic.com/api/1.0/?',
    options = 'method=getQuote&lang=en&format=json';

export default {
  /*
   * Fetch the quote from the forismatic api
   * returns a promise which resolves with the quote(json)
   */
  downloadQuote: function() {
      return fetch(route + options)
        .then(res => res.json())
  },
  /*
   * Get all the quotes saved in the device
   * returns a promise which resolves with an array of quotes
   */
  getQuotes: function() {
    return model.getAllQuotes();
  },
  /*
   * Save a quote in the device
   * return void
   */
  saveQuote: function(quote) {
    model.saveQuote(quote);
  }

};
