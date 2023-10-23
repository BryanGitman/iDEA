import { useState, useEffect } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() => {
        setSearchKeyword('');
    }, [])

    return (
        <View style={styles.barSearch}>
            <Searchbar
                placeholder='Buscar DEA'
                value={searchKeyword}
                /*onSubmitEditing={() => search(searchKeyword)}*/
                onChangeText={(text) => setSearchKeyword(text)}
                style={{backgroundColor: 'white'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    barSearch: {
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        position: 'absolute',
        zIndex: 999,
        top: 35,
        left: 90,
        width: '65%',
    }
});

export default Search;