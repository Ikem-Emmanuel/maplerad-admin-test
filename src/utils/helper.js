export const formatCurrencyDecimal = (num) => {
  const roundedFig = num.toFixed(2);
  return roundedFig.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const get = (path, obj, defaultVal) => {
  const returnable = path.split(".").reduce((acc, i) => {
    return acc === null ? undefined : acc && acc[i];
  }, obj || {});
  return returnable === undefined ? defaultVal : returnable;
};

export function getStatusCode(error, custom) {
  return (
    get("response.data.status", error) ||
    get("response.data.code", error) ||
    get("status", error) ||
    custom
  );
}

export function getErrorMessage(error, custom) {
  return (
    get("response.data.message", error) ||
    get("message", error) ||
    get("response.message", error) ||
    custom
  );
}

export const getStorage = (key) => {
  const value = localStorage.getItem(key);
  return value;
};

export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const clearStorage = () => {
  localStorage.clear();
};
