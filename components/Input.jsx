// import { View, StyleSheet, TextInput, Alert } from "react-native";
// import { Colors } from "./../constants/Colors";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// // Importing logIn function from api.js for the Cutomer LogIn
// // import { logIn } from "./../../services/api";

// export default function Input({
//   containerStyle,
//   placeholder,
//   onChangeText,
//   keyboardType,
//   maxLength,
//   error,
//   ...props
// }) {
//   return (
//     <KeyboardAwareScrollView>
//       <View style={styles.container}>
//         {/* Input fields for the Sign In */}
//         <TextInput
//           {...props}
//           style={styles.input}
//           placeholder={placeholder}
//           value={onChangeText}
//           textAlignVertical="center"
//           keyboardType={keyboardType}
//           maxLength={maxLength}
//         />
//       </View>
//     </KeyboardAwareScrollView>
//   );
// }

// // StyleSheet
// const styles = StyleSheet.create({
//   input: {
//     padding: 10,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: Colors.BOULDER,
//     fontFamily: "openSans-bold",
//     color: "black",
//   },
// });

import { View, StyleSheet, TextInput } from "react-native";

// Importing Color Code
import { Colors } from "./../constants/Colors";

export default function Input({
  containerStyle,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  maxLength,
  ...props
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...props}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.BOULDER,
    fontFamily: "poppins-bold",
    color: "black",
  },
});
