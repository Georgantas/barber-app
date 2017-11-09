
import { DrawerNavigator } from 'react-navigation';
import Main from '../screens/Main';

const RootDrawer = DrawerNavigator({
    Main: {
        screen: Main
    }
});

export default RootDrawer;
