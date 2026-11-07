// export import

function add(a, b) {
  return a + b;
}

// named export
export function subtract(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

//
export const pi = 3.14159;

// default export
export default add;
