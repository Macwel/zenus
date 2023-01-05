import React from "react";
import MapView, { Circle, Marker } from "react-native-maps";
import {
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import CustomMarker from "./customMarker";
import { defaultDelta } from "./const";
import { MARKERS_DATA } from "./markersData";
import styles from "./styles/app";
import Animated from "react-native-reanimated";

import * as Location from "expo-location";

export default function App(props) {
  const [load, setLoad] = React.useState(true);

  const [pin, setPin] = React.useState({
    latitude: null,
    longitude: null,
  });

  const mapRef = React.useRef(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log(location);
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLoad(false);
    })();
  }, []);

  const goToHome = () => {
    mapRef.current.animateToRegion(
      {
        ...pin,
        ...defaultDelta,
      },
      2 * 300
    );
  };
  const { onPress, title = "Click me" } = props;
  return (
    <View style={styles.container}>
      {load ? (
        <Text style={styles.loadText}>Loading...</Text>
      ) : (
        <>
          <MapView
            mapType="standart"
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              ...pin,
              ...defaultDelta,
            }}
            showsUserLocation={true}
            userInterfaceStyle="dark"
            // zoomTapEnabled={true}
            // tintColor='red'
            onUserLocationChange={(e) => {
              if (
                e.nativeEvent.coordinate.latitude !== undefined ||
                e.nativeEvent.coordinate.longitude !== undefined
              ) {
                console.log("onUserLocationChange", e.nativeEvent.coordinate);
                setPin({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                });
              } else {
                console.log(e.nativeEvent.coordinate);
                console.log("onUserLocationChange pass coordinate");
              }
            }}
            // onRegionChangeComplete={(pin) => setPin(pin)}
          >
            {/* <Marker pinColor="green" image={require("./svg/work4.png")} coordinate={homeSandr} title='Дом Сандра' /> */}
            {/* <Marker pinColor="blue" style={styles.marker} image={require("./svg/work4.png")} coordinate={homeIlya}  title='Дом Ильи' /> */}

            {MARKERS_DATA.map((marker) => (
              <CustomMarker
                key={marker.id}
                id={marker.id}
                selectedMarker={null}
                color={marker.color}
                latitude={marker.latitude}
                longitude={marker.longitude}
                title={marker.title}
              ></CustomMarker>
            ))}
          </MapView>
          {/* <Text style={styles.text} onPress={goToHome}>Where i?</Text> */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={goToHome}
          >
            <Text style={styles.text}>{title}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
