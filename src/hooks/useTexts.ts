import { ITexts } from './../interfaces/ITexts';
import { useState, useEffect } from 'react';
import { carregaTextos } from '../services/carregaDados';

export const useTexts = ()=>{
    const [texts, setTexts] = useState<ITexts>();
    
    
    useEffect(()=>{
        setTexts( carregaTextos());
    },[]);
    return texts;
}