import {useState, useEffect, useCallback} from 'react';
import {MovieSortOptions} from '@/constant/mockData';
import {IMovie} from '@/types';
import {useFocusEffect} from '@react-navigation/native';
import useFavoriteMovie from '@/hooks/useFavoriteMovie';
const useFavoritesScreen = () => {
  const {loadWatchlistMovies, removeFromWatchlist: removeFromWatchlistStorage} =
    useFavoriteMovie();
  const [watchlistMovies, setWatchlistMovies] = useState<IMovie[]>([]);
  const [filter, setFilter] = useState<
    (typeof MovieSortOptions)[number]['value']
  >(MovieSortOptions[0].value);
  const [orderAsc, setOrderAsc] = useState(false);

  useFocusEffect(
    useCallback(() => {
      onLoadWatchlistMovies();
    }, []),
  );

  const onLoadWatchlistMovies = useCallback(() => {
    const moviesFromWatchlist = loadWatchlistMovies();
    if (moviesFromWatchlist.length > 0) {
      // Apply current sorting
      const sortedMovies = sortMovies(moviesFromWatchlist, filter, orderAsc);
      setWatchlistMovies(sortedMovies);
    } else {
      setWatchlistMovies([]);
    }
  }, [filter, orderAsc]);

  const toggleSortOrder = useCallback(() => {
    setOrderAsc(prev => !prev);
  }, []);

  const changeFilter = useCallback(
    (newFilter: (typeof MovieSortOptions)[number]['value']) => {
      setFilter(newFilter);
    },
    [],
  );

  const sortMovies = (
    movies: IMovie[],
    filterBy: (typeof MovieSortOptions)[number]['value'],
    ascending: boolean,
  ) => {
    const sortedMovies = [...movies];
    switch (filterBy) {
      case 'rating':
        sortedMovies.sort((a, b) =>
          ascending ? a.rating - b.rating : b.rating - a.rating,
        );
        break;
      case 'release_date':
        sortedMovies.sort((a, b) => {
          const dateA = new Date(a.releaseDate).getTime();
          const dateB = new Date(b.releaseDate).getTime();
          return ascending ? dateA - dateB : dateB - dateA;
        });
        break;
      case 'alphabetical':
        sortedMovies.sort((a, b) =>
          ascending
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title),
        );
        break;
    }
    return sortedMovies;
  };

  // Re-sort when filter or order changes
  useEffect(() => {
    setWatchlistMovies(prev => sortMovies(prev, filter, orderAsc));
  }, [filter, orderAsc]);

  const removeFromWatchlist = useCallback((movie: IMovie) => {
    removeFromWatchlistStorage(movie);
    // Update the UI immediately
    setWatchlistMovies(prev => prev.filter(m => m.id !== movie.id));
  }, []);

  return {
    watchlistMovies,
    filter,
    orderAsc,
    toggleSortOrder,
    changeFilter,
    removeFromWatchlist,
  };
};

export default useFavoritesScreen;
