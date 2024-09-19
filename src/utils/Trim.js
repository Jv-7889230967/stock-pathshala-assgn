export function Trim(str, maxLength) {
    // Check if the string length is greater than the max length
    if (str.length > maxLength) {
      // Trim the string and append three dots
      return str.substring(0, maxLength) + '...';
    }
    // Return the original string if it's within the max length
    return str;
  }