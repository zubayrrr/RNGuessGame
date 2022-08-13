import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
function Box({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Box;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary[500],
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
