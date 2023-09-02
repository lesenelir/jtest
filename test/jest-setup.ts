/**
 *  before run all test, this file will be executed first  !!!
 */

// // Add the localStorage property to the 'global' object in Node environment
// Object.defineProperty(global, 'localStorage', {
//   value: {
//     store: {} as Record<string, string>,
//     setItem(key: string, value: string) {
//       this.store[key] = value;
//     },
//     getItem(key: string) {
//       return this.store[key];
//     },
//     removeItem(key: string) {
//       delete this.store[key];
//     },
//     clear() {
//       this.store = {}
//     }
//   },
//   configurable: true,
// })
import 'jest-location-mock'
import '@testing-library/jest-dom/extend-expect'
