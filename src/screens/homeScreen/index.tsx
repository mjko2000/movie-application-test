import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Dropdown from '../../components/Dropdown';
import {MovieSortOptions, MovieFilterOptions} from '../../constant/mockData';
import AppInput from '../../components/AppInput';
import AppTextButton from '../../components/AppTextButton';
const HomeScreen = () => {
  const [filter, setFilter] = useState(MovieFilterOptions[0].value);
  const [sort, setSort] = useState(MovieSortOptions[0].value);
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Dropdown
        options={MovieFilterOptions}
        value={filter}
        onSelect={setFilter}
      />
      <Dropdown options={MovieSortOptions} value={sort} onSelect={setSort} />
      <AppInput placeholder="Search..." />
      <AppTextButton
        text="Search"
        onPress={() => {}}
        disabled={search.length === 0}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    gap: 12,
  },
});
