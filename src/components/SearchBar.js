import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";



export const SearchBar = (props) => {
  const { onFilterPress, isFilter = true, rightIcon, leftIcon = true } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.searchView, { width: isFilter ? "85%" : "100%" }]}>

          <Image style={{height: 20, width: 20}} source={require('../assets/images/search.png')} />

        <TextInput
          placeholder="Search..."
          placeholderTextColor='black'
          style={styles.searchInput}
          onChangeText={(text) => {
            console.log("🚀 ~ HomeScreen ~ text:", text);
          }}
          multiline={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 250,

  },
  searchView: {
    width: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'white',
    borderRadius: 25,
    height: "80%",
    justifyContent: "center",
    borderBlockColor:'black',
    borderWidth:1

  },
  searchImage: {
    marginHorizontal: 2,
    marginRight: 8,
  },
  titleText: {
    color: 'white',
    fontSize: 22,
  },
  searchInput: {
    color: 'black',
    fontSize: 18,
    width: "80%",
    paddingTop: 3,
    paddingBottom: 0,
  },
  filterView: {
    marginLeft: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
  },
  filterImage: {
    alignSelf: "center",
    marginVertical: 12,
  },
});
