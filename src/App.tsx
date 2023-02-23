import {SafeAreaView, StatusBar} from 'react-native';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <AppRoutes/>
    </SafeAreaView>
  );
};

export default App;
