import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Icons from '../../../../assets';
import TextCmp from '../../../../components/TextCmp';
import {scaleNumber} from '../../../../utils/scale';

const HeaderBar = ({ onBack }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack} style={styles.button}>
        <Image source={Icons.Back} />
      </Pressable>
      <View>
        <TextCmp fontSize={16} color="#333333">
          Ready for pick up in 15:00
        </TextCmp>
        <TextCmp fontSize={12} color="#828282">
          Order 311
        </TextCmp>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scaleNumber(10),
  },
  button: {
    padding: scaleNumber(10),
  },
});
