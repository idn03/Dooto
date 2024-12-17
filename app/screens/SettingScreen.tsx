import { StyleSheet, View, Text } from 'react-native';

const SettingScreen = () => {
    return (
        <View style={styles.background}>
            <Text>Hello, this is Setting Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#B4B4B4',
        justifyContent: 'center',
    },
});

export default SettingScreen;