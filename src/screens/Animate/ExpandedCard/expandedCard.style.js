import {StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get('window').width;

export const cardWidth = 230;
export const cardMargin = 30;
export const cardSpacing = cardWidth + cardMargin;

export default StyleSheet.create({
    container: {
        width: cardWidth,
        height: 400,
        marginHorizontal: cardMargin / 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    card: {
        borderRadius: 20,
        width: cardWidth,
        height: 360,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
    },
    button: {
        width: 100,
        height: 35,
        backgroundColor: '#88f',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    image: {
        position: 'absolute',
        top: 0,
        width: 100,
        height: 150,
    },
});
