// @flow
import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Topo from '../../components/Topo';
import useTexts from '../../hooks/useTexts';
import {IProdutor} from '../../interfaces/IProdutor';
import Cesta from './componentes/Cesta';

import topo from '../../assets/produtores/topo.png';

const Produtor = () => {
  const route = useRoute();
  const produtor = route.params as IProdutor;
  const {nome, imagem, cestas} = produtor;
  const {tituloProdutor, tituloCestas} = useTexts();

  const HeaderList = () => {
    return (
      <>
        <Topo title={tituloProdutor} image={topo} height={150} />
        <View style={styles.conteudo}>
          <View style={styles.logo}>
            <Image source={imagem} style={styles.produtorImage} />
            <Text style={styles.produtor}>{nome}</Text>
          </View>
          <Text style={styles.cestas}>{tituloCestas}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={HeaderList}
      data={cestas}
      renderItem={({item}) => <Cesta {...item} produtor={produtor} />}
    />
  );
};

const styles = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  conteudo: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  produtorImage: {
    width: 62,
    height: 62,

    marginTop: -23,

    borderRadius: 6,
  },
  produtor: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  cestas: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});

export default Produtor;
