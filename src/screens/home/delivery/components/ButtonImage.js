import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {scaleNumber} from '../../../../utils/scale';
import TextCmp from '../../../../components/TextCmp';

const ButtonImage = ({style, text, icon}) => {
  return (
    <Pressable style={[styles.container, style]}>
      <Image resizeMode="contain" style={styles.icon} source={icon} />
      <TextCmp color="#828282" fontSize={10}>
        {text}
      </TextCmp>
    </Pressable>
  );
};

export default ButtonImage;

const styles = StyleSheet.create({
  icon: {
    width: scaleNumber(20),
    height: scaleNumber(20),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
