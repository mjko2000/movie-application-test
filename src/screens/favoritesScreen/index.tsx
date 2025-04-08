import React, {useCallback} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '@/constant/colors';
import MovieList from '@/components/MovieList';
import useFavoritesScreen from './hooks';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/types/navigation';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import {IMovie} from '@/types';
import Dropdown from '@/components/Dropdown';
import {MovieSortOptions} from '@/constant/mockData';
import AppTouchable from '@/components/AppTouchable';
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const FavoritesScreen = () => {
  const {
    watchlistMovies,
    filter,
    orderAsc,
    toggleSortOrder,
    changeFilter,
    removeFromWatchlist,
  } = useFavoritesScreen();

  const navigation = useNavigation<NavigationProp>();

  const navigateToMovie = useCallback((movie: IMovie) => {
    navigation.navigate('MovieDetail', {movie});
  }, []);

  const renderHeader = () => (
    <View style={styles.header}>
      {/* User Profile Section */}
      <View style={styles.userSection}>
        <View style={styles.userAvatar}>
          <Text style={styles.userInitial}>J</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Lee</Text>
          <Text style={styles.memberSince}>Member since August 2023</Text>
        </View>
      </View>

      {/* Watchlist Title */}
      <Text style={styles.watchlistTitle}>My Watchlist</Text>

      {/* Filter and Sort Options */}
      <View style={styles.filterContainer}>
        <View style={styles.filterOptions}>
          <Text style={styles.filterByText}>Filter by:</Text>
          <Dropdown
            options={MovieSortOptions}
            value={filter}
            onSelect={changeFilter}
            containerStyle={styles.dropdownContainer}
            placeholderStyle={styles.dropdownPlaceholder}
          />
        </View>

        <AppTouchable style={styles.orderButton} onPress={toggleSortOrder}>
          <Text style={styles.orderText}>Order:</Text>
          <FontAwesome
            name={orderAsc ? 'arrow-up' : 'arrow-down'}
            size={20}
            color="#000"
          />
        </AppTouchable>
      </View>
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateText}>
        You haven't added any movies to your watchlist yet.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <MovieList
        movies={watchlistMovies}
        onMoviePress={navigateToMovie}
        onRemove={removeFromWatchlist}
        renderTop={renderHeader}
        renderEmpty={renderEmpty}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    marginBottom: 16,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0d253f',
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8e44ad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInitial: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfo: {
    marginLeft: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  memberSince: {
    fontSize: 14,
    color: '#FFF',
    opacity: 0.8,
  },
  watchlistTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  filterByText: {
    marginRight: 8,
  },
  selectedFilterText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  orderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  orderText: {
    marginRight: 4,
  },
  emptyState: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.gray,
  },
  dropdownContainer: {
    flex: 1,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    elevation: 0,
  },
  dropdownPlaceholder: {
    fontSize: 14,
    fontWeight: '400',
  },
  backButton: {
    padding: 16,
  },
});

export default FavoritesScreen;
