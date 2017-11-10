
import { DrawerNavigator } from 'react-navigation';
import Home from '../screens/Home';

const RootDrawer = DrawerNavigator({
    Home: {
        screen: Home
    }
});

export default RootDrawer;
