import { Client, Databases } from "react-native-appwrite";
import { Platform } from "react-native";
import Constants from "expo-constants";

const {
  EXPO_PUBLIC_APPWRITE_ENDPOINT,
  EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  EXPO_PUBLIC_APPWRITE_PACKAGE_NAME,
  EXPO_PUBLIC_APPWRITE_BUNDLE_ID,
} = Constants.expoConfig.extra;

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint(EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(EXPO_PUBLIC_APPWRITE_PROJECT_ID);

// Platform-specific setup
if (Platform.OS === "android")
  client.setPlatform(EXPO_PUBLIC_APPWRITE_PACKAGE_NAME);
if (Platform.OS === "ios") client.setPlatform(EXPO_PUBLIC_APPWRITE_BUNDLE_ID);

// Export a named database service
export const databaseService = new Databases(client);

// Export client if needed
export { client };