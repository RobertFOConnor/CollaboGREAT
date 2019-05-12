import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity, Animated, Text} from 'react-native';
import styles from './goals.style';
import GoalItem from './components/GoalItem';
import CreateGoal from './components/CreateGoal';
import Icon from 'react-native-vector-icons/FontAwesome';

class Goals extends Component {

    state = {
        startAnimation: new Animated.Value(0),
        showCreateGoal: false,
    };

    componentDidMount() {
        this.playAnimation();
    }

    playAnimation = () => {
        this.state.startAnimation.setValue(0);
        Animated.timing(this.state.startAnimation, {
            toValue: 8,
            duration: 1400,
            useNativeDriver: true,
        }).start();
    };

    submitGoal = (goal) => {
        this.props.addGoal(goal);
        this.setState({showCreateGoal: false});
        this.playAnimation();
    };

    renderItem = ({item, index}) =>
        <GoalItem
            item={item}
            index={index}
            animatedValue={this.state.startAnimation}
            onDelete={this.props.removeGoal}
        />;


    render() {
        const {goals} = this.props;
        const {showCreateGoal} = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <FlatList
                        contentContainerStyle={styles.listContainer}
                        renderItem={this.renderItem}
                        data={goals}
                    />
                </View>
                <View style={styles.header}>
                    <Icon name="arrow-left" size={20} color="#fff" onPress={() => this.props.navigation.goBack()}/>
                    <Icon name="ellipsis-v" size={20} color="#fff"/>
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => this.setState({showCreateGoal: !showCreateGoal})}
                >
                    <Icon name="plus" size={24} color="#fff"/>
                </TouchableOpacity>
                {goals.length === 0 && <Text style={styles.emptyText}>You have no goals in life.</Text>}
                {showCreateGoal && <CreateGoal submit={this.submitGoal}/>}
            </View>
        );
    }
}

export default Goals;