import { Text, TouchableOpacity, StyleSheet } from 'react-native';


const NewNoteButton = ({setModalVisible}) => {
    return (
        
        <TouchableOpacity
            style={style.newNoteButton}
            onPress={() => setModalVisible(true)}
        >
            <Text style={style.addButtonText}>+ Create New Note</Text>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
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
})

export default NewNoteButton;