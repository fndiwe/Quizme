import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import _ from 'lodash';
import { decode } from 'html-entities';
import TypeWriter from 'react-native-typewriter';
import Tts from 'react-native-tts';
import Sound from 'react-native-sound';
import { styles } from './styles';
import useAsyncStorage from '@rnhooks/async-storage';
import { TestIds, useInterstitialAd } from 'react-native-google-mobile-ads';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
export const { width } = Dimensions.get('window');
export const { height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import BackgroundTimer from 'react-native-background-timer';
var lives = [1, 2, 3];

function QuizScreen({ route, navigation }) {
  const { category } = route.params;
  const [highScore, updateHighScore] = useAsyncStorage(category);

  const [gameStates, setGameStates] = useState({
    score: 0,
    gameOver: false,
    questionExhausted: false,
    questionNumber: 0,
    questionList: [],
    currentQuestion: {},
  });
  const [highScore1, setHighScore1] = useState('');
  const [showAnswers, setShowAnswers] = useState(false);
  const [extraZero, setExtraZero] = useState(false);
  const [color, setColor] = useState(['#3a6186', '#89253e']);
  const [timer, setTimer] = useState(30);
  const [startTimer, setStartTimer] = useState(false);
  const [textColor, setTextColor] = useState('white');
  const awwSound = new Sound('aww.mp3', Sound.MAIN_BUNDLE).setVolume(0.5);
  const clappingSound = new Sound('applause.mp3', Sound.MAIN_BUNDLE).setVolume(0.5);
  const clickSound = new Sound('click.mp3', Sound.MAIN_BUNDLE);
  const wrongSound = new Sound('wrong.mp3', Sound.MAIN_BUNDLE).setVolume(0.8);
  const correctSound = new Sound('correct.mp3', Sound.MAIN_BUNDLE);
  const question = decode(gameStates.currentQuestion.question);
  const [disabled, setDisabled] = useState(true);
  const [plusFive, setPlusFive] = useState('');
  const correctAnswer = decode(gameStates.currentQuestion.correct_answer);
  const incorrectAnswers = gameStates.currentQuestion.incorrect_answers;
  const questionAnswers = React.useMemo(() => {
    const numbers = _.shuffle(_.concat(incorrectAnswers, correctAnswer));
    return numbers;
  }, [question]);
  const answer1 = decode(questionAnswers[0]);
  const answer2 = decode(questionAnswers[1]);
  const answer3 = decode(questionAnswers[2]);
  const answer4 = decode(questionAnswers[3]);
  const adUnitId1 = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-6558254583092184/2082869406';
  const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitId1);

  useEffect(() => {
    // Start loading the interstitial straight away
    load();
  }, [load]);

  useEffect(() => {
    if (isClosed) {
      // Action after the ad is closed
      navigation.navigate('Home', {
        category: { score: highScore1 },
      });
    }
  }, [isClosed, navigation]);

  function getQuestions() {
    const questionData = require('../questions.json');
    const questions = _.shuffle(questionData.results.filter((o) => o.category.includes(category)));
    setGameStates((prevState) => ({
      ...prevState,
      questionList: questions,
    }));
  }
  function getNextQuestion() {
    if (lives.length === 0) {
      Tts.speak('You have exhausted your number of lives');
      Tts.speak('Try again next time');
      setTimeout(() => {
        awwSound.play(() => {
          awwSound.release();
        });
      }, 2000);
      setTimeout(
        () =>
          setGameStates((prevState) => ({
            ...prevState,
            gameOver: true,
          })),
        5000
      );
    } else {
      setShowAnswers(false);
      setGameStates((prevState) => ({
        ...prevState,
        currentQuestion: prevState.questionList[prevState.questionNumber],
      }));
      setTimeout(() => {
        setShowAnswers(true);
        start();
        setDisabled(false);
      }, 3000);
    }
  }

  const setHighScore = async () => {
    updateHighScore(String(gameStates.score));
    setHighScore1(String(gameStates.score));
  };
  function checkAnswer(props) {
    setDisabled(true);
    clickSound.play(() => {
      clickSound.release();
    });
    const clickedOption = props;
    BackgroundTimer.clearTimeout(timer1);
    if (clickedOption === correctAnswer) {
      setColor(['green', 'green']);
      setTimeout(() => {
        setColor(['#3a6186', '#89253e']);
      }, 1500);
      setGameStates((prevState) => ({
        ...prevState,
        score: prevState.score + 5,
        questionNumber: prevState.questionNumber + 1,
      }));
      setPlusFive('+5');
      setTimeout(() => {
        setPlusFive('');
      }, 2000);

      correctSound.play(() => {
        correctSound.release();
      });
      setTimeout(() => {
        Tts.speak('correct');
      }, 1000);
      setTimeout(() => {
        clappingSound.play(() => {
          clappingSound.release();
        });
      }, 1500);
      setTimeout(() => {
        getNextQuestion();
      }, 5000);
    } else if (clickedOption !== correctAnswer) {
      setTimeout(() => {
        lives.pop();
      }, 4000);
      setColor(['red', 'red']);
      setTimeout(() => {
        setColor(['#3a6186', '#89253e']);
      }, 2000);
      wrongSound.play(() => {
        wrongSound.release();
      });
      setTimeout(() => {
        Tts.speak('The correct Answer is ' + correctAnswer);
      }, 2000);
      setGameStates((prevState) => ({
        ...prevState,
        questionNumber: prevState.questionNumber + 1,
      }));

      setTimeout(() => {
        if (lives.length !== 0) {
          if (lives.length === 1) {
            Tts.speak('You have ' + lives.length + ' life remaining');
          } else {
            Tts.speak('You have ' + lives.length + ' lives remaining');
          }
        }
        getNextQuestion();
      }, 10000);
    }
  }
  useEffect(() => {
    getQuestions();
    lives = [1, 2, 3];
    Tts.getInitStatus().then(
      () => {
        Tts.setDefaultLanguage('en-US');
        Tts.setDefaultRate(0.27);
        Tts.setDefaultPitch(0.88);
        Tts.speak(
          `Welcome to ${category}
          section of Trivia Hq.`
        );
        setTimeout(() => {
          getNextQuestion();
        }, 7000);
      },
      (err) => {
        if (err.code === 'no_engine') {
          Tts.requestInstallEngine();
        }
      }
    );
  }, []);
  useEffect(() => {
    if (gameStates.score > Number(highScore)) {
      setHighScore();
    }
  }, [gameStates.score]);
  useEffect(() => {
    if (gameStates.gameOver) {
      if (isLoaded) {
        Tts.speak('Before you leave I have an ad for you, please be sure to check it out');
        setTimeout(() => {
          show();
        }, 4000);
      } else {
        Tts.speak('Please turn on your internet connection to get ads recommendations');
        setTimeout(() => {
          navigation.navigate('Home', {
            category: { score: highScore1 },
          });
        }, 6000);
      }
    }
  }, [gameStates.gameOver]);
  let timer1 = () => {};

  const startTimer1 = () => {
    if (startTimer) {
      timer1 = BackgroundTimer.setTimeout(() => {
        if (timer <= 0) {
          setDisabled(true);
          Tts.speak('Your Time is Up');
          setTimeout(() => {
            lives.pop();
          }, 4000);
          setColor(['red', 'red']);
          setTimeout(() => {
            setColor(['#3a6186', '#89253e']);
          }, 2000);
          wrongSound.play(() => {
            wrongSound.release();
          });
          setTimeout(() => {
            Tts.speak('The correct Answer is ' + correctAnswer);
          }, 3000);
          setGameStates((prevState) => ({
            ...prevState,
            questionNumber: prevState.questionNumber + 1,
          }));

          setTimeout(() => {
            if (lives.length !== 0) {
              if (lives.length === 1) {
                Tts.speak('You have ' + lives.length + ' life remaining');
              } else {
                Tts.speak('You have ' + lives.length + ' lives remaining');
              }
            }
            getNextQuestion();
          }, 10000);
          return false;
        }
        if (timer <= 10) {
          setTextColor('red');
          setExtraZero(true);
        }
        setTimer(timer - 1);
      }, 1000);
    }
  };

  useEffect(() => {
    startTimer1();
    return () => BackgroundTimer.clearTimeout(timer1);
  }, [timer, startTimer]);

  const start = () => {
    Tts.speak('Your time begins now');
    setExtraZero(false);
    setTextColor('white');
    setStartTimer(true);
    setTimer(30);
    startTimer1();
  };
  return (
    <LinearGradient style={styles.container} colors={['#ff00cc', '#333399']}>
      <View style={styles.rect1StackStack}>
        <Animatable.View animation="bounceInDown" useNativeDriver={true} duration={2000}>
          <LinearGradient colors={color} style={styles.rect1}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.points100003}>{question}</Text>
            </ScrollView>
          </LinearGradient>
        </Animatable.View>

        <Animatable.View
          style={{ flexDirection: 'row' }}
          animation="fadeInLeft"
          useNativeDriver={true}
          duration={2000}
        >
          <Icon name="grade" color="lightgreen" size={height * 0.04} />
          <Text style={styles.points20000000}>
            {gameStates.score} {plusFive}
          </Text>
        </Animatable.View>
        <Animatable.Text
          animation="fadeInDown"
          useNativeDriver={true}
          duration={2000}
          style={[styles.sound2, { color: textColor, left: width * 0.6 }]}
        >
          00:{extraZero && 0}
          {timer}
        </Animatable.Text>
        <Animatable.View
          animation="fadeInDown"
          useNativeDriver={true}
          duration={2000}
          style={{ flexDirection: 'row', left: width * 0.32, marginTop: 5, position: 'absolute' }}
        >
          {lives.map((name) => (
            <Icon key={name} name="favorite" color="red" size={height * 0.023} />
          ))}
        </Animatable.View>

        <Animatable.Text
          onPress={() => {
            if (isLoaded) {
              BackgroundTimer.clearTimeout(timer1);
              Tts.speak('Before you leave i have an ad for you');
              setTimeout(() => {
                show();
              }, 2000);
            } else {
              BackgroundTimer.clearTimeout(timer1);
              navigation.navigate('Home', {
                category: { score: highScore1 },
              });
            }
          }}
          useNativeDriver={true}
          animation="fadeInRight"
          duration={2000}
          style={styles.quit}
        >
          Quit
        </Animatable.Text>
      </View>
      <Animatable.View
        useNativeDriver={true}
        animation="fadeInUp"
        duration={2000}
        style={styles.buttonRow}
      >
        {showAnswers && (
          <TouchableOpacity
            disabled={disabled}
            style={[styles.button1, { marginTop: -height * 0.2 }]}
            onPress={() => {
              checkAnswer(answer1);
            }}
          >
            <View style={styles.a2Row}>
              <Text style={styles.a2}>A.</Text>
              <Text style={styles.cheetah}>{answer1}</Text>
            </View>
          </TouchableOpacity>
        )}

        {showAnswers && (
          <TouchableOpacity
            disabled={disabled}
            style={[styles.button1, { marginTop: 13 }]}
            onPress={() => checkAnswer(answer2)}
          >
            <View style={styles.a2Row}>
              <Text style={styles.a2}>B.</Text>
              <Text style={styles.cheetah}>{answer2}</Text>
            </View>
          </TouchableOpacity>
        )}

        {showAnswers && (
          <TouchableOpacity
            disabled={disabled}
            style={[styles.button1, { marginTop: 16 }]}
            onPress={() => checkAnswer(answer3)}
          >
            <View style={styles.a2Row}>
              <Text style={styles.a2}>C.</Text>
              <Text style={styles.cheetah}>{answer3}</Text>
            </View>
          </TouchableOpacity>
        )}

        {showAnswers && (
          <TouchableOpacity
            disabled={disabled}
            style={[styles.button1, { marginTop: 16 }]}
            onPress={() => checkAnswer(answer4)}
          >
            <View style={styles.a2Row}>
              <Text style={styles.a2}>D.</Text>
              <Text style={styles.cheetah}>{answer4}</Text>
            </View>
          </TouchableOpacity>
        )}
      </Animatable.View>
    </LinearGradient>
  );
}

export default QuizScreen;
