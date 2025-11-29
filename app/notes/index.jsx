import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import NewNoteButton from "@/components/NewNoteButton";
import NoteList from "@/components/NoteList";
import NoteModal from "@/components/NoteModal";
import noteService from "@/services/noteService";

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);

    // logic to fetch notes from noteService
    const response = await noteService.getNotes();

    if (response.error) {
      setError(response.error);
      Alert.alert("Error", response.error);
    } else {
      setNotes(response.data);
      setError(null);
    }

    setLoading(false);
  };

  const addNote = async () => {
    if (newNote.trim()) {

      const response = await noteService.addNote(newNote.trim());

      if (response?.error) {
        Alert.alert("Error", response.error);
        return;
      } else {
        setNotes([...notes, response.data]);
      }

      setNewNote("");
      setModalVisible(false);
    } else {
      Alert.alert("Invalid Input", "Note cannot be empty");
    }
  };

  return (
    <View style={style.container}>
      {/* List */}
      <NoteList notes={notes} loading={loading} />

      {/* Add Note Button */}
      <NewNoteButton setModalVisible={setModalVisible} />

      {/* Modal */}
      <NoteModal
        addNote={addNote}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default NoteScreen;