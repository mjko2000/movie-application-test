import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '@/constant/colors';
import {IMovie} from '@/types';

type MovieOverviewProps = {
  movie: IMovie;
};

const MovieOverview = ({movie}: MovieOverviewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Overview</Text>
      <Text style={styles.description}>{movie.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.text,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.text,
  },
});

export default MovieOverview;
