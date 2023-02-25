import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import star from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

type Props = {
  onPress: () => void;
  disable: boolean;
  preenchida: boolean;
  isBig: boolean;
};

const Star = ({onPress, disable, preenchida, isBig}: Props) => {
  const styles = stylesFunction(isBig);
  const getImage = () => {
    if (preenchida) {
      return star;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disable}>
      <Image style={styles.star} source={getImage()} />
    </TouchableOpacity>
  );
};

const stylesFunction = (grande: boolean) =>
  StyleSheet.create({
    star: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

export default Star;
