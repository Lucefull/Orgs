import {useMemo} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Starts from '../../../components/Stars';

type Props = {
  nome: string;
  imagem: ImageSourcePropType;
  distancia: number;
  estrelas: number;
  onPress: () => void;
};

const distanceInMeters = (distance: number) => `${distance}m`;

export const Produtor: React.FC<Props> = ({
  nome,
  imagem,
  distancia,
  estrelas,
  onPress,
}: Props) => {
  const distanceText = useMemo(() => distanceInMeters(distancia), [distancia]);
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.image} />
      <View style={styles.information}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Starts quantidadeOriginal={estrelas} />
        </View>
        <Text style={styles.distance}>{distanceText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 6,
    flexDirection: 'row',

    //Android
    elevation: 4,

    //IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    color:'#000000'
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
    color:'#000000'
  },
});
