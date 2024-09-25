import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomInput from "../../components/CustomInput";
export default function UpdateProfile() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  // const [open, setOpen] = useState(false);
  // const [date, setDate] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Your Profile",
      headerTransparent: true,
    });
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 80,
        backgroundColor: Colors.BGCOLOR,
      }}
    >
      <TouchableOpacity style={styles.profileImgSection}>
        <Image
          alt="Profile Image"
          source={require("./../../assets/images/profile.jpg")}
          style={styles.profileImg}
        />
        <View style={styles.profileAction}>
          <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
        </View>
      </TouchableOpacity>

      <View style={styles.inputFields}>
        <CustomInput placeholder={"Name"} onChangeText={setName} />
        <CustomInput
          placeholder={"Mobile"}
          onChangeText={setMobile}
          containerStyle={{ marginTop: 10 }}
          keyboardType="numeric"
          maxLength={10}
        />
        <CustomInput
          placeholder={"Email"}
          onChangeText={setEmail}
          containerStyle={{ marginTop: 10 }}
          keyboardType="email-address"
        />
        <CustomInput
          placeholder={"Date of Birth"}
          onChangeText={setDob}
          containerStyle={{ marginTop: 10 }}
          // keyboardType=""
          // onPress={() => {
          //   setOpen(true);
          // }}
        />
        {/* <DatePicker
          modal
          mode="date"
          dateFormat="MM-DD-YYYY"
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false), setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        // onPress={handleSignUp}
        style={[
          styles.btn,
          {
            padding: 10,
            backgroundColor: Colors.VALENTINE_RED,
          },
        ]}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "openSans-extraBold",
            fontSize: 18,
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImgSection: {
    width: 120,
    height: 120,
    marginHorizontal: "auto",
    marginTop: 70,
  },
  profileImg: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
    position: "relative",
  },
  profileAction: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
    position: "absolute",
    right: 0,
    bottom: 0,
    elevation: 3,
  },
  inputFields: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 60,
  },
  btn: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 20,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
  },
});
