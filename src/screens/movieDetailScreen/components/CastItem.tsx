import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ICastMember} from '@/types';
import Colors from '@/constant/colors';
import Shadow from '@/constant/shadow';

type CastItemProps = {
  cast: ICastMember;
};

const CastItem = ({cast}: CastItemProps) => {
  return (
    <View style={styles.castItemContainer}>
      <Image source={{uri: cast.imageUrl}} style={styles.castImage} />
      <Text style={styles.castName} numberOfLines={1}>
        {cast.name}
      </Text>
      <Text style={styles.castCharacter} numberOfLines={1}>
        {cast.character}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  castItemContainer: {
    width: 120,
    marginRight: 12,
    ...Shadow.light,
    backgroundColor: Colors.white,
    borderRadius: 8,
    overflow: 'hidden',
  },
  castImage: {
    width: 120,
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  castName: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 8,
    color: Colors.text,
  },
  castCharacter: {
    fontSize: 12,
    color: Colors.gray,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default CastItem;
