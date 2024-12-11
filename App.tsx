import { StyleSheet, View, Image } from 'react-native';
import { Row, Header, CustomText, Divider } from './Components';

export default function App() {
    return (
        <View style={styles.background}>
            {/* Header */}
            < Header />

            {/* Main */}
            <View style={styles.main}>
                {/* Status */}
                <Row style={styles.status}>
                    <View style={styles.statusItem}>
                        <CustomText style={ styles.statusAmount }>0</CustomText>
                        <CustomText style={ styles.statusTitle }>In Progress</CustomText>
                    </View>

                    <View style={styles.statusItem}>
                        <CustomText style={ styles.statusTitle }>Completed</CustomText>
                        <CustomText style={ styles.statusAmount }>0</CustomText>
                    </View>
                </Row>
                < Divider />
            
                {/* Tasks */}
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#B4B4B8",
    },
    main: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        boxShadow: "0 -2 4 0 rgba(0, 0, 0, 0.25)",
    },
    status: {
        justifyContent: 'space-around',
    },
    statusItem: {
        padding: 32,
        alignItems: 'center',
    },
    statusTitle: {
        fontSize: 24,
        fontWeight: 700
    },
    statusAmount: {
        fontSize: 48,
        fontWeight: 700
    },
});
