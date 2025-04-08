import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import Dropdown from '@components/Dropdown';
import AppInput from '@components/AppInput';
import AppTextButton from '@components/AppTextButton';
import {MovieFilterOptions, MovieSortOptions} from '@/constant/mockData';
import MovieList from '@/components/MovieList';
import useHomeScreen from './hooks';

const HomeScreen = () => {
  const {
    filter,
    sort,
    search,
    filteredMovies,
    handleSearch,
    handleMoviePress,
    setFilter,
    setSort,
    setSearch,
  } = useHomeScreen();

  const renderTop = useCallback(() => {
    return (
      <View style={styles.filterContainer}>
        <Dropdown
          options={MovieFilterOptions}
          value={filter}
          onSelect={setFilter}
        />
        <Dropdown options={MovieSortOptions} value={sort} onSelect={setSort} />
        <AppInput
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
        />
        <AppTextButton
          text="Search"
          onPress={() => handleSearch(search)}
          disabled={search.length === 0}
        />
      </View>
    );
  }, [filter, sort, search, handleSearch, setFilter, setSort, setSearch]);

  return (
    <View style={styles.container}>
      <MovieList
        renderTop={renderTop}
        movies={filteredMovies}
        onMoviePress={handleMoviePress}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  filterContainer: {
    paddingVertical: 16,
    gap: 12,
  },
});
