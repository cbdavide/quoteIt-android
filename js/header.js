import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './styles';

class Header extends Component {
	render() {
  	return (
    	<View style={style.header}>
      	<View style={style.header_content}>
        	<Text style={[style.text, style.header_content_text]}>
          	Quote It
          </Text>
        </View>
        <View style={style.header_control}>
      		<Text style={[style.text, style.header_control_text]}
								onPress={this.props.add}>
          	+
					</Text>
        </View>
      </View>
    );
  }
}

export default Header;