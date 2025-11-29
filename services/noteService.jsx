import databaseServiceWrapper from "./databaseService";

const noteService = {
  getNotes: async () => {
    const response = await databaseServiceWrapper.listDocuments();
    return response.error ? { error: response.error } : { data: response };
  },

  // add note
  addNote: async (text) => {
    if (!text) {
      return { error: "Note text cannot be empty" };
    }

    const data = {
      text,
      $createdAt: new Date().toISOString(),
      $updatedAt: new Date().toISOString(),
    };
    
    const response = await databaseServiceWrapper.createDocument(data);

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },
};

export default noteService;
