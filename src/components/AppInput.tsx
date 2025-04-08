import {StyleSheet, TextInput} from 'react-native';
import React, {memo} from 'react';
import Colors from '../constant/colors';
import Shadow from '../constant/shadow';
type AppInputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

const AppInput = ({placeholder, value, onChangeText}: AppInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default memo(AppInput);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    ...Shadow.normal,
  },
});
