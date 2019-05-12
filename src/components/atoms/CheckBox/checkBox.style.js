import {StyleSheet} from 'react-native';

const BOX_SIZE = 30;

export default StyleSheet.create({
    container: {
        width: BOX_SIZE,
        height: BOX_SIZE,
        borderWidth: 1,
        borderRadius: BOX_SIZE / 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
    },
    box: {
        width: BOX_SIZE-10,
        height: BOX_SIZE-10,
        borderRadius: (BOX_SIZE-10) /2,
        backgroundColor: 'white',
    },
});