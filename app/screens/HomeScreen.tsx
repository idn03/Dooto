import { StyleSheet, View, TextInput, Pressable, FlatList, Image, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import { Row, Header, CustomText, Divider } from '../components';
import ConfirmModal from '../components/ConfirmModal';

function setID() {
    return Math.random();
}

interface Task {
    id: number;
    name: String;
    isDone: boolean;
}

const HomeScreen = () => {
    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState<Task[]>([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

    const handleDeleteTask = (task: Task) => {
        setTaskToDelete(task);
        setModalVisible(true);
    };

    const confirmDelete = () => {
        if (taskToDelete) {
            const newList = listTodo.filter((task) => task.id !== taskToDelete.id);
            setListTodo(newList);
            setTaskToDelete(null);
        }
        setModalVisible(false);
    };

    return (
        <View style={styles.background}>
            {/* Header */}
            <Header />

            {/* Main */}
            <View style={styles.body}>
                {/* Status */}
                <Row style={styles.status}>
                    <View style={styles.statusItem}>
                        <CustomText style={styles.statusAmount}>{`${listTodo.filter((task) => !task.isDone).length}`}</CustomText>
                        <CustomText style={styles.title}>In Progress</CustomText>
                    </View>

                    <View style={styles.statusItem}>
                        <CustomText style={styles.title}>Completed</CustomText>
                        <CustomText style={styles.statusAmount}>{`${listTodo.filter((task) => task.isDone).length}`}</CustomText>
                    </View>
                </Row>
                <Divider />

                {/* Add New Task */}
                <View style={styles.mainContent}>
                    <Row>
                        <TextInput
                            style={styles.inputBar}
                            placeholder='Add new task here...'
                            maxLength={25}
                            onChangeText={(value) => setTodo(value)}
                        />
                        <Pressable
                            style={styles.addTaskButton}
                            onPress={() => setListTodo([...listTodo, { id: setID(), name: todo, isDone: false }])}
                        >
                            <CustomText style={{ fontWeight: 700 }}>ADD</CustomText>
                        </Pressable>
                    </Row>

                    {/* To-do List */}
                    <View style={{ flex: 1, marginTop: 40 }}>
                        <CustomText style={styles.title}>To-do List</CustomText>
                        <FlatList
                            data={listTodo}
                            keyExtractor={(item) => item.id.toString()}
                            keyboardShouldPersistTaps="handled"
                            style={{ flex: 1 }}
                            renderItem={({ item }) => {
                                return (
                                    <Row style={styles.todoItem}>
                                        <Row>
                                            <BouncyCheckbox
                                                onPress={(isDone: boolean) => {
                                                    item.isDone = isDone;
                                                    setListTodo([...listTodo]);
                                                }}
                                                fillColor='#333'
                                                style={styles.checkbox}
                                            />
                                            <Text style={[styles.todoContent, item.isDone && { opacity: 0.6 }]}>{item.name}</Text>
                                        </Row>
                                        <Pressable onPress={() => handleDeleteTask(item)}>
                                            <Image style={styles.removeTaskIcon} source={require('../../assets/icons/minus.png')} />
                                        </Pressable>
                                    </Row>
                                );
                            }}
                        />
                    </View>
                </View>
            </View>

            {/* Confirmation Modal */}
            <ConfirmModal
                visible={isModalVisible}
                onConfirm={confirmDelete}
                onCancel={() => setModalVisible(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#B4B4B4'
    },
    body: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        boxShadow: '0 -2 4 0 rgba(0, 0, 0, 0.25)',
    },
    title: {
        fontSize: 24,
        fontWeight: 700
    },
    status: {
        justifyContent: 'space-around',
    },
    statusItem: {
        padding: 32,
        alignItems: 'center',
    },
    statusAmount: {
        fontSize: 48,
        fontWeight: 700
    },
    mainContent: {
        margin: 40,
        flex: 1
    },
    inputBar: {
        padding: 15,
        backgroundColor: 'rgba(180, 180, 180, 0.25)',
        borderRadius: 30,
        width: '100%'
    },
    addTaskButton: {
        paddingVertical: 13,
        paddingHorizontal: 30,
        backgroundColor: '#FF6969',
        borderRadius: 30,
        position: 'relative',
        right: 90,
    },
    todoItem: {
        width: '100%',
        justifyContent: 'space-between'
    },
    checkbox: {
        marginTop: 20,
        marginLeft: 10,
        width: 25,
    },
    todoContent: {
        paddingTop: 20,
        paddingHorizontal: 10,
        fontFamily: "Avenir",
        color: "#333",
        fontSize: 18
    },
    removeTaskIcon: {
        paddingTop: 20,
        height: 24,
        width: 24,
    }
});

export default HomeScreen;