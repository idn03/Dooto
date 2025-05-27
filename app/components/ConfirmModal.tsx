import React from 'react';
import { Modal, View, Pressable, StyleSheet } from 'react-native';
import CustomText from './override/Text';

interface ConfirmationModalProps {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ visible, onConfirm, onCancel }) => {
    return (
        <Modal transparent={true} animationType='fade' visible={visible} onRequestClose={onCancel}>
            <View style={styles.overlay}>
                <View style={ styles.modalContainer }>
                    <CustomText style={ styles.modalTitle }>Confirm Deletion</CustomText>
                    <CustomText style={ styles.modalMessage }>Are you sure you want to delete this task?</CustomText>

                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.confirmButton} onPress={onConfirm}>
                            <CustomText style={styles.buttonText}>Yes</CustomText>
                        </Pressable>
                        
                        <Pressable style={styles.cancelButton} onPress={onCancel}>
                            <CustomText style={styles.buttonText}>No</CustomText>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    confirmButton: {
        backgroundColor: '#E78F81',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#B4B4B4',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ConfirmationModal;