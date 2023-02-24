import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import useTexts from '../../../hooks/useTexts';

import logo from '../../../assets/logo.png';

export const Topo: React.FC<{melhoresProdutores:Boolean}> = ({melhoresProdutores}) => {
  const texts = useTexts();

  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>
        {melhoresProdutores ? '' : texts.boasVindas}
      </Text>
      <Text style={styles.legend}>
        {melhoresProdutores
          ? texts.legendaMelhoresProdutores
          : texts.legenda}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legend: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3',
  },
});
