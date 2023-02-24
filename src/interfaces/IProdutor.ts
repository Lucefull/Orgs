import {IBusket} from './IBusket';
import {ImageSourcePropType} from 'react-native/types';

export interface IProdutor {
  nome: string;
  imagem: ImageSourcePropType;
  distancia: number;
  estrelas: number;
  cestas: IBusket[];
}
