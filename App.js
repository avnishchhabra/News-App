import { StyleSheet, Text, View, StatusBar } from "react-native";
import HeaderTabs from "./components/HeaderTabs";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
