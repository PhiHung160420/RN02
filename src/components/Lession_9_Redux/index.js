import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {countUpAction, countDownAction} from './redux/actions/index';
class DemoRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> Demo redux </Text>
        <Text style={styles.textStyle}> Number : {this.props.number} </Text>
        <View style={styles.content}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 10,
              marginRight: 20,
            }}
            onPress={() => this.props.countUpClick(this.props.number)}>
            <Text>Count up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 10,
            }}
            onPress={() => this.props.countDownClick(this.props.number)}>
            <Text>Count down</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.CountReducer.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    countUpClick: number => {
      dispatch(countUpAction(number));
    },
    countDownClick: number => {
      dispatch(countDownAction(number));
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default DemoRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoRedux);
