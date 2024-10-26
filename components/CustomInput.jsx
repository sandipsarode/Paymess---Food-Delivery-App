import { View, StyleSheet, Animated, TextInput } from "react-native";
import React, { useRef, useState } from "react";

// Importing Color Code
import { Colors } from "../constants/Colors";

export default function CustomInput({
  containerStyle,
  placeholder,
  onChangeText,
  keyboardType,
  maxLength,
  error,
  ...props
}) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const handleTextChange = (text) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const animatedLabel = (toValue) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    left: 10,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 0],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [Colors.BOULDER, "#888"],
    }),
  };

  return (
    <View style={containerStyle}>
      <View style={styles.innerContainer}>
        <Animated.Text style={[styles.label, labelStyle]}>
          {placeholder}
        </Animated.Text>
        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            value={text}
            textAlignVertical="center"
            keyboardType={keyboardType}
            maxLength={maxLength}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderColor: Colors.BOULDER,
    borderRadius: 5,
    height: 60,
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    color: Colors.BOULDER,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    marginTop: 10,
    paddingLeft: 10,
  },
});
