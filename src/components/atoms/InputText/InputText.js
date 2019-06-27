import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import styles from './inputText.style';
import PropTypes from "prop-types";

class InputText extends Component<Props> {

    render() {
        const {secureTextEntry, style} = this.props;
        return (
            <View style={[styles.container, style]}>
                <TextInput {...this.props} selectionColor={'white'} secureTextEntry={secureTextEntry}
                           style={styles.input}/>
            </View>
        );
    }
}

InputText.propTypes = {
    style: PropTypes.object,
    secureTextEntry: PropTypes.bool,
};

export default InputText;
