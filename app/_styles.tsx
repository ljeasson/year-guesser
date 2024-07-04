import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'SpaceMono-Regular',
    },
  
    titleContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center",
    },
    buttonContainer: {
      flex: 2,
      flexDirection: 'column',
      marginVertical: 64,
      
    },
  
    titleText: {
      fontSize: 48,
      fontWeight: 'bold',
      color: 'red',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    
    
    title: {
      textAlign: 'center',
      marginVertical: 2,
    },
    button: {
      
    }
});
export default styles;