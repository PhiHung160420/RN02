import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  BackgroundImage,
  Scissor,
  Rock,
  Paper,
  Player,
  Bot,
} from '../../../Data/RockPaperScissor';

import PlayerItem from './PlayerItem';
import SelectContent from './SelectContent';
import ResultContent from './ResultContent';
import {connect} from 'react-redux';
import {
  setArrayGameAction,
  playerSeclectAction,
  botSeclectAction,
} from '../redux/actions/index';

class BaiTapRedux extends Component {
  state = {
    score: 0,
    times: 9,
    disabled: false,
  };

  onSelectedItem = selectedItem => {
    const arrayGame = this.props.arrayGame;
    const index = arrayGame.findIndex(item => item.id === selectedItem.id);
    if (!arrayGame[index].status) {
      const previousStatusIndex = arrayGame.findIndex(item => item.status);
      arrayGame[previousStatusIndex].status = false;
      arrayGame[index].status = true;
    }
    this.props.setStateArrayGame(arrayGame);
    this.props.playerSelectHandler(selectedItem);
  };

  onPressPlayButton = () => {
    this.setState({disabled: true});
    const random = setInterval(() => {
      this.props.botSelectHandler(
        this.props.arrayGame[Math.floor(Math.random() * 3)],
      );
    }, 100);

    setTimeout(() => {
      clearInterval(random);
      this.setState({disabled: false});
      let times, score;
      switch (this.props.playerSelect.id) {
        case 'paper':
          if (this.props.botSelect.id === 'paper') {
            if (this.state.times > 0) {
              times = this.state.times - 1;
            }
            score = this.state.score;
          } else if (this.props.botSelect.id === 'scissor') {
            if (this.state.score > 0) {
              score = this.state.score - 1;
            }
            if (this.state.times > 0) {
              times = this.state.times - 1;
            }
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        case 'scissor':
          if (this.props.botSelect.id === 'scissor') {
            if (this.state.times > 0) {
              times = this.state.times - 1;
            }
            score = this.state.score;
          } else if (this.props.botSelect.id === 'rock') {
            if (this.state.score > 0) {
              score = this.state.score - 1;
            }
            if (this.state.times > 0) {
              times = this.state.times - 1;
            }
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        case 'rock':
          if (this.props.botSelect.id === 'rock') {
            if (this.state.times > 0) {
              times = this.state.times - 1;
            }
            score = this.state.score;
          } else if (this.props.botSelect.id === 'paper') {
            if (this.state.score > 0) {
              score = this.state.score - 1;
            }
            if (this.state.times > 0) {
              times = this.state.times - 1;
            }
          } else {
            score = this.state.score + 1;
            times = this.state.times + 1;
          }
          break;
        default:
          break;
      }
      this.setState({disable: false, times, score});
    }, 2000);
  };

  onPressResetButton = () => {
    this.setState({
      times: 9,
      score: 0,
    });
    this.props.playerSelectHandler({id: 'paper', image: Paper, status: true});
    this.props.botSelectHandler({id: 'scissor', image: Scissor, status: false});
    this.props.arrayGame.map(item => (item.status = false));
    this.props.arrayGame[2].status = true;
  };

  render() {
    return (
      <ImageBackground
        style={styles.backgroundContent}
        source={BackgroundImage}>
        <StatusBar barStyle="light-content" />
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <View style={styles.playerContent}>
              <PlayerItem
                imageGame={this.props.playerSelect.image}
                imagePlayer={Player}
              />
              <PlayerItem
                imageGame={this.props.botSelect.image}
                imagePlayer={Bot}
              />
            </View>
            <View style={styles.selectContent}>
              <SelectContent
                onSelectItem={this.onSelectedItem}
                arrayGame={this.props.arrayGame}
                isSelected={this.state.isSelected}
                disabled={this.state.disabled}
              />
            </View>
            <ResultContent
              score={this.state.score}
              times={this.state.times}
              disabled={this.state.disabled}
              onPressPlayButton={this.onPressPlayButton}
              onPressResetButton={this.onPressResetButton}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContent: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
  },
  playerContent: {
    flex: 2,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  selectContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  imageItem: {
    width: 50,
    height: 50,
  },
  borderItem: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'yellow',
  },
  infoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00fecd',
  },
});

const mapStateToProp = state => {
  return {
    arrayGame: state.GameReducer.arrayGame,
    playerSelect: state.PlayerSelectReducer.playerSelect,
    botSelect: state.BotSelectReducer.botSelect,
  };
};

const mapDispatchToProp = dispatch => {
  return {
    setStateArrayGame: arrayGame => {
      dispatch(setArrayGameAction(arrayGame));
    },
    playerSelectHandler: selectItem => {
      dispatch(playerSeclectAction(selectItem));
    },
    botSelectHandler: selectItem => {
      dispatch(botSeclectAction(selectItem));
    },
  };
};

export default BaiTapRedux = connect(
  mapStateToProp,
  mapDispatchToProp,
)(BaiTapRedux);
