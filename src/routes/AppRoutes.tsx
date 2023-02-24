import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import BestProducersRoutes from './BestProducersRoutes';
import ProducerRoute from './ProducerRoute';

import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';
const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#2a9f85',
          tabBarInactiveTintColor: '#c7c7c7',
          tabBarIcon: ({color}) => {
            let Icon = Home;
            if (route.name === 'Melhores Produtores') {
              Icon = Coracao;
            }

            return <Icon color={color} height={20} width={20} />;
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
        })}>
        <Tab.Screen name="Home" component={ProducerRoute} />
        <Tab.Screen
          name="Melhores Produtores"
          component={BestProducersRoutes}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabLabel: {},
});

export default AppRoutes;
