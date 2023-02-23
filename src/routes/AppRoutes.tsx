import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MelhoresProdutores from '../screens/BestProducers';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
};

export default AppRoutes;
