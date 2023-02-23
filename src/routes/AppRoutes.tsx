import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MelhoresProdutores from '../screens/BestProducers';
import BestProducersRoutes from './BestProducersRoutes';
import ProducerRoute from './ProducerRoute';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProducerRoute} />
        <Tab.Screen name="Melhores Produtores" component={BestProducersRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
};

export default AppRoutes;
