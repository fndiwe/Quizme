import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Pressable,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SelectStyles } from './styles';
import * as Animatable from 'react-native-animatable';
import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';
import LinearGradient from 'react-native-linear-gradient';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6558254583092184/3136344042';
export const { width } = Dimensions.get('window');
export const { height } = Dimensions.get('window');

function SelectCatogory({ navigation }) {
  return (
    <LinearGradient style={SelectStyles.container} colors={['#ff00cc', '#333399']}>
      <View style={SelectStyles.iconRow}>
        <Icon onPress={() => navigation.goBack()} name="arrow-back" style={SelectStyles.icon} />
        <Text style={SelectStyles.selectCategory}>Select category</Text>
      </View>
      <Animatable.View style={SelectStyles.rect1Stack} animation="bounceIn" useNativeDriver={true}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/science.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() =>
                    navigation.navigate('QuizScreen', {
                      category: 'Science',
                    })
                  }
                >
                  Science
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/history.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'History' })}
                >
                  History
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/entertainment.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'Entertainment' })}
                >
                  Entertainment
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/general_knowledge.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() =>
                    navigation.navigate('QuizScreen', { category: 'General Knowledge' })
                  }
                >
                  General Knowledge
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/myth.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'Mythology' })}
                >
                  Mythology
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/sports.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'Sports' })}
                >
                  Sports
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/geography.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'Geography' })}
                >
                  Geography
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/politics.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'Politics' })}
                >
                  Politics
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/art.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'Art' })}
                >
                  Art
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/celebrities.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'Celebrities' })}
                >
                  Celebrities
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/animals.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'Animals' })}
                >
                  Animals
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={SelectStyles.button4}>
              <ImageBackground
                source={require('../assets/images/vehicles.jpg')}
                style={SelectStyles.buttonImage}
              >
                <Text
                  style={SelectStyles.generalKnowledge}
                  onPress={() => navigation.navigate('QuizScreen', { category: 'Vehicles' })}
                >
                  Vehicles
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
      </Animatable.View>
    </LinearGradient>
  );
}

export default SelectCatogory;
