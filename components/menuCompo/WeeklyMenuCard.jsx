// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import Divider from "../commonComponents/Divider";
// import { Colors } from "./../../constants/Colors";

// // Static mapping of day names to images
// const dayImages = {
//   Sunday: require("./../../assets/images/day1.png"),
//   Monday: require("./../../assets/images/day2.png"),
//   Tuesday: require("./../../assets/images/day3.png"),
//   Wednesday: require("./../../assets/images/day4.png"),
//   Thursday: require("./../../assets/images/day5.png"),
//   Friday: require("./../../assets/images/day6.png"),
//   Saturday: require("./../../assets/images/day7.png"),
// };

// export default function WeeklyMenuCard() {
//   const [filteredDays, setFilteredDays] = useState(Object.keys(dayImages));
//   return (
//     <View>
//       {/* Weekly Schedule Divider */}
//       <Divider
//         name={"Weekly Schedule"}
//         color={Colors.EAGLE_GREEN}
//         fontSize={21}
//         fontFamily={"poppins-extraBold"}
//       />

//       {/* <FlatList
//         data={filteredDays}
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(day) => day}
//         renderItem={({ item: day }) => (
//           <TouchableOpacity
//             key={day}
//             style={styles.dayWiseCard}
//             // onPress={() => handleDayPress(day)}
//           >
//             {/* <Text>{dayImages[day]}</Text> */}

//       {/* <View style={styles.imgStyle}>
//               <Image source={dayImages[day]} style={styles.img} />
//             </View>
//             <View style={styles.txtStyle}>
//               <Text style={styles.txt}>{day}</Text>
//             </View> */}
//       {/* </TouchableOpacity>
//         )}
//       /> */}

//       <TouchableOpacity>
//         <LinearGradient
//           colors={["#CA9CFF", "#54337A"]}
//           start={{ x: 1, y: 0.5 }}
//           end={{ x: 0, y: 1 }}
//           style={styles.dayWiseCard}
//         >
//           <Image source={dayImages["Sunday"]} style={styles.img} />
//           <Text style={styles.txt}>Sunday</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <LinearGradient
//           colors={["#0C5772", "#7BDAFD"]}
//           start={{ x: 1, y: 0.5 }}
//           end={{ x: 0, y: 1 }}
//           style={styles.dayWiseCard}
//         >
//           <Text style={styles.txt}>Monday</Text>
//           <Image source={dayImages["Monday"]} style={styles.img} />
//         </LinearGradient>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <LinearGradient
//           colors={["#98D0D6", "#156C75"]}
//           start={{ x: 1, y: 0.5 }}
//           end={{ x: 0, y: 1 }}
//           style={styles.dayWiseCard}
//         >
//           <Image source={dayImages["Tuesday"]} style={styles.img} />
//           <Text style={styles.txt}>Tuesday</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <LinearGradient
//           colors={["#486D24", "#B2F96D"]}
//           start={{ x: 1, y: 0.5 }}
//           end={{ x: 0, y: 1 }}
//           style={styles.dayWiseCard}
//         >
//           <Text style={styles.txt}>Wednesday</Text>
//           <Image source={dayImages["Wednesday"]} style={styles.img} />
//         </LinearGradient>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <LinearGradient
//           colors={["#F6E96F", "#898029"]}
//           start={{ x: 1, y: 0.5 }}
//           end={{ x: 0, y: 1 }}
//           style={styles.dayWiseCard}
//         >
//           <Image source={dayImages["Thursday"]} style={styles.img} />
//           <Text style={styles.txt}>Thursday</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <LinearGradient
//           colors={["#93611A", "#FFC168"]}
//           start={{ x: 1, y: 0.5 }}
//           end={{ x: 0, y: 1 }}
//           style={styles.dayWiseCard}
//         >
//           <Text style={styles.txt}>Friday</Text>
//           <Image source={dayImages["Friday"]} style={styles.img} />
//         </LinearGradient>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <LinearGradient
//           colors={["#FF9A6E", "#8D350F"]}
//           start={{ x: 1, y: 0.5 }}
//           end={{ x: 0, y: 1 }}
//           style={styles.dayWiseCard}
//         >
//           <Image source={dayImages["Saturday"]} style={styles.img} />
//           <Text style={styles.txt}>Saturday</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   dayWiseCard: {
//     width: "90%",
//     height: 120,
//     marginHorizontal: "auto",
//     marginBottom: 15,
//     borderRadius: 15,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   img: {
//     width: "35%",
//     height: "100%",
//     resizeMode: "contain",
//   },
//   txt: {
//     fontFamily: "poppins-bold",
//     fontSize: 22,
//     textAlign: "center",
//     marginVertical: "auto",
//   },
// });

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";

