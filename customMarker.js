import React from "react";
import { Marker } from "react-native-maps";
import Animated from "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import { useMarkerAnimation } from "./useMarkerAnimation";

export default function CustomMarker({
  id,
  selectedMarker,
  color,
  latitude,
  longitude,
  title,
}) {
  // const scale = useMarkerAnimation({ id, selectedMarker });

  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      title={title}
    >
      <View>
        <Animated.View
          style={[
            styles.marker,
            {
              backgroundColor: color,
              // transform: [{ scale: scale }],
            },
          ]}
        ></Animated.View>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerWrapper: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    height: 22,
    width: 22,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
  },
});
