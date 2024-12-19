import { StyleSheet, View, Image, Pressable } from 'react-native';
import {
    NavigationProp,
    useNavigation,
} from '@react-navigation/native';
import { RootStackParamList } from '../Router';
import { CustomText, Icon } from '../components';
import DootoImgs from '../../assets/assets';

const SettingScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View style={ styles.background }>
            <Pressable style={ styles.backHomeBtn } onPress={() => navigation.navigate('Home')}>
                < Icon source={DootoImgs.icons.home} />
            </Pressable>
            <View style={ styles.setCenter }>
                < Image style={ styles.settingIcon } source={DootoImgs.icons.setting} />
                <CustomText style={ styles.title }>SETTING</CustomText>
            </View>
            <View style={{marginHorizontal: 60}}>
                <CustomText style={{marginTop: 40}}>This is Setting Screen!</CustomText>
                <CustomText style={{marginTop: 10}}>
                    Dooto's Settings screen gives you control over how you interact with the platform. 
                    You can customize your privacy, connect to other accounts, and customize the app's 
                    interface to your personal preferences.
                </CustomText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#B4B4B4',
        justifyContent: 'flex-start',
        height: '100%',
        paddingTop: 150
    },
    setCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backHomeBtn: {
        width: 60,
        backgroundColor: '#333',
        position: 'relative',
        left: 0,
        top: -80,
        padding: 15,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        boxShadow: '0 1 2 2 rgba(0, 0, 0, 0.25)',
    },
    settingIcon: {
        height: 80,
        width: 80,
    },
    title: {
        color: '#F2EFE5',
        fontSize: 40,
        fontWeight: 700,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 3,
        textShadowOffset: {width: 3, height: 3},
    }
});

export default SettingScreen;