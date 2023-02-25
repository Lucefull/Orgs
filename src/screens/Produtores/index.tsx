import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useProdutores} from '../../hooks/useProdutores';
import useTexts from '../../hooks/useTexts';
import {IBuy} from '../../interfaces/IBuy';
import {INav} from '../../interfaces/INav';
import {IProdutor} from '../../interfaces/IProdutor';
import {Produtor} from './components/Produtor';
import {Topo} from './components/Topo';

const Produtores: React.FC<{melhoresProdutores: boolean}> = ({
  melhoresProdutores,
}) => {
  const [mensagemCompra, setMensagemCompra] = useState('');
  const [exibeMensagem, setExibeMensagem] = useState(false);
  const navigation = useNavigation<INav<IProdutor>>();
  const route = useRoute();
  const listaProdutores = useProdutores(melhoresProdutores);
  const texts = useTexts();

  const routeParams = route.params as IBuy;

  const nomeCompra = routeParams?.compra?.nome;
  const timestampComra = routeParams?.compra?.timestamp;
  const mensagemCompraText = texts.mensagemCompra;
  useEffect(() => {
    setExibeMensagem(!!nomeCompra);
    mensagemCompraText &&
      nomeCompra &&
      setMensagemCompra(mensagemCompraText.replace('$NOME', nomeCompra));
    let timeout = 0;

    if (nomeCompra) {
      timeout = setTimeout(() => {
        setExibeMensagem(false);
      }, 3000);
    }
    // texts.mensagemCompra?.replace('$NOME', routeParams.compra.nome),
    return () => clearTimeout(timeout);
  }, [timestampComra]);

  const topoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        {!!exibeMensagem && (
          <Text style={styles.buyMessage}>{mensagemCompra}</Text>
        )}
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
            navigation.navigate('Produtor', {...item});
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
  buyMessage: {
    color: '#464646',
    padding: 16,
    backgroundColor: '#EAF5F3',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Produtores;
