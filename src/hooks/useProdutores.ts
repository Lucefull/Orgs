import { IProducersData } from './../interfaces/IProducersData';
import {IProdutor} from './../interfaces/IProdutor';
import {carregaProdutores} from './../services/carregaDados';
import {useEffect, useState} from 'react';

export const useProdutores = (bestProducers: boolean) => {
  const [listaProdutores, setListaProdutores] = useState<IProdutor[]>([]);
  useEffect(() => {
    const retorno = carregaProdutores();
    retorno.lista.sort((a, b) => a.distancia - b.distancia);
    setListaProdutores(retorno.lista);
  }, []);

  return !bestProducers
    ? listaProdutores
    : listaProdutores.filter(e => e.estrelas > 3);
};
