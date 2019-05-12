import {createStackNavigator} from "react-navigation";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Goals from "../screens/Goals";

export default createStackNavigator(
    {
        Profile,
        Login,
        Goals
    },
    {
        initialRouteName: "Login",
        defaultNavigationOptions: {
            header: null,
        },
    }
);