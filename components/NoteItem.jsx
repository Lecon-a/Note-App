import { View, Text, StyleSheet } from 'react-native';

const NoteItem = ({ note }) => {
    return (
        <View style={style.noteItem}>
            <Text style={style.noteText}>{note.text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
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
})



export default NoteItem;