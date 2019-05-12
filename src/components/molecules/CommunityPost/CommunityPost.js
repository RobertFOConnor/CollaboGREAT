import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './communityPost.style';

class CommunityPost extends Component {
    render() {
        const {text} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.profilePic} />
                <View style={styles.textContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.username}>Username</Text>
                        <Text style={styles.time}>5m</Text>
                    </View>
                <Text style={styles.body}>{text}</Text>
                </View>
            </View>
        );
    }
}

CommunityPost.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object,
};

export default CommunityPost;
