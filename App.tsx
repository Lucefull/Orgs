import { SafeAreaView, StatusBar } from "react-native";
import { useProdutores } from "./src/hooks/useProdutores"
import Busket from "./src/screens/Busket";

import Home from './src/screens/Home'

const App = () => {
  const produtores = useProdutores(false);

  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />

    {/* <Home melhoresProdutores={false} /> */}

    {produtores.length > 0 &&
      <Busket
        {...produtores[0].cestas[0]}
        {...produtores[0].cestas[0].detalhes}
        produtor={produtores[0]}
      />
    }
  </SafeAreaView>
}

export default App;