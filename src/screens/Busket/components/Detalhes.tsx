import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Texto from '../../../components/Texto';
import useTexts from '../../../hooks/useTexts';
import {IBuy} from '../../../interfaces/IBuy';
import {INav} from '../../../interfaces/INav';
import {IProdutor} from '../../../interfaces/IProdutor';

type Props = {
  nome: string;
  descricao: string;
  preco: string;
  produtor: IProdutor;
};

const Detalhes: React.FC<Props> = ({nome, descricao, preco, produtor}) => {
  const navigation = useNavigation<INav<IBuy>>();
  const {botaoComprar} = useTexts();

  return (
    <View style={{paddingHorizontal: 5}}>
      <Texto style={styles.name}>{nome}</Texto>
      <View style={styles.farm}>
        <Image source={produtor.imagem} style={styles.farmImage} />
        <Texto style={styles.farmName}>{produtor.nome}</Texto>
      </View>
      <Texto style={styles.description}>{descricao}</Texto>
      <Texto style={styles.price}>{preco}</Texto>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Pedido', {
            compra: {nome, timestamp: +new Date()},
          });
        }}>
        <Texto style={styles.textButton}>{botaoComprar}</Texto>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmName: {fontSize: 16, lineHeight: 26, marginLeft: 12, color: '#464646'},
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
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

export default Detalhes;
