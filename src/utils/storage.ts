import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const setItem = (key: string, value: string | Object | Array<any>) => {
  let saveValue = '';
  try {
    saveValue = JSON.stringify(value);
  } catch {
    if (typeof value === 'string') {
      saveValue = value;
    }
  }
  storage.set(key, saveValue);
};

const getItem = (key: string) => {
  const value = storage.getString(key) as string;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

const removeItem = (key: string) => {
  storage.delete(key);
};

const AppStorage = {
  setItem,
  getItem,
  removeItem,
};

export default AppStorage;
