import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import Icons from '../../../../assets';
import themes from '../../../../constants/themes';
import {scaleNumber} from '../../../../utils/scale';

const ButtonSwipe = ({title,shouldResetAfterSuccess, renderRight, color = themes.colors.base, onSwipeSuccess}) => {
  return (
    <SwipeButton
      thumbIconImageSource={Icons.Swipe}
      onSwipeStart={() => console.log('Swipe started!')}
      onSwipeFail={() => console.log('Incomplete swipe!')}
      onSwipeSuccess={onSwipeSuccess}
      railBackgroundColor={color}
      shouldResetAfterSuccess={true}
      thumbIconBorderColor={color}
      railFillBorderColor={color}
      thumbIconStyles={{borderRadius: 0}}
      thumbIconBackgroundColor={color}
      title={title}
      railFillBackgroundColor={color}
      containerStyles={{borderWidth: 0, borderRadius: scaleNumber(4)}}
      titleColor={themes.colors.white}
      titleFontSize={scaleNumber(14)}
      titleStyles={styles.titleStyles}
      renderRight={renderRight}
    />
  );
};

export default ButtonSwipe;

const styles = StyleSheet.create({
  titleStyles: {
    fontFamily: themes.fonts.semibold,
    alignSelf: 'flex-start',
    left: 60,
  },
});
