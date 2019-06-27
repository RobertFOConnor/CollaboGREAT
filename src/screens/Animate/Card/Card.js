import React, {Component} from 'react';
import {View, Animated} from "react-native";
import styles from './card.style';
import {contentOpacity, contentScale, translateY} from "./card.animation";
import Button from '../../../components/atoms/Button';

class Card extends Component {

    state = {
        expanded: false,
        expandAnimation: new Animated.Value(0),
    };

    render() {

        const {animatedValue, data, index} = this.props;
        const scaleStyle = {
            transform: [{scale: contentScale(animatedValue, index)}]
        };

        return (
            <Animated.View key={data.key}
                           style={[styles.container, {transform: [{translateY: translateY(animatedValue, index)}]}]}>
                <View style={styles.card}>
                    <Animated.Text
                        style={[
                            styles.title,
                            {opacity: contentOpacity(animatedValue, index)}]}>
                        {data.name}
                    </Animated.Text>
                    <Animated.Text
                        style={[
                            styles.description,
                            {opacity: contentOpacity(animatedValue, index)}]}>
                        Here is a bunch of text about the character.
                    </Animated.Text>
                    <Animated.View style={[styles.buttonContainer, scaleStyle]}>
                        <Button style={styles.button} text={"View"} textStyle={styles.buttonText}/>
                    </Animated.View>
                </View>
                <Animated.Image style={[styles.image, scaleStyle]} source={data.image} resizeMode="contain"/>
            </Animated.View>
        );
    }
}

export default Card;