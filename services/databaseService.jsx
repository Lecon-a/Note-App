import { databaseService } from "./appwrite";
import { ID } from "react-native-appwrite";
import Constants from "expo-constants";

const {
  EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  EXPO_PUBLIC_APPWRITE_COLLECTION_NOTES_ID,
} = Constants.expoConfig.extra;

const databaseServiceWrapper = {
  listDocuments: async (
    dbId = EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    colId = EXPO_PUBLIC_APPWRITE_COLLECTION_NOTES_ID
  ) => {
    try {
      const response = await databaseService.listDocuments(dbId, colId);
      return response.documents || [];
    } catch (error) {
      console.error("Error fetching documents:", error.message);
      return { error: error.message };
    }
  },

  createDocument: async (
    data,
    databaseId = EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    colId = EXPO_PUBLIC_APPWRITE_COLLECTION_NOTES_ID
  ) => {
    
    const payload = {
      data: data,
      databaseId: databaseId,
      collectionId: colId,
      documentId: ID.unique(),
    };
      
    try {
      return await databaseService.createDocument(payload);
    } catch (error) {
      console.error("Error creating document:", error.message);
      return { error: error.message };
    }
  },
};

export default databaseServiceWrapper;