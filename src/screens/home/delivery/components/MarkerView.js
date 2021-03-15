import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {scaleNumber} from '../../../../utils/scale';

const MarkerView = ({color, icon, type}) => {
  if (type == 1) {
    return (
      <View>
        
        <View style={styles.dotBound}>
          <Image  source={icon} />
        </View>
      </View>
    );
  }
  return (
    <View>
      <Image style={styles.marker} source={icon} />
      <View style={styles.dotBound}>
        <View style={[styles.dotAround, {borderColor: color}]}>
          <View style={[styles.dotCenter, {backgroundColor: color}]} />
        </View>
      </View>
    </View>
  );
};

export default MarkerView;

const styles = StyleSheet.create({
  dotCenter: {
    width: scaleNumber(8),
    height: scaleNumber(8),
    backgroundColor: 'blue',
    borderRadius: scaleNumber(8),
  },
  dotAround: {
    width: scaleNumber(18),
    height: scaleNumber(18),
    borderWidth: scaleNumber(1.5),
    borderColor: 'blue',
    borderRadius: scaleNumber(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotBound: {
    width: scaleNumber(44),
    height: scaleNumber(44),
    borderWidth: scaleNumber(0.5),
    borderColor: 'rgba(0,172,193,0.5)',
    borderRadius: scaleNumber(44),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,172,193,0.15)',
  },
  marker: {
    position: 'absolute',
    alignSelf: 'center',
    top: -scaleNumber(10),
    zIndex: 99999,
  },
});
