import FavoritesScreen from '@/screens/favoritesScreen';
import HomeScreen from '@/screens/homeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import Colors from '@/constant/colors';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#032541',
        },
        tabBarInactiveTintColor: Colors.white,
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: FavoritesTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeTabIcon = ({color, size}: {color: string; size: number}) => (
  <FontAwesome name="home" color={color} size={size} />
);

const FavoritesTabIcon = ({color, size}: {color: string; size: number}) => (
  <FontAwesome name="bookmark" color={color} size={size} />
);

export default BottomTab;
