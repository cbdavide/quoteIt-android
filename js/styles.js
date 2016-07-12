'use strict';
import { StyleSheet } from 'react-native';

const color = {
  box: 'rgba(0,153,255,0.7)',
  header: 'rgba(0, 0, 0, 0.8)',
  text: 'white',
};

export default StyleSheet.create({
  text: {
    color: color.text,
    fontFamily: 'pauta'
  },
  container: {
    flex: 1,
    height: null,
    width: null
  },
  header: {
    alignItems: 'center',
    flex: 0,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'space-between',
  },
  header_content: {
    backgroundColor: color.header,
    flex: 10,
    height: 45,
    padding: 10
  },
  header_content_text: {
    fontSize: 20,
  },
  header_control: {
    backgroundColor: 'rgb(0,153,255)',
    flex: 1,
    height: 45,
    paddingLeft: 10,
    paddingRight: 10
  },
  header_control_text: {
    fontSize: 30,
    textAlign: 'center'
  },
  quote_box: {
    backgroundColor: color.box,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    padding: 10
  },
  quote_text: {
    textAlign: 'center',
  },
  quote_author: {
    textAlign: 'right',
    marginTop: 10
  }
});
