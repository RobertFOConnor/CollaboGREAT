import {StyleSheet} from "react-native";

export const cardWidth = 230;
export const cardMargin = 30;
export const cardSpacing = cardWidth + cardMargin;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#223',
    },
    container2: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        overflow: 'hidden'
    },
    card: {
        borderRadius: 20,
        width: cardWidth,
        height: 360,
        backgroundColor: 'white',
        marginHorizontal: cardMargin / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text2: {
        position: 'absolute',
        fontSize: 30,
        color: 'white',
    },
});
