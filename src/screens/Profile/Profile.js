import React, {Component} from 'react';
import { View, FlatList } from 'react-native';
import styles from './profile.style';
import CommunityPost from '../../components/molecules/CommunityPost';

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}]}
                    renderItem={({item}) => <CommunityPost text={item.key} />}
                />
                </View>
                <View style={styles.coverPhoto} />
                <View style={styles.photo} />
            </View>
        );
    }
}

export default Profile;