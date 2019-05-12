import {StyleSheet} from 'react-native';

const HEIGHT = 50;

export default StyleSheet.create({
    container: {
        width: 300,
        height: HEIGHT ,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: HEIGHT / 2,
        paddingHorizontal: HEIGHT / 2,
    },
    input: {
        flex: 1,
        color: 'white',
        fontSize: 16,
    },
});