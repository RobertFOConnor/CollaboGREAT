import React, {Component} from 'react';
import {View, Animated, Text, Dimensions, UIManager, LayoutAnimation} from "react-native";
import styles, {cardSpacing, cardWidth} from './expandedCard.style';
import {translateY} from "../Card/card.animation";

class ExpandedCard extends Component {

    state = {
        animatedVal: new Animated.Value(1),
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        expanded: false,
    };

    getPosX = () => this.state.animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: this.state.expanded ? [0, -20] : [0, -20],
        extrapolate: "clamp",
    });

    animDuration = 600;

    startAnim = () => {
        this.state.animatedVal.setValue(0);
        this.setState({expanded: !this.state.expanded}, () =>
            Animated.timing(this.state.animatedVal, {
                toValue: 1,
                duration: this.animDuration,
                useNativeDriver: true,
            }).start());

        const animType = {type: LayoutAnimation.Types.easeInEaseOut};
        const myCustomAnimationConfig = {
            duration: this.animDuration,
            update: animType,
            create: animType,
            delete: animType
        };

        LayoutAnimation.configureNext(myCustomAnimationConfig);
    };

    render() {
        const {width, height, expanded} = this.state;
        const {animatedValue, index} = this.props;

        return (
            <Animated.View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: 600,
            }}>
                <View style={{
                    width: expanded ? width : cardWidth,
                    height: expanded ? 600 : 360,
                    bottom: expanded ? 0 : 100,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}/>
                <Animated.Text style={{position: 'absolute', top: 60, transform: [{translateX: this.getPosX()}]}}
                               onPress={this.startAnim}>Press here</Animated.Text>
            </Animated.View>
        );
    }
}

export default ExpandedCard;