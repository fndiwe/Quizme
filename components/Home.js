import React, { useEffect, useState, useCallback } from 'react';
import { View, Image, Text, Dimensions, BackHandler, ScrollView, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Homestyles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';
import _ from 'lodash';
import { useFocusEffect } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
export const { width } = Dimensions.get('window');
export const { height } = Dimensions.get('window');

function Home({ navigation }) {
  const [generalKnowledge, clearGeneralKnowledge] = useState(null || '');
  const [entertainment, clearEntertainment] = useState(null || '');
  const [science, clearScience] = useState(null || '');
  const [mythology, clearMythology] = useState(null || '');
  const [sports, clearSports] = useState(null || '');
  const [geography, clearGeography] = useState(null || '');
  const [history, clearHistory] = useState(null || '');
  const [politics, clearPolitics] = useState(null || '');
  const [art, clearArt] = useState(null || '');
  const [celebrities, clearCelebrities] = useState(null || '');
  const [animals, clearAnimals] = useState(null || '');
  const [vehicles, clearVehicles] = useState(null || '');
  const [quotes, setQuotes] = useState({});
  const quote = quotes.text;
  const author = quotes.author;
  const [color, setColor] = useState('');
  let COLORS = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgrey',
    'darkgreen',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'grey',
    'green',
    'greenyellow',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgrey',
    'lightgreen',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen',
  ];
  const storeData = async ({ key, value }) => {
    try {
      await AsyncStorage.setItem(key, value);
      if (key === 'General Knowledge') {
        getData1();
      } else if (key === 'Entertainment') {
        getData2();
      } else if (key === 'Science') {
        getData3();
      } else if (key === 'Mythology') {
        getData4();
      } else if (key === 'Sports') {
        getData5();
      } else if (key === 'Geography') {
        getData6();
      } else if (key === 'History') {
        getData7();
      } else if (key === 'Politics') {
        getData8();
      } else if (key === 'Art') {
        getData9();
      } else if (key === 'Celebrities') {
        getData10();
      } else if (key === 'Animals') {
        getData11();
      } else if (key === 'Vehicles') {
        getData12();
      }
    } catch (e) {
      console.log('error');
    }
  };
  const getData1 = async () => {
    try {
      const value = await AsyncStorage.getItem('General Knowledge');
      if (value !== null) {
        clearGeneralKnowledge(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData2 = async () => {
    try {
      const value = await AsyncStorage.getItem('Entertainment');
      if (value !== null) {
        clearEntertainment(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData3 = async () => {
    try {
      const value = await AsyncStorage.getItem('Science');
      if (value !== null) {
        clearScience(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData4 = async () => {
    try {
      const value = await AsyncStorage.getItem('Mythology');
      if (value !== null) {
        clearMythology(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData5 = async () => {
    try {
      const value = await AsyncStorage.getItem('Sports');
      if (value !== null) {
        clearSports(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData6 = async () => {
    try {
      const value = await AsyncStorage.getItem('Geography');
      if (value !== null) {
        clearGeography(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData7 = async () => {
    try {
      const value = await AsyncStorage.getItem('History');
      if (value !== null) {
        clearHistory(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData8 = async () => {
    try {
      const value = await AsyncStorage.getItem('Politics');
      if (value !== null) {
        clearPolitics(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData9 = async () => {
    try {
      const value = await AsyncStorage.getItem('Art');
      if (value !== null) {
        clearArt(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData10 = async () => {
    try {
      const value = await AsyncStorage.getItem('Celebrities');
      if (value !== null) {
        clearCelebrities(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData11 = async () => {
    try {
      const value = await AsyncStorage.getItem('Animals');
      if (value !== null) {
        clearAnimals(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  const getData12 = async () => {
    try {
      const value = await AsyncStorage.getItem('Vehicles');
      if (value !== null) {
        clearVehicles(value);
      }
    } catch (e) {
      console.log('error get');
    }
  };
  useFocusEffect(
    useCallback(() => {
      getData1();
      getData2();
      getData3();
      getData4();
      getData5();
      getData6();
      getData7();
      getData8();
      getData9();
      getData10();
      getData11();
      getData12();
    }, [])
  );

  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6558254583092184/3136344042';

  useEffect(() => {
    getQuotes();
    setInterval(() => {
      getQuotes();
    }, 20000);
    setInterval(() => {
      changeColors();
    }, 500);
  }, []);

  function changeColors() {
    const colors = COLORS[Math.floor(Math.random() * COLORS.length)];
    setColor(colors);
  }
  const MyIcon = Animatable.createAnimatableComponent(Icon);
  function getQuotes() {
    const quotes = _.shuffle(require('../quotes.json'));
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuotes(randomQuote);
  }
  return (
    <LinearGradient style={Homestyles.container} colors={['#ff00cc', '#333399']}>
      {/* <Pressable onPress={() => navigation.navigate('Settings')}>
          <Icon name="menu" size={25} style={Homestyles.image4} />
        </Pressable> */}
      <Animatable.Image
        source={require('../assets/images/welcome.png')}
        duration={3000}
        delay={1}
        useNativeDriver={true}
        animation="fadeInDown"
        style={[Homestyles.welcomeTo, { marginTop: 19 }]}
      />
      <Animatable.Image
        delay={2}
        useNativeDriver={true}
        duration={4000}
        animation="bounceInRight"
        source={require('../assets/images/cooltext415358085543536.png')}
        style={Homestyles.image}
      />
      <Animatable.View
        useNativeDriver={true}
        animation="fadeInUp"
        duration={4000}
        style={{
          position: 'absolute',
          zIndex: 1,
          top: height * 0.32,
          left: width * 0.43,
        }}
      >
        <MyIcon name="auto-awesome" color={color} size={height * 0.115} />
      </Animatable.View>
      {/* <MyIcon
        delay={5}
        useNativeDriver={true}
        iterationCount={1}
        animation="pulse"
        name="share"
        size={height * 0.07}
        color={'lightblue'}
        style={{ position: 'absolute', left: width * 0.83, top: height * 0.03 }}
      /> */}
      <Animatable.Text
        delay={6}
        useNativeDriver={true}
        animation="fadeInRight"
        duration={4000}
        style={Homestyles.quote}
      >
        {quote}
      </Animatable.Text>
      <Animatable.Text
        delay={6}
        useNativeDriver={true}
        animation="fadeInLeft"
        duration={4000}
        style={Homestyles.author}
      >
        -{author}
      </Animatable.Text>
      <Animatable.View
        style={Homestyles.rect1}
        animation="fadeInUp"
        duration={4000}
        useNativeDriver={true}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          colors={['transparent']}
          style={{ backgroundColor: 'transparent', width: width }}
          progressBackgroundColor="transparent"
        >
          <View style={Homestyles.buttonRow}>
            <Pressable onPress={() => navigation.navigate('SelectCategory')}>
              <Animatable.Image
                duration={3000}
                source={require('../assets/images/cooltext415359433909353.png')}
                resizeMode="cover"
                style={Homestyles.image2}
                animation="pulse"
                iterationCount="infinite"
                easing="ease-out"
              />
            </Pressable>
            <Pressable onPress={() => BackHandler.exitApp()}>
              <Image
                source={require('../assets/images/cooltext415363926051264.png')}
                resizeMode="cover"
                style={Homestyles.image3}
              />
            </Pressable>
          </View>
          <Text style={Homestyles.highestScore201}>
            <Icon name="grade" color={color} size={height * 0.04} /> Highest Stars{' '}
            <Icon name="grade" color={color} size={height * 0.04} />
          </Text>
          {/* <Text
            style={{
              color: 'red',
              fontFamily: 'verdanapro_bold',
              textAlign: 'center',
              fontSize: width * 0.037,
            }}
          >
            <Icon name="info" color="red" /> Highest Stars are added on next app launch
          </Text> */}

          {generalKnowledge && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>General Knowledge</Text>
              <Text style={Homestyles.score}>{generalKnowledge}</Text>
              <Text
                onPress={() => storeData({ key: 'General Knowledge', value: String(0) })}
                style={Homestyles.reset}
              >
                Reset
              </Text>
            </View>
          )}

          {entertainment && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Entertainment</Text>
              <Text style={Homestyles.score}>{entertainment}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Entertainment', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {science && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Science</Text>
              <Text style={Homestyles.score}>{science}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Science', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {mythology && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Mythology</Text>
              <Text style={Homestyles.score}>{mythology}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Mythology', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {sports && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Sports</Text>
              <Text style={Homestyles.score}>{sports}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Sports', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {geography && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Geography</Text>
              <Text style={Homestyles.score}>{geography}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Geography', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {history && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>History</Text>
              <Text style={Homestyles.score}>{history}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'History', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {politics && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Politics</Text>
              <Text style={Homestyles.score}>{politics}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Politics', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {art && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Art</Text>
              <Text style={Homestyles.score}>{art}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Art', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {celebrities && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Celebrities</Text>
              <Text style={Homestyles.score}>{celebrities}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Celebrities', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {animals && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Animals</Text>
              <Text style={Homestyles.score}>{animals}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Animals', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}

          {vehicles && (
            <View style={Homestyles.view}>
              <Text style={Homestyles.highestScore200}>Vehicles</Text>
              <Text style={Homestyles.score}>{vehicles}</Text>
              <Text
                style={Homestyles.reset}
                onPress={() => storeData({ key: 'Vehicles', value: String(0) })}
              >
                Reset
              </Text>
            </View>
          )}
        </ScrollView>
        <Animatable.View useNativeDriver={true} animation="fadeInUp" duration={3000}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
        </Animatable.View>
      </Animatable.View>
    </LinearGradient>
  );
}

export default Home;
