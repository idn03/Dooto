import { View, StyleSheet, ViewStyle } from 'react-native';

const Divider = () => {
    return (
        <View style={styles.divider}></View>
    );
}

const styles = StyleSheet.create({
    divider: {
        height: 5,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.3)",
        marginHorizontal: 40,
    }
});

export default Divider;