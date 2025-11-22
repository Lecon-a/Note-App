import { useState } from 'react';
import {
    View, Text, StyleSheet,
    FlatList, TouchableOpacity,
    Modal, TextInput
} from 'react-native';

const NoteScreen = () => {

    const [notes, setNotes] = useState([
        {id: '1', text: 'Note One'},
        {id: '2', text: 'Note Two'},
        {id: '3', text: 'Note Three'},
    ])

    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');

    const addNote = () => {
        if (newNote.trim()) {
            const newNoteItem = {
                id: (notes.length + 1).toString(),
                text: newNote,
            };
            setNotes([...notes, newNoteItem]);
            setNewNote('');
            setModalVisible(false);
        }
    };

    return (
        <View style={style.container}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={style.noteItem}>
                        <Text style={style.noteText}>{item.text}</Text>
                    </View>
                )}

            />
            <TouchableOpacity
                style={style.newNoteButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={style.addButtonText}>+ Create New Note</Text>
            </TouchableOpacity>

            {/* model */}
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
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    noteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
    },
    noteText: {
        fontSize: 18,
    },
    newNoteButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
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
})

export default NoteScreen;

