import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

type AppTouchableProps = React.PropsWithChildren<{
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}>;

const AppTouchable = ({
  children,
  onPress,
  style,
  disabled = false,
}: AppTouchableProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={style}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

export default AppTouchable;
