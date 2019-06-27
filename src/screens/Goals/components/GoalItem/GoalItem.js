import React, {Component} from 'react';
import {Text, Animated, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './goalItem.style';
import CheckBox from '../../../../components/atoms/CheckBox';
import Icon from 'react-native-vector-icons/FontAwesome';

class GoalItem extends Component {

    state = {
        isCompleted: false,
    };

    interpolatePosX = (index) => this.props.animatedValue.interpolate({
        inputRange: [index, index + 1],
        outputRange: [400, 0],
        extrapolate: "clamp",
    });

    render() {
        const {item, index, onDelete} = this.props;
        const {isCompleted} = this.state;
        const textDecorationLine = isCompleted ? 'line-through' : 'none';
        const translateX = index < 8 ? this.interpolatePosX(index) : 0;

        return (
            <Animated.View style={[styles.container, {transform: [{translateX}]}]}>
                <CheckBox onPress={() => this.setState({isCompleted: !isCompleted})} isChecked={isCompleted}/>
                <Text style={[styles.text, {textDecorationLine}]}>{item.text}</Text>
                <TouchableOpacity style={styles.delete} onPress={() => onDelete(item.key)}>
                    <Icon name="trash" size={24} color="#fff"/>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

GoalItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    onDelete: PropTypes.func,
};

export default GoalItem;