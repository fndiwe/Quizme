import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SettingStyles } from './styles';
function Settings({ navigation }) {
  const year = new Date().getFullYear();

  // useEffect(() => {
  //   AsyncStorage.getAllKeys((err, keys) => {
  //     AsyncStorage.multiGet(keys, (error, stores) => {
  //       stores.map((result, i, store) => {
  //         console.log({ [store[i][0]]: store[i][1] });
  //         return true;
  //       });
  //     });
  //   });
  // }, []);

  // const getPlayerState = async () => {
  //   var value = await AsyncStorage.getItem('playerState');
  //   value = String(value) == 'true';
  //   setMute(value);
  // };
  return (
    <View style={SettingStyles.container}>
      <View style={SettingStyles.rect1}>
        <View style={SettingStyles.icon1Row}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={SettingStyles.icon1}></Icon>
          </Pressable>
          <Text style={SettingStyles.settings}>Menu</Text>
        </View>

        {/* <View style={SettingStyles.imageRow}>
          <Text style={SettingStyles.sound}>Sound</Text>
          <View>
            {!mute ? (
              <Pressable onPress={() => updateStorageItem('true')}>
                <Image
                  source={require('../assets/images/icons8-sound-64.png')}
                  resizeMode="contain"
                  style={SettingStyles.image}
                ></Image>
              </Pressable>
            ) : (
              <Pressable onPress={() => setMute(false)}>
                <Image
                  source={require('../assets/images/icons8-sound-64_(1).png')}
                  resizeMode="contain"
                  style={SettingStyles.image2}
                ></Image>
              </Pressable>
            )}
          </View>
        </View> */}
      </View>
      <View style={SettingStyles.rateAppRow}>
        <Text style={SettingStyles.rateApp}>Rate App</Text>
        <Icon name="star-rate" style={SettingStyles.icon2}></Icon>
        <Text style={[SettingStyles.rateApp, { marginLeft: 35 }]}>Share</Text>
        <Icon name="share" style={[SettingStyles.icon2, { marginLeft: 5 }]}></Icon>
      </View>
      <Text style={SettingStyles.rateApp2}>© copyright {year} Quizme.</Text>
    </View>
  );
}

export default Settings;
