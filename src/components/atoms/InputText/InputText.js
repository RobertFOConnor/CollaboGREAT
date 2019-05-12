import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import styles from './inputText.style';
import PropTypes from "prop-types";

class InputText extends Component<Props> {

    render() {
        const { secureTextEntry, placeholder, style} = this.props;
        return (
            <View style={[styles.container, style]}>
                <TextInput selectionColor={'white'} placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input} />
            </View>
        );
    }
}

InputText.propTypes = {
    style: PropTypes.object,
    secureTextEntry: PropTypes.bool,
    placeholder: PropTypes.string,
};

export default InputText;
