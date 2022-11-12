import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  rect1: {
    top: height * 0.055,
    width: width * 0.94,
    height: height * 0.42,
    position: 'absolute',
    textAlign: 'center',
    borderWidth: 0,
    borderColor: '#000000',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonRow: {
    bottom: height * 0.04,
    position: 'absolute',
  },
  points100003: {
    fontFamily: 'akaya-telivigala-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: height * 0.033,
    textAlign: 'center',
    width: width * 0.91,
    marginTop: 10,
  },
  quit: {
    fontFamily: 'akaya-telivigala-regular',
    color: 'red',
    fontSize: height * 0.035,
    top: height * 0.0008,
    left: width * 0.8,
    position: 'absolute',
  },

  sound2: {
    top: 0,
    position: 'absolute',
    fontFamily: 'akaya-telivigala-regular',
    fontSize: height * 0.03,
  },

  points20000000: {
    fontFamily: 'akaya-telivigala-regular',
    color: 'rgba(23,44,68,1)',
    fontSize: height * 0.03,
  },
  rect1StackStack: {
    width: width - 25,
    height: height - 30,
    marginTop: 5,
  },
  button1: {
    height: height * 0.085,
    width: width * 0.83,
    backgroundColor: 'rgba(11,80,161,1)',
    borderRadius: 13,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: 'row',
  },
  a2: {
    fontFamily: 'akaya-telivigala-regular',
    color: 'rgba(241,217,217,1)',
    fontSize: height * 0.03,
    marginTop: 3,
  },
  cheetah: {
    fontFamily: 'akaya-telivigala-regular',
    color: 'rgba(241,217,217,1)',
    fontSize: height * 0.027,
    marginLeft: 5,
    width: width * 0.73,
    height: height * 0.082,
    marginTop: 0,
  },
  a2Row: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 145,
    marginLeft: 9,
    marginTop: 0,
  },
});

export const Homestyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rect1: {
    elevation: 100,
    width: width,
    height: height * 0.585,
    backgroundColor: '#171517',
    borderWidth: 0,
    borderColor: '#000000',
    borderTopRightRadius: width * 0.08,
    borderTopLeftRadius: width * 0.08,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  reset: {
    fontFamily: 'verdanapro_bold',
    fontSize: height * 0.021,
    color: 'red',
    position: 'absolute',
    right: 7,
  },
  score: {
    fontFamily: 'akaya-telivigala-regular',
    fontSize: height * 0.03,
    position: 'absolute',
    right: width * 0.35,
    color: 'white',
  },
  quote: {
    fontFamily: 'akaya-telivigala-regular',
    fontSize: height * 0.0285,
    top: height * 0.14,
    marginLeft: 20,
    justifyContent: 'center',
    width: width - 30,
    color: 'rgba(241,217,217,1)',
    position: 'absolute',
  },
  author: {
    fontFamily: 'verdanapro_bolditalic',
    color: 'rgba(74,74,74,1)',
    fontSize: height * 0.02,
    top: width * 0.22,
    left: width * 0.543,
    position: 'absolute',
  },

  welcomeTo: {
    width: width * 0.4,
    height: height * 0.035,
    marginLeft: 5,
    marginBottom: -20,
  },
  image: {
    width: width * 0.55,
    height: height * 0.052,
    marginTop: 27,
    marginLeft: 5,
  },
  image2: {
    width: width * 0.45,
    height: height * 0.071,
    left: width * 0.5,
    position: 'absolute',
    top: height * 0.033,
  },
  image3: {
    width: width * 0.2,
    height: height * 0.057,
    top: height * 0.04,
    left: width * 0.031,
  },
  buttonRow: {
    height: height * 0.1,
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 13,
  },
  highestScore200: {
    fontFamily: 'verdanapro_bold',
    color: 'white',
    fontSize: height * 0.022,
    marginLeft: 7,
    marginBottom: 15,
  },
  view: {
    flexDirection: 'row',
  },
  highestScore201: {
    fontFamily: 'verdanapro_black',
    color: 'white',
    fontSize: height * 0.025,
    marginTop: 28,
    marginBottom: 9,
    textAlign: 'center',
  },
});

export const SelectStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    color: 'white',
    fontSize: height * 0.04,
    height: height * 0.18,
    marginTop: -30,
    position: 'absolute',
  },
  selectCategory: {
    fontFamily: 'akaya-telivigala-regular',
    color: 'white',
    fontSize: height * 0.035,
    marginLeft: width * 0.2,
    marginTop: -38,
  },
  iconRow: {
    height: height * 0.005,
    flexDirection: 'row',
    marginTop: height * 0.075,
    marginLeft: width * 0.07,
    textAlign: 'center',
  },

  rect1Stack: {
    width: width,
    height: height - 72,
  },
  button4: {
    height: height * 0.08,
    width: width * 0.65,
    backgroundColor: 'transparent',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 20,
  },
  buttonImage: {
    height: height * 0.08,
    width: width * 0.65,
  },
  generalKnowledge: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'verdanapro_bold',
    color: 'white',
    fontSize: height * 0.025,
  },
});
