class StorageData {
  getItem(key: string) {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    }
    return null;
  }
  setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}

export default new StorageData();
