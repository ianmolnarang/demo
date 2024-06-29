import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Search } from "../screen/Search";
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/slice/themeSlice';

export const SearchBar = (props) => {
  const { onFilterPress, isFilter = true, rightIcon, leftIcon = true } = props;
  const navigation = useNavigation();
  const theme = useSelector(selectTheme);

  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={[styles.searchView, { width: isFilter ? "60%" : "80%" }]}>
      <TouchableOpacity onPress={handleSearchPress} style={styles.searchInput}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../assets/images/search.png")}
          />
          <Text style={{ marginLeft: 10, fontSize: 15 }}>Search</Text>

        </View>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    height: 40,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
});