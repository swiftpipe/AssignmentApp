import React from 'react';
import {StyleSheet} from 'react-native';
import Icons from '../../../../assets';
import MarkerView from './MarkerView';
import MapView, {Marker} from 'react-native-maps';
import {memo} from 'react';
const MapViewLocation = ({onPressItem}) => {
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: 10.762622,
        longitude: 106.660172,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        onPress={onPressItem}
        coordinate={{
          latitude: 10.7586,
          longitude: 106.67367,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MarkerView icon={Icons.StartMarker} color="#2F80ED" />
      </Marker>
      <Marker
        coordinate={{
          latitude: 10.784274,
          longitude: 106.678627,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MarkerView type={1} icon={Icons.Position} color="#2F80ED" />
      </Marker>
      <Marker
        coordinate={{
          latitude: 10.787884,
          longitude: 106.698402,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MarkerView icon={Icons.Rest} color="#EB5757" />
      </Marker>
    </MapView>
  );
};

export default memo(MapViewLocation);

const styles = StyleSheet.create({
  container: {flex: 1},
});
