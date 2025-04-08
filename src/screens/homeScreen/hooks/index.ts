import {Movies} from '@/constant/mockData';
import {MovieSortOptions} from '@/constant/mockData';
import {useCallback, useState} from 'react';

import {IMovie} from '@/types';
import {useEffect} from 'react';
import {MovieFilterOptions} from '@/constant/mockData';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const useHomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
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
  }, [filter, sort, handleSearch, search]);

  const handleMoviePress = (movie: IMovie) => {
    navigation.navigate('MovieDetail', {movie});
  };

  return {
    filter,
    sort,
    search,
    filteredMovies,
    handleSearch,
    handleMoviePress,
    setFilter,
    setSort,
    setSearch,
  };
};

export default useHomeScreen;
