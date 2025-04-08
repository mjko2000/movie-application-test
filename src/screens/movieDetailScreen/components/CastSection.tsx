import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Colors from '@/constant/colors';
import {ICastMember} from '@/types';
import CastItem from './CastItem';

type CastSectionProps = {
  cast: ICastMember[];
};

const CastSection = ({cast}: CastSectionProps) => {
  if (!cast || cast.length === 0) return null;

  return (
    <View style={styles.castContainer}>
      <Text style={styles.sectionTitle}>Top Billed Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.castList}>
        {cast.map((castMember, index) => (
          <CastItem key={index} cast={castMember} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  castContainer: {
    padding: 16,
    paddingBottom: 24,
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.text,
  },
  castList: {
    paddingVertical: 8,
  },
});

export default CastSection;
