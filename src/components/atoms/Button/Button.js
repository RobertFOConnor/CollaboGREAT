import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './button.style';

class Button extends Component<Props> {
    render() {
        const {text, style, textStyle, onPress} = this.props;

        return (
            <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
                <Text style={[styles.text, textStyle]}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    onPress: PropTypes.func,
};

export default Button;
