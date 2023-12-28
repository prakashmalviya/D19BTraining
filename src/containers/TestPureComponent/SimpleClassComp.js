import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class SimpleClassComp extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);

    return nextProps.enteredText !== this.props.enteredText;
    //return !_.isEqual(this.props, nextProps);
  }

  render() {
    console.log('Render Class Component');
    const {textValue} = this.props;
    return (
      <View>
        <Text>Simple Class Component</Text>
        <Text>{textValue}</Text>
      </View>
    );
  }
}
export default SimpleClassComp;
