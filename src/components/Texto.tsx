import { StyleSheet, Text } from 'react-native';

type Props = {
    children?: React.ReactNode;
    style?: TextStyle;
};

const Texto: React.FC<Props> = ({ children, style }: Props) => {
    let estilo;

    if (style?.fontWeight === 'bold') {
        estilo = styles.textBold;
    } else {
        estilo = styles.text;
    }

    return <Text style={[estilo, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'normal'
    },
    textBold: {
        fontWeight: 'bold'
    }
});

export default Texto;
