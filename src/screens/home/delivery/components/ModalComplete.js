import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import TextCmp from '../../../../components/TextCmp';
import themes from '../../../../constants/themes';
import {scaleNumber} from '../../../../utils/scale';

const ModalComplete = ({ onOk, onNo }) => {
  return (
    <Modal backdropColor="rgba(0,0,0,0.35)" isVisible={true} animationIn="fadeIn" animationOut="fadeOut">
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <TextCmp semibold fontSize={22}>Delivery completed</TextCmp>
          </View>
          <View
            style={styles.listButton}>
            <Pressable onPress={onOk} style={styles.buttonOk}>
              <TextCmp color={themes.colors.white} fontSize={16} bold>
                Completed
              </TextCmp>
            </Pressable>
            <View style={styles.line} />
            <Pressable onPress={onNo} style={styles.buttonNo}>
              <TextCmp color="#333333" fontSize={16} bold>
                No
              </TextCmp>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComplete;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: scaleNumber(128),
    borderRadius: scaleNumber(8),
    justifyContent: 'center',
        alignItems: 'center',
    paddingVertical:scaleNumber(10)
  },
  wrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttonOk: {
    flex: 1,
    backgroundColor: themes.colors.base,
    paddingVertical: scaleNumber(10),
    paddingHorizontal: scaleNumber(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleNumber(4),
  },
  buttonNo: {
    flex: 1,
    paddingVertical: scaleNumber(10),
    paddingHorizontal: scaleNumber(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scaleNumber(1.5),
    borderColor: '#828282',
    borderRadius: scaleNumber(4),
  },
  line: {
    width: scaleNumber(11),
    },
    listButton: { flexDirection: 'row', paddingHorizontal: scaleNumber(20) },
  titleContainer:{flex:1, marginTop:scaleNumber(10)}
});
