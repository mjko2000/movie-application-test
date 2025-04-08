import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import images from '../images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomTab from './bottomTab';
import MovieDetailScreen from '@/screens/movieDetailScreen';

const Stack = createNativeStackNavigator();

const TopLogo = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.logoContainer, {paddingTop: insets.top + 12}]}>
      <Image source={images.logo} style={styles.logo} />
    </View>
  );
};

const ScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <TopLogo />
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
  },
  logo: {
    width: 80,
    height: 57.6,
  },
});

export default RootNavigation;
