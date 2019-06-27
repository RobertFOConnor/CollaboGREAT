import {StyleSheet} from "react-native";
import themes from './goals.theme';

const HEADER_HEIGHT = 100;
const ADD_BUTTON_SIZE = 64;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingHorizontal: 20,
        left: 0,
        right: 0,
        top: 0,
        height: HEADER_HEIGHT,
        backgroundColor: themes.headerColor,
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: themes.backgroundColor,
    },
    listContainer: {
        paddingTop: 150
    },
    addButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: HEADER_HEIGHT - ADD_BUTTON_SIZE / 2,
        width: ADD_BUTTON_SIZE,
        height: ADD_BUTTON_SIZE,
        borderRadius: ADD_BUTTON_SIZE / 2,
        backgroundColor: themes.addButtonColor,
    },
    emptyText: {
        position: 'absolute',
        fontSize: 16,
        color: 'gray',
    },
});
