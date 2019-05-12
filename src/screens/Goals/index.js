import {connect} from 'react-redux';
import Goals from './Goals';
import {addGoal, removeGoal, clearGoals} from "../../redux/actions/goalActions";

const mapStateToProps = state => ({
    goals: state.goal.goals,
});

const mapDispatchToProps = dispatch => ({
    addGoal: (goal) => dispatch(addGoal(goal)),
    removeGoal: (index) => dispatch(removeGoal(index)),
    clearGoals: () => dispatch(clearGoals()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Goals);