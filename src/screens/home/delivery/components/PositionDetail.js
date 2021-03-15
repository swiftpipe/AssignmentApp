import React from 'react';
import {StyleSheet, Image, View, Pressable} from 'react-native';
import Icons from '../../../../assets';
import TextCmp from '../../../../components/TextCmp';
import {scaleNumber} from '../../../../utils/scale';

const PositionDetail = ({text, icon}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={[styles.icon, {marginRight: scaleNumber(10)}]}
            source={icon}
          />
          <TextCmp color="#BDBDBD" fontSize={14}>
            {text}
          </TextCmp>
        </View>
        <TextCmp fontSize={16} color={'#FFFFFF'}>
          123 streename sth somewhere 2nd line of address
        </TextCmp>
      </View>
      <Pressable style={styles.buttonDirect}>
        <Image style={styles.icon} source={Icons.Directer} />
      </Pressable>
    </View>
  );
};

export default PositionDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F4F4F',
    flexDirection: 'row',
    alignItems: 'center',
    padding: scaleNumber(14),
  },
  icon: {
    width: scaleNumber(16),
    height: scaleNumber(16),
  },
  buttonDirect: {
    backgroundColor: '#00ACC1',
    width: scaleNumber(34),
    height: scaleNumber(34),
    borderRadius: scaleNumber(34),
    justifyContent: 'center',
    alignItems: 'center',
    margin: scaleNumber(13),
  },
});
