import React, {memo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {IMovie} from '../types';
import MovieItem from './MovieItem';

type MovieListProps = {
  movies: IMovie[];
  onMoviePress?: (movie: IMovie) => void;
  onRemove?: (movie: IMovie) => void;
};

const MovieList = ({movies, onMoviePress, onRemove}: MovieListProps) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <MovieItem
          movie={item}
          onPress={() => onMoviePress && onMoviePress(item)}
          onRemove={onRemove}
        />
      )}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default memo(MovieList);

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});
