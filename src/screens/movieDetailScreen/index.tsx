import React, {useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Colors from '@/constant/colors';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/types/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MovieHeader,
  MovieOverview,
  MovieMetadata,
  CastSection,
  AddToWatchlistButton,
} from './components';
import AppStorage from '@/utils/storage';
import {StorageKeys} from '@/constant/keys';
import useFavoriteMovie from '@/hooks/useFavoriteMovie';
type MovieDetailRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;
type MovieDetailNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MovieDetailScreen = () => {
  const route = useRoute<MovieDetailRouteProp>();
  const navigation = useNavigation<MovieDetailNavigationProp>();
  const {movie} = route.params;

  const {addToWatchlist, removeFromWatchlist} = useFavoriteMovie();

  const [isInWatchlist, setIsInWatchlist] = useState(() => {
    const watchlist = AppStorage.getItem(StorageKeys.WATCHLIST);
    return watchlist?.includes(movie.id.toString());
  });

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAddToWatchlist = () => {
    addToWatchlist(movie);
    setIsInWatchlist(true);
  };

  const handleRemoveFromWatchlist = () => {
    removeFromWatchlist(movie);
    setIsInWatchlist(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <MovieHeader movie={movie} onBackPress={handleBackPress} />

        <View style={styles.detailsContainer}>
          <MovieOverview movie={movie} />
          <MovieMetadata movie={movie} />
        </View>

        <CastSection cast={movie.cast || []} />
      </ScrollView>

      <AddToWatchlistButton
        onPress={
          isInWatchlist ? handleRemoveFromWatchlist : handleAddToWatchlist
        }
        isInWatchlist={isInWatchlist}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: Colors.white,
  },
});

export default MovieDetailScreen;
