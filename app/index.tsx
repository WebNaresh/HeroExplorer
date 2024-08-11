import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/user">User</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
