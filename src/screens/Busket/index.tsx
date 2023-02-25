import {useRoute} from '@react-navigation/native';
import {FlatList, View} from 'react-native';
import Texto from '../../components/Texto';
import Topo from '../../components/Topo';
import useTexts from '../../hooks/useTexts';
import {IDetail} from '../../interfaces/IDetail';
import {IItem} from '../../interfaces/IItem';
import {IProdutor} from '../../interfaces/IProdutor';
import Detalhes from './components/Detalhes';
import {Item} from './components/Item';

type RouteParamsType = {
  detalhes: IDetail;
  itens: IItem[];
  produtor: IProdutor;
};

const Busket = () => {
  const route = useRoute();
  const {detalhes, itens, produtor} = route.params as RouteParamsType;
  const texts = useTexts();
  return (
    <>
      <FlatList
        data={itens}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo title={texts?.tituloItens} />
              <View>
                <Detalhes {...detalhes} produtor={produtor} />
                <Texto style={{paddingHorizontal: 5}}>
                  {texts?.tituloItens}
                </Texto>
              </View>
            </>
          );
        }}
        style={{backgroundColor: 'white'}}
      />
    </>
  );
};

export default Busket;
