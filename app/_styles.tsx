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
    questionContainer: {
        flex: 2,
        flexDirection: 'column',
        marginVertical: 32,
    },
  
    titleText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'red',
    },
    buttonText: {
        textAlign: 'center',
        marginTop: 2,
        marginBottom: 18,
        fontSize: 18,
        fontWeight: 'bold',
    },
    tutorialText: {
        textAlign: 'center',
        marginBottom: 18,
        fontSize: 24,
        fontWeight: 'bold',
    },
    questionText: {
        textAlign: 'left',
        marginTop: 2,
        marginBottom: 18,
        marginLeft: 32,
        fontSize: 24,
        fontWeight: 'bold',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default styles;