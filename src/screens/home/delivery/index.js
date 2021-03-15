import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PopupIncomingOrder from './components/PopupIncomingOrder';
import {useState} from 'react';
import PopupArrivalRest from './components/PopupArrivalRest';
import PopupDeliveryToUser from './components/PopupDeliveryToUser';
import MapViewLocation from './components/MapViewLocation';
import ModalComplete from './components/ModalComplete';

const DeliveryScreen = ({navigation, route}) => {
  const [step, setStep] = useState(0);
  const [isDone, setDone] = useState(false);
  const onPressItem = () => {
    navigation.setOptions({tabBarVisible: false});

    setStep(1);
  };

  const onPressDecline = () => {
    setStep(0);
    navigation.setOptions({tabBarVisible: true});
  };

  const onAcceptOrder = () => {
    setStep(2);
  };

  const onArrialRest = () => {
    setStep(3);
  };

  const onBack = () => {
    if (step > 1) {
      setStep((t) => t - 1);
    }
  };

  const onDone = () => {
    setDone(true);
  };

  const onOk = () => {
    setStep(0);
    setDone(false);
    navigation.setOptions({tabBarVisible: true});
  };

  const onNo = () => {
    setDone(false);
  }

  return (
    <View style={{flex: 1}}>
      <MapViewLocation onPressItem={onPressItem} />
      {step == 1 && (
        <PopupIncomingOrder
          onAcceptOrder={onAcceptOrder}
          onPressDecline={onPressDecline}
        />
      )}
      {step == 2 && (
        <PopupArrivalRest onBack={onBack} onArrialRest={onArrialRest} />
      )}
      {step == 3 && <PopupDeliveryToUser onDone={onDone} onBack={onBack} />}

      {isDone && <ModalComplete onOk={onOk} onNo={onNo} />}
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
