import { Text, TextStyle, StyleSheet } from 'react-native';

interface TextProps {
    children: String;
    style?: TextStyle;
}

const CustomText: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[ styles.textDefault, style ]}>{children}</Text>;
};

const styles = StyleSheet.create({
    textDefault: {
        fontFamily: "Avenir",
        color: "#333",
    },
});

export default CustomText;