import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import HomePage from './Home';
import LoginPage from './Login';
import RegisterPage from './Register';
import AddPage from './them';
import DetailsPage from './Details';


const TabNavigator = createMaterialTopTabNavigator({
  Home: {screen: HomePage},
  Details: DetailsPage,
});
const MainNavigator = createStackNavigator({
  Login: {screen: LoginPage},
  Register: {screen: RegisterPage},
  Home: {screen: TabNavigator},
  them: {screen: AddPage}
});

const App = createAppContainer(MainNavigator);

export default App;