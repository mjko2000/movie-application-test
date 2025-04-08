import React, {memo} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Colors from '../constant/colors';
import Shadow from '../constant/shadow';
import {IMovie} from '../types';

type MovieItemProps = {
  movie: IMovie;
  onPress?: () => void;
  onRemove?: () => void;
};

const MovieItem = ({movie, onPress, onRemove}: MovieItemProps) => {
  const date = new Date(movie.releaseDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image source={{uri: movie.imageUrl}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {movie.description}
        </Text>
      </View>
      {onRemove && (
        <TouchableOpacity onPress={onRemove}>
          <Text>Remove</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default memo(MovieItem);

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    ...Shadow.normal,
  },
  image: {
    width: width * 0.27,
    height: 150,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: Colors.border,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
});
