import {
    View, Text, StyleSheet,
    TouchableOpacity,
    Modal, TextInput, Alert
} from 'react-native';


const NoteModal = ({addNote, newNote, setNewNote, modalVisible, setModalVisible}) => {
    return (
        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={style.modalOverlay}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Add a New Note</Text>
                        <TextInput
                            style={style.modalInput}
                            placeholder="Enter note text..."
                            value={newNote}
                            onChangeText={setNewNote}
                        />
                        <View style={style.modalButtons}>
                            <TouchableOpacity style={style.cancelButton} onPress={() => setModalVisible(false)}>
                                <Text style={style.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.saveButton}
                                onPress={addNote}
                            >
                                <Text style={style.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
    );
}

const style = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    modalInput: {
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        backgroundColor: '#dc3545',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        marginRight: 5,
    },
    cancelButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        marginLeft: 5,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default NoteModal;