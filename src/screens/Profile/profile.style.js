import {StyleSheet} from "react-native";

const COVER_PHOTO_HEIGHT = 200;
const PHOTO_SIZE = 100;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        marginTop: COVER_PHOTO_HEIGHT,
        backgroundColor: 'gray',
    },
    coverPhoto: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: COVER_PHOTO_HEIGHT,
        backgroundColor: 'blue',
    },
    photo: {
        position: 'absolute',
        top: COVER_PHOTO_HEIGHT-PHOTO_SIZE/2,
        width: PHOTO_SIZE,
        height: PHOTO_SIZE,
        borderRadius: PHOTO_SIZE / 2,
        backgroundColor: 'red',
    },
    name: {
        fontSize: 24,
    },
});
