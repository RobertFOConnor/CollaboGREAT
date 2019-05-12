import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './checkBox.style';

class CheckBox extends Component {

    render() {
        const {style, onPress, isChecked} = this.props;

        return (
            <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
                {isChecked && <View style={styles.box} />}
            </TouchableOpacity>
        );
    }
}

CheckBox.propTypes = {
    style: PropTypes.object,
    isChecked: PropTypes.bool,
    onPress: PropTypes.func,
};

export default CheckBox;
