import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-svg';
import sucesso from '../../assets/sucesso.png';
import Texto from '../../components/Texto';
import Topo from '../../components/Topo';
import useTexts from '../../hooks/useTexts';
import {IBuy} from '../../interfaces/IBuy';

const Pedido = () => {
  const route = useRoute();
  const texts = useTexts();

  const [mensagemCompra, setMensagemCompra] = useState('');

  const routeParams = route.params as IBuy;

  const mensagemCompraText = texts.mensagemCompra;
  const nomeCompra = routeParams.compra?.nome;
  const timestamp = routeParams.compra?.timestamp;
  useEffect(() => {
    mensagemCompraText &&
      nomeCompra &&
      setMensagemCompra(mensagemCompraText.replace('$NOME', nomeCompra));
  }, [nomeCompra, timestamp]);

  return (
    <>
      {/* <Image style={styles.image} source={sucesso} /> */}
      <View style={styles.content}>
        <Texto style={styles.textColor}>Parabéns!</Texto>
        <Texto style={styles.textColor}>{mensagemCompra}</Texto>
        <TouchableOpacity
          style={[styles.buttonGreen, {backgroundColor: '#2a9f85'}]}>
          <Texto style={styles.textButton}>Voltar a Home</Texto>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen}>
          <Texto>Voltar ao produtor</Texto>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
  },
  image: {},
  textMessage: {
    color: '#A3A3A3',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  buttonGreen: {
    marginTop: 16,
    borderColor: '#ECECEC',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});

export default Pedido;
