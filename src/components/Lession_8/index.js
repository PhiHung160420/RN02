import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BgGame,
  Scissor,
  Rock,
  Paper,
  Player,
  Screen,
  PlayerComputer,
} from '../../Data/RockPaperScissor';
import SelectComponent from './SelectComponent';
import PlayerConponent from './PlayerConponent';
import ResultComponent from './ResultComponent';

const rockID = 'Rock';
const paperID = 'Paper';
const scissorID = 'Scissor';

class BaiTapOanTuXi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlImage: {id: scissorID, image: Scissor, status: false},
      randomUrl: {id: paperID, image: Paper, status: false},
      arrayGame: [
        {id: rockID, image: Rock, status: false},
        {id: paperID, image: Paper, status: false},
        {id: scissorID, image: Scissor, status: false},
      ],
      score: 0,
      times: 9,
      disable: false,
    };
  }

  setUrlHandler = url => {
    this.state.urlImage.image = url;
    this.setState({
      urlImage: this.state.urlImage,
    });
  };

  //set url when click button Play
  onPressPlaybutton = () => {
    this.setState({disable: true});
    const random = setInterval(() => {
      this.state.randomUrl.image = this.state.arrayGame[
        Math.floor(Math.random() * 3)
      ].image;
      this.setState({randomUrl: this.state.randomUrl});
    }, 100);
    setTimeout(() => {
      clearInterval(random);
      let times, score;
      switch (this.state.randomUrl.id) {
        case paperID:
          if (this.state.urlImage.id === paperID) {
            times = this.state.times - 1;
          } else if (this.state.urlImage.id === scissorID) {
            times = this.state.times - 1;
            score = this.state.score - 1;
          } else {
            times = this.state.times + 1;
            score = this.state.score + 1;
          }
          break;
        case scissorID:
          if (this.state.urlImage.id === scissorID) {
            times = this.state.times - 1;
          } else if (this.state.urlImage.id === rockID) {
            times = this.state.times - 1;
            score = this.state.score - 1;
          } else {
            times = this.state.times + 1;
            score = this.state.score + 1;
          }
          break;
        case rockID:
          if (this.state.urlImage.id === rockID) {
            times = this.state.times - 1;
          } else if (this.state.urlImage.id === paperID) {
            times = this.state.times - 1;
            score = this.state.score - 1;
          } else {
            times = this.state.times + 1;
            score = this.state.score + 1;
          }
          break;
        default:
          break;
      }
      this.setState({disable: false, times, score});
    }, 1000);
  };

  render() {
    return (
      <ImageBackground source={BgGame} style={styles.backgroudImage}>
        <View style={styles.overlay}>
          <StatusBar barStyle="light-content" />
          <SafeAreaView style={styles.container}>
            <View style={styles.playerContent}>
              <PlayerConponent
                imageGame={this.state.urlImage.image}
                imagePlayer={Player}
              />
              <PlayerConponent
                imageGame={this.state.randomUrl.image}
                imagePlayer={PlayerComputer}
              />
            </View>
            <View style={styles.selectContent}>
              <SelectComponent
                key={paperID}
                setUrlImage={this.setUrlHandler}
                imageSource={Paper}
                disable={this.state.disable}
              />
              <SelectComponent
                key={rockID}
                setUrlImage={this.setUrlHandler}
                imageSource={Rock}
                disable={this.state.disable}
              />
              <SelectComponent
                key={scissorID}
                setUrlImage={this.setUrlHandler}
                imageSource={Scissor}
                disable={this.state.disable}
              />
            </View>
            <ResultComponent
              time={this.state.times}
              score={this.state.score}
              onPressPlayButton={this.onPressPlaybutton}
              disable={this.state.disable}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  playerContent: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  selectContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonConent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageGame: {
    width: 80,
    height: 80,
  },
  styleBorder: {
    width: 90,
    height: 90,
    borderWidth: 4,
    borderColor: 'yellow',
    borderRadius: 10,
  },
  imagePlayer: {
    width: 120,
    height: 120,
  },
  playerContentBox: {
    flex: 1,
    alignItems: 'center',
  },
  boxSelectContent: {
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 8,
    borderBottomWidth: 12,
    borderLeftWidth: 8,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'yellow',
    borderLeftColor: 'transparent',
    transform: [{rotate: '180deg'}],
  },
  infoText: {
    color: '#00ffff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonPlay: {
    backgroundColor: '#ff00ff',
    paddingHorizontal: 45,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonReset: {
    backgroundColor: '#ffd700',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 15,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BaiTapOanTuXi;
