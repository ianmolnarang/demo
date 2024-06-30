import React, { useState } from "react";
import { View, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, Text, Alert } from "react-native";
import axios from "axios";
import {useSelector} from 'react-redux';
import {selectTheme} from '../redux/slice/themeSlice';
import config from '../helper/config'

export default Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const theme = useSelector(selectTheme);

  const handleSearch = async () => {
    try {
      if (!searchText.trim()) {
        Alert.alert("Error", "Please enter a valid search term");
        return;
      }

      const searchUrl = `${config.baseUrl}${config.searchQuery}&apikey=${config.apiKey}`;
      console.log(searchUrl);

      const response = await axios.get(
         `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchText}&apikey=JY9K9EKY8JM5J3GN`
      );

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
    <View style={[styles.container, {backgroundColor:theme.textrev}]}>
      <View style={styles.searchView}>
        <Image style={{ height: 20, width: 20 }} source={require("../assets/images/search.png")} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="black"
          style={styles.searchInput}
          onChangeText={(text) => {
            setSearchText(text);
          }}
          onSubmitEditing={handleSearch}
          multiline={false}
        />
      </View>

      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item["1. symbol"]}
          renderItem={renderSearchResult}
          style={styles.dropdown}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
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
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  dropdown: {
    maxHeight: "50%",
    backgroundColor: "white",
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