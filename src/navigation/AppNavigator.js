import {createStackNavigator} from "react-navigation";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Goals from "../screens/Goals";
import Animate from "../screens/Animate";

export default createStackNavigator(
    {
        Profile,
        Login,
        Goals,
        Animate
    },
    {
        initialRouteName: "Animate",
        defaultNavigationOptions: {
            header: null,
        },
    }
);