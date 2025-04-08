import {StyleSheet, Text} from 'react-native';
import React from 'react';
import AppTouchable from './AppTouchable';
import Colors from '../constant/colors';
type AppTextButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

const AppTextButton = ({
  text,
  onPress,
  disabled = false,
}: AppTextButtonProps) => {
  return (
    <AppTouchable
      style={[styles.container, disabled && styles.disabledContainer]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, disabled && styles.disabledText]}>{text}</Text>
    </AppTouchable>
  );
};

export default AppTextButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 40,
  },
  disabledContainer: {
    backgroundColor: Colors.lightGray,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
  disabledText: {
    color: Colors.gray,
  },
});
