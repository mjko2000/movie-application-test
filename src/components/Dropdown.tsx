import {StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState, useRef, memo} from 'react';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import AppTouchable from './AppTouchable';
import Shadow from '../constant/shadow';
import Colors from '../constant/colors';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options?: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  value?: string;
}

const Dropdown = ({
  options = [],
  onSelect,
  placeholder = 'Select an option',
  value,
}: SelectProps) => {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    value || null,
  );
  const [buttonPosition, setButtonPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const buttonRef = useRef<View>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setShow(false);
  };

  const measureButton = () => {
    if (buttonRef.current) {
      buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
        setButtonPosition({x: pageX, y: pageY, width, height});
      });
    }
  };

  return (
    <View style={styles.container}>
      <View
        ref={buttonRef}
        onLayout={measureButton}
        style={styles.buttonContainer}>
        <AppTouchable
          onPress={() => {
            measureButton();
            setShow(true);
          }}
          style={[styles.button, show && styles.activeButton]}>
          <Text style={styles.buttonText}>
            {selectedValue
              ? options.find(opt => opt.value === selectedValue)?.label
              : placeholder}
          </Text>
          <FontAwesome name="chevron-down" size={16} color="black" />
        </AppTouchable>
      </View>
      <Modal
        visible={show}
        transparent
        animationType="fade"
        onRequestClose={() => setShow(false)}>
        <AppTouchable
          style={styles.modalOverlay}
          onPress={() => setShow(false)}>
          <View
            style={[
              styles.modalContent,
              {
                top: buttonPosition.y + buttonPosition.height,
                left: buttonPosition.x,
                width: buttonPosition.width,
              },
            ]}>
            <View style={styles.dropdown}>
              {options.map(option => {
                const isSelected = selectedValue === option.value;
                return (
                  <AppTouchable
                    key={option.value}
                    onPress={() => handleSelect(option.value)}
                    style={[
                      styles.optionItem,
                      isSelected && styles.selectedOption,
                    ]}>
                    <Text
                      style={[
                        styles.optionText,
                        isSelected && styles.activeText,
                      ]}>
                      {option.label}
                    </Text>
                  </AppTouchable>
                );
              })}
            </View>
          </View>
        </AppTouchable>
      </Modal>
    </View>
  );
};

export default memo(Dropdown);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    ...Shadow.normal,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },
  activeButton: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  modalOverlay: {
    flex: 1,
  },
  modalContent: {
    position: 'absolute',
    maxHeight: 300,
  },
  dropdown: {
    backgroundColor: 'white',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    ...Shadow.normal,
    padding: 16,
    gap: 8,
  },
  optionItem: {
    backgroundColor: '#F8F8F8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 3,
  },
  activeText: {
    color: Colors.white,
  },
  selectedOption: {
    backgroundColor: Colors.primary,
  },
  optionText: {
    fontSize: 14,
    color: Colors.text,
  },
});
