import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Texto from '../../../components/Texto';
import {IProdutor} from '../../../interfaces/IProdutor';
import {IItem} from '../../../interfaces/IItem';
import {IDetail} from '../../../interfaces/IDetail';
import {INav} from '../../../interfaces/INav';

type Props = {
  detalhes: IDetail;
  itens: IItem[];
  produtor: IProdutor;
};

const Cesta: React.FC<Props> = ({detalhes, itens, produtor}) => {
  const navigation = useNavigation<INav<Props>>();
  const {nome, imagem, descricao, preco} = detalhes;

  return (
    <TouchableOpacity
      style={styles.cesta}
      onPress={() => {
        navigation.navigate('Cesta', {
          detalhes,
          itens,
          produtor,
        });
      }}>
      <View style={styles.conteudo}>
        <Image source={imagem} style={styles.imagem} />

        <View style={styles.textos}>
          <Texto style={styles.nome}>{nome}</Texto>
          <Texto style={styles.descricao}>{descricao}</Texto>
          <Texto style={styles.preco}>{preco}</Texto>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
  },
  conteudo: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
  },
  imagem: {
    width: 62,
    height: 62,
    borderRadius: 6,
  },
  textos: {
    flex: 1,
    marginLeft: 8,
  },
  nome: {
    color: '#464646',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 14,
    lineHeight: 22,
  },
  preco: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default Cesta;
