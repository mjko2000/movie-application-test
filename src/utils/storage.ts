import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const setItem = (key: string, value: string) => {
  storage.set(key, value);
};

const getItem = (key: string) => {
  return storage.getString(key);
};

const removeItem = (key: string) => {
  storage.delete(key);
};

const Storage = {
  setItem,
  getItem,
  removeItem,
};

export default Storage;
