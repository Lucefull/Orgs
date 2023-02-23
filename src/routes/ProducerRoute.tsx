import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Produtor } from "../screens/Produtor";

const Stack = createNativeStackNavigator();

type Props = {
    MainComponent?: ()=>JSX.Element
}

const ProducerRoute: React.FC<Props> = ({MainComponent=Home} : Props) => {
    return <Stack.Navigator>
    <Stack.Screen name='HomeScreen' component={MainComponent}/>
        <Stack.Screen name='Produtor' component={Produtor} />
    </Stack.Navigator>
}

export default ProducerRoute;