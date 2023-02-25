import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Star from './Star';

type props = {
  quantidadeOriginal: number;
  editavel?: boolean;
  grande?: boolean;
};

const Starts = ({
  quantidadeOriginal,
  editavel = false,
  grande = false,
}: props) => {
  const [quantidade, setQuantidade] = useState<Number>(quantidadeOriginal);

  const RenderStars = () => {
    const listStarts = [];
    for (let i = 0; i < 5; i++) {
      listStarts.push(
        <Star
          key={i}
          onPress={() => setQuantidade(i + 1)}
          disable={!editavel}
          preenchida={i < quantidade}
          isBig={grande}
        />,
      );
    }
    return listStarts;
  };

  return <View style={styles.stars}>{RenderStars()}</View>;
};

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
});

export default Starts;
