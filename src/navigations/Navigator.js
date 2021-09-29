import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Profile from '../screens/Profile';

const stackNavigatorOptions = {
    headerShown : false
}

const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail},
    Profile:{screen:Profile},
},
{
    defaultNavigationOptions:stackNavigatorOptions
});

export default createAppContainer(AppNavigator)
