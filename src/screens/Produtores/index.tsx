import {useNavigation} from '@react-navigation/native';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useProdutores} from '../../hooks/useProdutores';
import useTexts from '../../hooks/useTexts';
import {Produtor} from './components/Produtor';
import {Topo} from './components/Topo';

const Produtores: React.FC<{melhoresProdutores: boolean}> = ({
  melhoresProdutores,
}) => {
  const navigation = useNavigation();

  const listaProdutores = useProdutores(melhoresProdutores);
  const texts = useTexts();

  const topoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        <Text style={styles.title}>{texts.tituloProdutor}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={listaProdutores}
      renderItem={({item}) => (
        <Produtor
          {...item}
          onPress={() => {
            navigation.navigate('Produtor',item);
          }}
        />
      )}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={topoLista}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});

export default Produtores;
