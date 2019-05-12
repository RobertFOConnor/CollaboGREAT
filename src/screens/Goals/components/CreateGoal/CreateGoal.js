import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import styles from './createGoal.style';
import Button from '../../../../components/atoms/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

class CreateGoal extends Component {

    state = {text: ''};

    render() {
        return (
            <View style={styles.container}>
                <Icon name="edit" size={24} color="#888" style={styles.pen}/>
                <View>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={4}
                        placeholder={"Create a goal..."}
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Button style={styles.submitButton} text={"Add Goal"} onPress={() => this.props.submit(this.state.text)}/>
                </View>
            </View>
        );
    }
}

export default CreateGoal;