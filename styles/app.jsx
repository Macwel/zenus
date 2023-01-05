import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loadText: {
        position: "absolute",
        top: "50%",
        left: "50%",
    },
   
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      width: "100%",
      justifyContent:"center",
      alignItems:"center",
      height: "100%"
      // ...StyleSheet.absoluteFillObject,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
    button: {
      position:"absolute",
      alignItems: 'center',
      bottom:"5%",
      width:"30%",
      height:"5%",
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 8,
      elevation: 3,
      backgroundColor: 'white',
    },
    marker: {
      height: 22,
      width: 22,
      borderRadius: 20,
      borderColor: 'white',
      borderWidth: 2,
    },
  });