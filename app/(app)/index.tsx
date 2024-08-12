import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import APIInfo from "../services/api";

interface CardProps {
  title: string;
  link: string;
  backgroundImage: string;
}

const Card: React.FC<CardProps> = ({ title, link, backgroundImage }) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(link)} style={styles.card}>
      <ImageBackground
        source={{ uri: backgroundImage ?? "" }}
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.overlay} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Home = () => {
  const { getAllCharacters, isLoading } = APIInfo({ status: "" });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView>
      <View>
        <Card
          title="All Characters"
          link="AllCharacter"
          backgroundImage={getAllCharacters[1]?.image ?? ""}
        />
        <Card
          title="Alive Character"
          link="AllCharacter"
          backgroundImage={getAllCharacters[0]?.image ?? ""}
        />
        <Card
          title="Dead Characters"
          link="AllCharacter"
          backgroundImage={getAllCharacters[0]?.image ?? ""}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 20,
    marginHorizontal: 20,
    elevation: 3,
  },
  backgroundImage: {
    width: "100%",
    height: 100,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay to improve text readability
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // White text for contrast against the background
  },
});

export default Home;
