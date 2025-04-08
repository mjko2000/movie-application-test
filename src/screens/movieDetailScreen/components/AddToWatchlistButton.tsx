import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '@/constant/colors';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import AppTouchable from '@/components/AppTouchable';

type AddToWatchlistButtonProps = {
  onPress: () => void;
  isInWatchlist: boolean;
};

const AddToWatchlistButton = ({
  onPress,
  isInWatchlist,
}: AddToWatchlistButtonProps) => {
  if (isInWatchlist) {
    return (
      <AppTouchable
        style={[styles.addToWatchlistButton, styles.inWatchlistButton]}
        onPress={onPress}>
        <FontAwesome name="check" color={Colors.white} size={16} />
        <Text style={styles.addToWatchlistText}>Added to Watchlist</Text>
      </AppTouchable>
    );
  }

  return (
    <AppTouchable style={styles.addToWatchlistButton} onPress={onPress}>
      <FontAwesome name="bookmark" color={Colors.white} size={16} />
      <Text style={styles.addToWatchlistText}>Add To Watchlist</Text>
    </AppTouchable>
  );
};

const styles = StyleSheet.create({
  addToWatchlistButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#032541',
    paddingVertical: 12,
    margin: 16,
    borderRadius: 8,
  },
  inWatchlistButton: {
    backgroundColor: '#21d07a',
  },
  addToWatchlistText: {
    color: Colors.white,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default AddToWatchlistButton;
