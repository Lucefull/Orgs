import {FlatList, View} from 'react-native';
import Texto from '../../components/Texto';
import Topo from '../../components/Topo';
import useTexts from '../../hooks/useTexts';
import {IBusket} from '../../interfaces/IBusket';
import { IDetail } from '../../interfaces/IDetail';
import {IItem} from '../../interfaces/IItem';
import {IProdutor} from '../../interfaces/IProdutor';
import Detalhes from './components/Detalhes';
import {Item} from './components/Item';

type Props = {
  detalhes: IDetail;
  itens: IItem[];
  //busket: IBusket;
  produtor: IProdutor;
};

const Busket: React.FC<Props> = ({detalhes, itens , produtor}:Props) => {
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
                <Texto style={{paddingHorizontal: 5}}>{texts?.tituloItens}</Texto> 
              </View>
            </>
          );
        }}
         style={{backgroundColor:'white'}}
      />
    </>
  );
};

export default Busket;
