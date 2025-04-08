import {IMovie} from './index';

export type RootStackParamList = {
  BottomTab: undefined;
  MovieDetail: {movie: IMovie};
};

export type BottomTabParamList = {
  Home: undefined;
  Favorites: undefined;
};
