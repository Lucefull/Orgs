import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import sucesso from '../../assets/sucesso.png';
import useTexts from '../../hooks/useTexts';
import {IBuy} from '../../interfaces/IBuy';

import VoltarSVG from '../../assets/voltar.svg';

const Pedido = () => {
  const route = useRoute();
  const texts = useTexts();
  const navigation = useNavigation();
  const [mensagemCompra, setMensagemCompra] = useState('');

  const routeParams = route.params as IBuy;

  const mensagemCompraText = texts.mensagemCompra;
  const nomeCompra = routeParams.compra?.nome;
  const timestamp = routeParams.compra?.timestamp;
  useEffect(() => {
    if (mensagemCompraText && nomeCompra)
      setMensagemCompra(mensagemCompraText.replace('$NOME', nomeCompra));
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBack}
          onPress={() => navigation.goBack()}>
          <VoltarSVG />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pedido feito com sucesso!</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={sucesso} />
        <View style={styles.texts}>
          <Text style={styles.title}>Parabéns!</Text>
          <Text style={styles.message}>{mensagemCompra}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.dispatch(StackActions.popToTop())}>
            <Text style={styles.textButton}>Voltar a Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonProducer]}
            onPress={() => {
              navigation.dispatch(StackActions.pop(2));
            }}>
            <Text style={[styles.textButton, styles.textButtonProducer]}>
              Voltar ao produtor
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 58,

    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  headerBack: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: 17,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#464646',
  },
  content: {
    zIndex: 0,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 360 / 351,
  },
  texts: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  message: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonProducer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  textButton: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  textButtonProducer: {
    color: '#464646',
  },
});

export default Pedido;
