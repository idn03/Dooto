import {View, StyleSheet, Image } from 'react-native';
import Row from './Row';
import Icon from './Icon';

const Header = () => {
    return <View style={styles.header}>
    <Row style={styles.headerRow}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Row>
            <Icon source={require('../../assets/icons/notify.png')} style={ styles.icons }></Icon>
            <Icon source={require('../../assets/icons/setting-btn.png')} style={ styles.icons }></Icon>
        </Row>
    </Row>
</View>
}

const styles = StyleSheet.create({
    header: {
        height: 160,
        paddingHorizontal: 12,
    },
    headerRow: {
        flex: 1,
        justifyContent: "space-between",
    },
    logo: {
        height: 60,
        width: 128,
    },
    icons: {
        marginTop: 18,
        marginHorizontal: 10,
    }
});

export default Header;