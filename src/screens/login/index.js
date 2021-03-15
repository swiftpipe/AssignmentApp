import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import Icons from '../../assets';
import {scaleNumber} from '../../utils/scale';
import ButtonSignIn from './components/ButtonSignIn';
import {useNavigation} from '@react-navigation/native';
import AppName from '../../constants/AppName';
const LoginSreen = () => {
  const navigate = useNavigation();
  const onPressLoginFb = () => {
    navigate.reset({
      index: 0,
      routes: [{name: AppName.RootApp}],
    });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Icons.Banner} />
      <View style={styles.body}>
        <ButtonSignIn
          onPress={onPressLoginFb}
          icon={Icons.Fb}
          text="Sign in with Facebook"
        />
        <ButtonSignIn
          style={styles.marginButton}
          icon={Icons.Google}
          text="Sign in with Google"
        />
      </View>
    </View>
  );
};

export default LoginSreen;

const styles = StyleSheet.create({
  container: {
    padding: scaleNumber(16),
    // justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    //   alignItems:'center'
  },
  marginButton: {marginTop: scaleNumber(10)},
  image: {
    position: 'absolute',
    top: scaleNumber(91),
    alignSelf: 'center',
  },
  body: {
    marginTop: scaleNumber(288),
  },
});
