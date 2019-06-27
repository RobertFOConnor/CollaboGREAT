import React, {Component} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import Interactable from 'react-native-interactable';
import Card from './Card';
import {MARIO, LUIGI, YOSHI} from "../../assets/images";
import styles, {cardSpacing} from './animate.style';

class Animate extends Component {

    cards = [
        {key: 'a', name: "Mario", image: MARIO},
        {key: 'b', name: "Luigi", image: LUIGI},
        {key: 'c', name: "Yoshi", image: YOSHI}
    ];

    state = {
        animatedVal: new Animated.Value(0),
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        animatedX: new Animated.Value(0),
        progress: 0,
    };

    renderCards = () => {
        const {width, animatedX} = this.state;
        const leftPadding = (width - cardSpacing) / 2;
        const snapPoints = this.cards.map((card, index) => ({x: -cardSpacing * index}));

        return (
            <Interactable.View
                style={{flexDirection: 'row', position: 'absolute', left: leftPadding}}
                horizontalOnly={true}
                animatedValueX={animatedX}
                snapPoints={snapPoints}
                animatedNativeDriver={true}
                onSnap={() => {

                }}>
                {this.cards.map((card, index) => <Card data={card} animatedValue={animatedX} index={index}/>)}
            </Interactable.View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderCards()}
            </View>
        );
    }
}

export default Animate;