import React, {memo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {IMovie} from '../types';
import MovieItem from './MovieItem';

type MovieListProps = {
  movies: IMovie[];
  onMoviePress?: (movie: IMovie) => void;
  onRemove?: (movie: IMovie) => void;
  renderTop?: () => React.ReactNode;
  renderEmpty?: () => React.ReactNode;
};

const MovieList = ({
  movies,
  onMoviePress,
  onRemove,
  renderTop,
  renderEmpty,
}: MovieListProps) => {
  const renderItem = ({item}: {item: IMovie}) => (
    <MovieItem movie={item} onPress={onMoviePress} onRemove={onRemove} />
  );
  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={renderTop}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmpty}
    />
  );
};

export default memo(MovieList);

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});