// Importing Color Code
import { Colors } from "./../../constants/Colors";

// Importing the function to fetch all the menu
import { getMenu, profileInfo } from "./../../app/services/api";

// Impoting components
import Divider from "../commonComponents/Divider";

// Static mapping of day names to images and gradient colors
const dayData = [
  {
    day: "Sunday",
    image: require("./../../assets/images/day1.png"),
    colors: ["#A5CAD2", "#758EB7"],
  },
  {
    day: "Monday",
    image: require("./../../assets/images/day2.png"),
    colors: ["#758EB7", "#A5CAD2"],
  },
  {
    day: "Tuesday",
    image: require("./../../assets/images/day3.png"),
    colors: ["#A5CAD2", "#758EB7"],
  },
  {
    day: "Wednesday",
    image: require("./../../assets/images/day4.png"),
    colors: ["#758EB7", "#A5CAD2"],
  },
  {
    day: "Thursday",
    image: require("./../../assets/images/day5.png"),
    colors: ["#A5CAD2", "#758EB7"],
  },
  {
    day: "Friday",
    image: require("./../../assets/images/day6.png"),
    colors: ["#758EB7", "#A5CAD2"],
  },
  {
    day: "Saturday",
    image: require("./../../assets/images/day7.png"),
    colors: ["#A5CAD2", "#758EB7"],
  },
];

export default function WeeklyMenuCard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState();

  useEffect(() => {
    setLoading(true);

    // Fetch the data from backend
    async function fetchData() {
      try {
        const profile = await profileInfo();
        const userId = profile.addresses[0].user_id;

        const menuData = await getMenu(userId);
        console.log("Menu -> " + JSON.stringify(menuData));

        setMenu(menuData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Function to handle the day menu
  const handleDayMenu = (day, image) => {
    // Filter the menu based on day
    const filteredMenu = menu.filter(
      (menuItem) => dayData[new Date(menuItem.day).getDay()].day === day
    );

    console.log("filter -> " + JSON.stringify(filteredMenu));

    // Jump to the dayMenuCard when the day is matched
    router.push({
      pathname: "/menu/dayMenuCard",
      params: { day, image, menu: JSON.stringify(filteredMenu) },
    });
  };

  return (
    <View>
      {/* Weekly Schedule Heading */}
      <Text style={styles.heading}>Weekly Schedule</Text>

      {/* Dynamically render day cards */}
      {dayData.map(({ day, image, colors }) => (
        <TouchableOpacity key={day} onPress={() => handleDayMenu(day, image)}>
          <LinearGradient
            colors={colors}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 1 }}
            style={styles.dayWiseCard}
          >
            {/* Conditional rendering based on the day Image and Text position */}
            {day === "Monday" || day === "Wednesday" || day === "Friday" ? (
              <>
                <Text style={styles.txt}>{day}</Text>
                <Image source={image} style={styles.img} />
              </>
            ) : (
              <>
                <Image source={image} style={styles.img} />
                <Text style={styles.txt}>{day}</Text>
              </>
            )}
          </LinearGradient>
        </TouchableOpacity>
      ))}

      {/* Loading Indicator */}
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: Colors.EAGLE_GREEN,
    fontSize: 21,
    fontFamily: "poppins-bold",
    textAlign: "center",
    marginBottom: 10,
  },
  dayWiseCard: {
    width: "90%",
    height: 120,
    marginHorizontal: "auto",
    marginBottom: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: "35%",
    height: "100%",
    resizeMode: "contain",
  },
  txt: {
    fontFamily: "poppins-bold",
    fontSize: 21,
    textAlign: "center",
  },
});
