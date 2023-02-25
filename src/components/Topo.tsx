import {Component, ReactNode} from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import topo from '../assets/topo.png';
import Gradiente from '../assets/gradiente.svg';
import VoltarSVG from '../assets/voltar.svg';
import Texto from './Texto';
import {useNavigation} from '@react-navigation/native';
import {INav} from '../interfaces/INav';
import {IProdutor} from '../interfaces/IProdutor';

const width = Dimensions.get('screen').width;
const HEIGHT_DEFAULT = 270;

type Props = {
  title?: string;
  image?: ImageSourcePropType;
  height?: number;
};

const Topo: React.FC<Props> = ({
  title,
  image = topo,
  height = HEIGHT_DEFAULT,
}: Props) => {
  const navigation = useNavigation();
  const styles = stylesFunction(height);
  return (
    <>
      <Image source={image} style={styles.topo} />
      <Gradiente
        width={width}
        height={(130 / 360) * width}
        style={styles.gradiente}
      />
      <Texto style={styles.title}>{title}</Texto>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backButton}>
        <VoltarSVG color="white" style={styles.back} />
      </TouchableOpacity>
    </>
  );
};

const stylesFunction = (height: number) =>
  StyleSheet.create({
    topo: {
      width: '100%',
      height: height,
    },
    gradiente: {
      position: 'absolute',
    },
    title: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    back: {
      height: 24,
      width: 24,
    },
    backButton: {
      position: 'absolute',
      padding: 17,
    },
  });

export default Topo;
