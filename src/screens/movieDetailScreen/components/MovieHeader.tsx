import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {IMovie} from '@/types';
import Colors from '@/constant/colors';
import Shadow from '@/constant/shadow';
import FontAwesome from '@react-native-vector-icons/fontawesome';

const {width} = Dimensions.get('window');

type MovieHeaderProps = {
  movie: IMovie;
  onBackPress: () => void;
};

const MovieHeader = ({movie, onBackPress}: MovieHeaderProps) => {
  const scorePercentage = Math.round(movie.rating * 10);
  const formattedScoreText = movie.rating.toString().replace('.', '');
  const scoreColor =
    scorePercentage >= 70
      ? '#21d07a'
      : scorePercentage >= 40
      ? '#d2d531'
      : '#db2360';
  return (
    <View style={styles.headerContainer}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <FontAwesome name="chevron-left" size={20} color={Colors.white} />
        <Text style={styles.title}>
          {movie.title} ({new Date(movie.releaseDate).getFullYear()})
        </Text>
        <View />
      </TouchableOpacity>

      <View style={styles.headerContent}>
        <Image source={{uri: movie.imageUrl}} style={styles.posterImage} />
        <View style={styles.headerInfo}>
          <Text style={styles.rating}>{movie.details?.rating}</Text>
          <Text style={styles.releaseDate}>
            {movie.details?.releaseDate} • {movie.details?.runtime}
          </Text>
          <View style={styles.genreContainer}>
            {movie.genre.map((genre, index) => (
              <View key={index} style={styles.genreTag}>
                <Text style={styles.genreText}>{genre}</Text>
              </View>
            ))}
          </View>
          {movie.details?.tagline && (
            <Text style={styles.tagline}>{movie.details.tagline}</Text>
          )}

          <View style={styles.ratingContainer}>
            <View style={[styles.ratingCircle, {borderColor: scoreColor}]}>
              <Text style={styles.ratingText}>
                {formattedScoreText}
                <Text style={styles.ratingPercent}>%</Text>
              </Text>
            </View>
            <Text style={styles.userScoreText}>User Score</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    marginBottom: 16,
    backgroundColor: '#00B4E4',
  },
  backButton: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBackground: {
    position: 'relative',
    height: 200,
    width: '100%',
  },
  backdropImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(3, 37, 65, 0.8)',
  },
  headerContent: {
    flexDirection: 'row',
    padding: 16,
  },
  posterImage: {
    width: width * 0.3,
    height: width * 0.45,
    borderRadius: 8,
    ...Shadow.normal,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'flex-start',
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 14,
    color: Colors.white,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 4,
  },
  genreText: {
    fontSize: 12,
    color: Colors.white,
  },
  tagline: {
    fontSize: 14,
    fontStyle: 'italic',
    color: Colors.white,
    marginTop: 8,
  },
  rating: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    padding: 4,
    color: '#FFFFFFB2',
    borderColor: '#FFFFFFB2',
    borderStyle: 'dashed',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#032541',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  ratingText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  ratingPercent: {
    fontSize: 8,
  },
  userScoreText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MovieHeader;
