module.exports = {
  preset: 'jest-expo', // se usa Expo
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-clone-referenced-element|@react-navigation|expo(nent)?|@expo(nent)?|expo-modules|react-native-.*|@react-native-.*))',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
};
