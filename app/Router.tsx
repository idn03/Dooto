import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

export type RootStackParamList = {
    Home: undefined;
    Setting: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
  
const AppRouter: React.FC = () => {
    return (
        <NavigationContainer>
            < RootStack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                < RootStack.Screen name="Home" component={HomeScreen} />
                < RootStack.Screen name="Setting" component={SettingScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default AppRouter;