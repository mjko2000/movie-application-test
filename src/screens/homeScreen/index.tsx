import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Dropdown from '@components/Dropdown';
import AppInput from '@components/AppInput';
import AppTextButton from '@components/AppTextButton';
import {
  MovieFilterOptions,
  MovieSortOptions,
  Movies,
} from '@/constant/mockData';
import MovieList from '@/components/MovieList';
import {IMovie} from '@/types';

const HomeScreen = () => {
  const [filter, setFilter] = useState(MovieFilterOptions[0].value);
  const [sort, setSort] = useState(MovieSortOptions[0].value);
  const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>(Movies);

  const handleSearch = useCallback(
    (search: string = '') => {
      // First apply search filter using existing handleSearch logic
      let searchResults;
      if (search.trim() === '') {
        searchResults = [...Movies];
      } else {
        searchResults = Movies.filter(movie =>
          movie.title.toLowerCase().includes(search.toLowerCase()),
        );
      }

      // Apply category filter
      let result = searchResults;
      if (filter !== 'all') {
        result = result.filter(movie => movie.category === filter);
      }

      // Apply sorting
      switch (sort) {
        case 'alphabetical':
          result.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        case 'release_date':
          result.sort(
            (a, b) =>
              new Date(b.releaseDate).getTime() -
              new Date(a.releaseDate).getTime(),
          );
          break;
        default:
          break;
      }

      setFilteredMovies(result);
    },
    [filter, sort],
  );

  useEffect(() => {
    handleSearch(search);
  }, [filter, sort]);

  const handleMoviePress = (movie: IMovie) => {
    console.log('Selected movie:', movie.title);
    // Navigation logic would go here
  };

  return (
    <View style={styles.container}>
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
      <MovieList movies={filteredMovies} onMoviePress={handleMoviePress} />
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
    padding: 16,
    gap: 12,
  },
});
