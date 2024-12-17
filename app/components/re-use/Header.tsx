import {View, StyleSheet, Image, Pressable } from 'react-native';
import {
    createStaticNavigation,
    NavigationProp,
    useNavigation,
} from '@react-navigation/native';

import Row from './Row';
import Icon from './Icon';
import CustomText from '../override/Text';
import { RootStackParamList } from '../../Router';

const Header = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View style={styles.header}>
            <Row style={styles.headerRow}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo} />
                <Row>
                    <Icon source={require('../../../assets/icons/notify.png')} style={ styles.icons }></Icon>
                    <Pressable onPress={() => navigation.navigate('Setting')}>
                        <Icon source={require('../../../assets/icons/setting-btn.png')} style={ styles.icons }></Icon>
                    </Pressable>
                </Row>
            </Row>
            <CustomText style={styles.headerDes}>A simple React To-do List App</CustomText>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 160,
        paddingHorizontal: 12,
        marginTop: 12
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
    },
    headerDes: {
        position: 'relative',
        bottom: 40,
        left: 20
    }
});

export default Header;