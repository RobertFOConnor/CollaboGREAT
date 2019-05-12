import {StyleSheet} from 'react-native';

const HEIGHT = 50;

export default StyleSheet.create({
    container: {
        width: 300,
        height: HEIGHT,
        backgroundColor: 'purple',
        borderRadius: HEIGHT / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
});