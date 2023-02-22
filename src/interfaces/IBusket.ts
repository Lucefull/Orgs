import {IItem} from './IItem';
import {ImageSourcePropType} from 'react-native/types';
import {IDetail} from './IDetail';

export interface IBusket {
  detalhes: IDetail;
  itens: IItem[];
}
