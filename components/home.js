import React from "react";
import { View, Text, Button } from "react-native"; 

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>WELCOME TO THE HOME PAGE</Text>
    </View>
  );
};

export default Home;
