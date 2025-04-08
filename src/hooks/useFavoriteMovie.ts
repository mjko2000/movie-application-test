import {useCallback} from 'react';
import {Movies} from '@/constant/mockData';
import {IMovie} from '@/types';
import AppStorage from '@/utils/storage';
import {StorageKeys} from '@/constant/keys';
const useFavoriteMovie = () => {
  const loadWatchlistMovies = useCallback(() => {
    const watchlistIds = AppStorage.getItem(StorageKeys.WATCHLIST) || [];
    if (watchlistIds && watchlistIds.length > 0) {
      const moviesFromWatchlist = Movies.filter(movie =>
        watchlistIds.includes(movie.id.toString()),
      );

      return moviesFromWatchlist;
    } else {
      return [];
    }
  }, []);

  const addToWatchlist = (movie: IMovie) => {
    const watchlist = AppStorage.getItem(StorageKeys.WATCHLIST);
    if (watchlist) {
      AppStorage.setItem(StorageKeys.WATCHLIST, [
        ...watchlist,
        movie.id.toString(),
      ]);
    } else {
      AppStorage.setItem(StorageKeys.WATCHLIST, [movie.id.toString()]);
    }
  };

  const removeFromWatchlist = useCallback((movie: IMovie) => {
    const watchlistIds = AppStorage.getItem(StorageKeys.WATCHLIST) || [];
    const updatedWatchlist = watchlistIds.filter(
      (id: string) => id !== movie.id.toString(),
    );
    AppStorage.setItem(StorageKeys.WATCHLIST, updatedWatchlist);
  }, []);

  return {
    loadWatchlistMovies,
    removeFromWatchlist,
    addToWatchlist,
  };
};

export default useFavoriteMovie;
