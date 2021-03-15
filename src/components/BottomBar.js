import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icons from '../assets';
import themes from '../constants/themes';
import {scaleNumber} from '../utils/scale';
import TextCmp from './TextCmp';

const BottomName = [
  {
    id: 1,
    icon: Icons.Delivery,
    text: 'Delivery',
  },
  {
    id: 2,
    icon: Icons.Notification,
    text: 'Notification',
  },
  {
    id: 3,
    icon: Icons.History,
    text: 'History',
  },
  {
    id: 4,
    icon: Icons.Setting,
    text: 'Setting',
  },
];

const BottomBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bottom, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const bottom = BottomName[index];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={styles.button}>
            <Image
              source={bottom.icon}
              style={{tintColor: isFocused ? themes.colors.tabbarSelected : themes.colors.tabbarUnSelected}}
            />
            <TextCmp
              fontSize={10}
              style={[{color: isFocused ? themes.colors.tabbarSelected : themes.colors.tabbarUnSelected}, styles.text]}>
              {bottom.text}
            </TextCmp>
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  button: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  bottom: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    marginTop: 5,
  },
});
