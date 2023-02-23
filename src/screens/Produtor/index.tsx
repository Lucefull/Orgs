// @flow 
import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Text } from 'react-native';
type Props = {
    
};
export const Produtor = (props: Props) => {
    const route = useRoute();
    console.log(route.params);
    return <Text>Produtor</Text>
};