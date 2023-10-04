import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const options = ["Pomodoro", "Short Break", "Long Break"]
export default function Header({ currentTime, setCurrentTime, setTime }) {

  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15
    setCurrentTime(index)
    setTime(newTime * 60)
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((e, i) => (
        <TouchableOpacity key={i} onPress={() => handlePress(i)} style={[styles.itemStyle, currentTime !== i && { borderColor: "transparent" }]}>
          <Text style={{ fontWeight: "bold" }}>
            {e}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    alignItems: "center",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20
  }
})