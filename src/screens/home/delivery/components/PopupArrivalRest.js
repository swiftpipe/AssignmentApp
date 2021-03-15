import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icons from '../../../../assets';
import themes from '../../../../constants/themes';
import {scaleNumber} from '../../../../utils/scale';
import ButtonImage from './ButtonImage';
import ButtonSwipe from './ButtonSwipe';
import HeaderBar from './HeaderBar';
import PositionDetail from './PositionDetail';

const PopupArrivalRest = ({onArrialRest, onBack}) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.header, {paddingTop: insets.top}]}>
        <HeaderBar onBack={onBack} />
        <PositionDetail text="Store name" icon={Icons.Restaurant} />
      </View>
      <View style={[styles.container, {paddingBottom: insets.bottom}]}>
        <View style={{flexDirection: 'row'}}>
          <ButtonImage
            style={styles.button}
            text="Order detail"
            icon={Icons.Order}
          />
          <ButtonImage style={styles.button} text="Chat" icon={Icons.Chat} />
          <ButtonImage style={styles.button} text="Call" icon={Icons.Call} />
          <ButtonImage
            style={styles.button}
            text="Report issue"
            icon={Icons.Report}
          />
        </View>
        <View style={styles.top10}>
          <ButtonSwipe
            color={'#4F4F4F'}
            title="Swipe after arrival"
            onSwipeSuccess={onArrialRest}
          />
        </View>
      </View>
    </>
  );
};

export default PopupArrivalRest;

const styles = StyleSheet.create({
  container: {
    minHeight: scaleNumber(120),
    backgroundColor: themes.colors.white,
    padding: scaleNumber(16),
    borderTopLeftRadius: scaleNumber(8),
    borderTopRightRadius: scaleNumber(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    flex: 1,
  },
  top10: {marginTop: scaleNumber(10)},
  header: {
    position: 'absolute',
    top: 0,
    backgroundColor: themes.colors.white,

    width: '100%',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
});
