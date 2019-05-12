import {StyleSheet} from "react-native";
import themes from '../../goals.theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        marginBottom: 10,
        backgroundColor: themes.itemColor,
        marginLeft: 20,
        paddingHorizontal: 30,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    text: {
        color: themes.itemTextColor,
        marginLeft: 20,
        fontSize: 20,
    },
    delete: {
        position: 'absolute',
        right: 30,
    },
});
