import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '@/constant/colors';
import {IMovie} from '@/types';

type MovieMetadataProps = {
  movie: IMovie;
};

const MovieMetadata = ({movie}: MovieMetadataProps) => {
  return (
    <View style={styles.metadataContainer}>
      <View style={styles.metadataItem}>
        <Text style={styles.metadataLabel}>Status</Text>
        <Text style={styles.metadataValue}>
          {movie.details?.status || 'N/A'}
        </Text>
      </View>
      <View style={styles.metadataItem}>
        <Text style={styles.metadataLabel}>Original Language</Text>
        <Text style={styles.metadataValue}>
          {movie.details?.originalLanguage || 'N/A'}
        </Text>
      </View>
      <View style={styles.metadataItem}>
        <Text style={styles.metadataLabel}>Director</Text>
        <Text style={styles.metadataValue}>
          {movie.details?.director || 'N/A'}
        </Text>
      </View>
      <View style={styles.metadataItem}>
        <Text style={styles.metadataLabel}>Writers</Text>
        <Text style={styles.metadataValue}>
          {Array.isArray(movie.details?.writer)
            ? movie.details?.writer.join(', ')
            : movie.details?.writer || 'N/A'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metadataContainer: {
    marginTop: 16,
  },
  metadataItem: {
    marginBottom: 12,
  },
  metadataLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 2,
  },
  metadataValue: {
    fontSize: 14,
    color: Colors.gray,
  },
});

export default MovieMetadata;
