import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import images from '../images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const TopLogo = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.logoContainer, {paddingTop: insets.top}]}>
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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 80,
    height: 57.6,
  },
});

export default RootNavigation;
