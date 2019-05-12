import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        paddingTop: 80,
        backgroundColor: 'white',
    },
    input: {
        width: 300,
        height: 120,
        backgroundColor: 'white',
        fontSize: 24,
    },
    pen: {
        marginTop: 10,
        marginHorizontal: 20,
    },
    submitButton: {
        backgroundColor: '#63a4ff',
    },
});
