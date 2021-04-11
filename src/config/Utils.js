/**
 * Set localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  return window.localStorage.setItem(name, content)
}

/**
  * Get localStorage
*/
export const getStore = (name) => {
  if (!name) return
  return JSON.parse(window.localStorage.getItem(name))
}

/**
 * Clear localStorage
*/
export const removeItem = (name) => {
  if (!name) return
  return window.localStorage.removeItem(name)
}

/**
 * Capitalize Letter
 */
export const capitalizeFirstLetter = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * First Letter Lowercase Letter
 */
export const lowercaseFirstLetter = (value) => {
  return value.charAt(0).toLowerCase() + value.slice(1)
}

/**
 * Format Phone Number (111) 222-3333
 */
export const formatPhoneNumber = (value) => {
  console.log(value)
  if (!value) return
  const currentValue = value.replace(/[^\d]/g, '');
  console.log(currentValue)
  const mobileNoLength = currentValue.length;
  if (mobileNoLength >=7) {
    if (mobileNoLength < 4) return currentValue;
    if (mobileNoLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
  } else{
    return currentValue;
  }
}