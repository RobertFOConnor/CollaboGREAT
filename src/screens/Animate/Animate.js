import React, {Component, Fragment} from 'react';
import {View, Animated, Dimensions, TouchableOpacity, Text} from 'react-native';
import Interactable from 'react-native-interactable';
import ExpandedCard from './ExpandedCard';
import {MARIO, LUIGI, YOSHI} from "../../assets/images";
import styles, {cardSpacing} from './animate.style';

class Animate extends Component {

    circleProgress;

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
                style={{flexDirection: 'row', position: 'absolute', left: 0}}
                horizontalOnly={true}
                animatedValueX={animatedX}
                snapPoints={snapPoints}
                animatedNativeDriver={true}
                onSnap={() => {

                }}>
                {/*{this.cards.map((card, index) => <ExpandedCard animatedValue={animatedX} index={index}/>)}*/}
                <ExpandedCard animatedValue={animatedX} index={0}/>
            </Interactable.View>
        );
    };

    setNewval = () => {
        const newVal = Math.floor(Math.random() * 100) + 1;
        this.setState({progress: newVal});
        this.circleProgress.animateTo(newVal);
        this.circleProgress2.animateTo(newVal);
        this.circleProgress3.animateTo(newVal);
    };

    render() {

        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                </View>
                {/*<View style={{height: 40}}/>*/}
                {/*<CircleProgress ref={ref => this.circleProgress2 = ref} size={120} width={20} color={'yellow'}*/}
                {/*                backgroundColor={'orange'}/>*/}
                {/*<View style={{height: 40}}/>*/}
                {/*<CircleProgress ref={ref => this.circleProgress3 = ref} size={100} width={30} color={'lightgreen'}*/}
                {/*                backgroundColor={'green'}/>*/}
                {/*<View style={{height: 40}}/>*/}
                {/*<Text onPress={this.setNewval}*/}
                {/*      style={{padding: 20, fontSize: 40, color: 'white'}}>{this.state.progress}%</Text>*/}
            </View>
        );
    }
}

export default Animate;