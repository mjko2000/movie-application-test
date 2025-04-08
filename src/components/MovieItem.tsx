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
import FontAwesome from '@react-native-vector-icons/fontawesome';
import AppTouchable from './AppTouchable';
type MovieItemProps = {
  movie: IMovie;
  onPress?: (movie: IMovie) => void;
  onRemove?: (movie: IMovie) => void;
};

const MovieItem = ({movie, onPress, onRemove}: MovieItemProps) => {
  const date = new Date(movie.releaseDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <AppTouchable style={styles.container} onPress={() => onPress?.(movie)}>
      <Image source={{uri: movie.imageUrl}} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{movie.title}</Text>
          {onRemove && (
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => onRemove(movie)}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <FontAwesome name="times" size={16} color={Colors.gray} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {movie.description}
        </Text>
      </View>
    </AppTouchable>
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
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  removeButton: {
    padding: 4,
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
