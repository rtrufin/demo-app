const storageManager = () => {
  const setItem = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));
  const getItem = key => JSON.parse(window.localStorage.getItem(key));
  const removeItem = key => window.localStorage.removeItem(key);

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default storageManager();
