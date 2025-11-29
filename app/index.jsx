import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const PostItImage = require("../assets/images/file-image.png");

const Index = () => {
  const router = useRouter();

  return (
    <View style={style.container}>
      <Image source={PostItImage} style={style.image} />
      <Text style={style.title}>Welcome To Notes App</Text>
      <Text style={style.subtitle}>Capture you thoughts anytime, anywhere</Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => router.push("/notes")}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
});

export default Index;
