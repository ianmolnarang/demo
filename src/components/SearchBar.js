import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import axios from "axios";

export const SearchBar = (props) => {
  const { onFilterPress, isFilter = true, rightIcon, leftIcon = true } = props;
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      if (!searchText.trim()) {
        Alert.alert("Error", "Please enter a valid search term");
        return;
      }

      const apiKey = "JFR6X504DZ3ZJ5ZY";
      const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchText}&apikey=${apiKey}`;

      const response = await axios.get(url);

      if (response.data.bestMatches && response.data.bestMatches.length > 0) {
        setSearchResults(response.data.bestMatches);
      } else {
        setSearchResults([]);
        Alert.alert("No results", "No matching results found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      Alert.alert("Error", "Failed to fetch data. Please try again later.");
    }
  };

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity style={styles.resultItem}>
      <Text style={styles.resultText}>{item["2. name"]}</Text>
      <Text style={styles.resultSubText}>{item["1. symbol"]}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.searchView, { width: isFilter ? "85%" : "100%" }]}>
        <Image
          style={{ height: 20, width: 20 }}
          source={require("../assets/images/search.png")}
        />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="black"
          style={styles.searchInput}
          onChangeText={(text) => {
            setSearchText(text);
          }}
          onSubmitEditing={handleSearch} // Trigger search on submit
          multiline={false}
        />
      </View>

      {/* Display search results dropdown */}
      {searchResults.length > 0 && (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item["1. symbol"]}
            renderItem={renderSearchResult}
            style={styles.dropdown}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flexDirection: "column",
    width: 250,
  },
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
    color: "black",
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  dropdownContainer: {
    position: 'absolute',
    top: 50, // Adjust the top position as needed
    left: 0,
    right: 0,
    zIndex: 1, // Ensure the dropdown is on top of other elements

  },
  dropdown: {
    maxHeight: 200,
    backgroundColor: "grey",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  resultItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  resultSubText: {
    fontSize: 14,
    color: "#666",
  },
});