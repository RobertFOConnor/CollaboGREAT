import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        marginBottom: 5,
        backgroundColor: 'white',
    },
    textContainer: {
        marginLeft: 20,
    },
    headerContainer: {
        flexDirection: 'row',
    },
    username: {
        fontSize: 16,
    },
    time: {
        fontSize: 16,
        color: 'gray',
        marginLeft: 15,
    },
    body: {
        fontSize: 14,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
    },
});