import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icons from '../../../../assets';
import TextCmp from '../../../../components/TextCmp';
import themes from '../../../../constants/themes';
import {scaleNumber} from '../../../../utils/scale';
import ButtonSwipe from './ButtonSwipe';

const PopupIncomingOrder = ({ onPressDecline, onAcceptOrder }) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Pressable onPress={onPressDecline} style={styles.buttonDecline}>
        <TextCmp>Decline ✕</TextCmp>
      </Pressable>
     
    <View style={[styles.container, {paddingBottom:insets.bottom}]}>
        <TextCmp semibold fontSize={22}>
          ASAP Delivery <TextCmp>•</TextCmp> 5 km
        </TextCmp>
        <TextCmp fontSize={14} color="#828282">
          3 item
        </TextCmp>
        <View style={styles.top10}>
          <View style={styles.line} />
          <View style={[styles.viewItem]}>
            <Image style={styles.icon} source={Icons.Restaurant} />
            <View>
              <TextCmp fontSize={14} color="#828282">
                Restaurant’s name
              </TextCmp>
              <TextCmp fontSize={16} color="#333333">
                123 streename sth somewhere
              </TextCmp>
            </View>
          </View>
          <View
            style={[
              styles.viewItem,
              {
                marginTop: scaleNumber(20),
              },
            ]}>
            <Image style={styles.icon} source={Icons.Customer} />
            <View>
              <TextCmp fontSize={14} color="#828282">
                Customer name
              </TextCmp>
              <TextCmp fontSize={16} color="#333333">
                123 streename sth somewhere
              </TextCmp>
            </View>
          </View>
        </View>
        <View style={styles.top10}>
          <ButtonSwipe
            onSwipeSuccess={onAcceptOrder}
            color={themes.colors.base}
            title="Swipe to accept order"
            renderRight={() => {
              return (
                <TextCmp
                  semibold
                  style={styles.time}
                  color={themes.colors.white}>
                  15s
                </TextCmp>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default PopupIncomingOrder;

const styles = StyleSheet.create({
  container: {
    minHeight: scaleNumber(252),
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
  icon: {
    marginRight: scaleNumber(10),
    width: scaleNumber(16),
    height: scaleNumber(16),
  },
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: scaleNumber(55),
    width: 2,
    left: scaleNumber(6),
    top: scaleNumber(20),
    backgroundColor: '#BDBDBD',
    position: 'absolute',
  },
  time: {
    position: 'absolute',
    zIndex: 0,
    alignSelf: 'flex-end',
    right: 10,
  },
  top10: {marginTop: scaleNumber(10)},
  buttonDecline: {
    position: 'absolute',
    top: scaleNumber(50),
    backgroundColor: themes.colors.white,
    paddingVertical: scaleNumber(8),
    paddingHorizontal: scaleNumber(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: scaleNumber(18),
    left: scaleNumber(9),
  },
});
