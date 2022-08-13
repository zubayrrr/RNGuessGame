import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function SecondaryTitle({ children, style }) {
  return <Text style={[styles.inputPlaceholder, style]}>{children}</Text>;
}

export default SecondaryTitle;

const styles = StyleSheet.create({
  inputPlaceholder: {
    color: Colors.primary[800],
    fontSize: 24,
    fontFamily: "helvetica-regular",
  },
});
