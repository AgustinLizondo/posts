jest.mock('expo-font', () => ({
  loadAsync: jest.fn(() => Promise.resolve()),
  isLoaded: jest.fn(() => true),
}));

jest.mock('expo-router', () => ({
  isReady: jest.fn(() => true),
  useRoiute: jest.fn(() => ({
    params: {},
  })),
  useRouteInfo: jest.fn(() => ({
    pathname: '/'
  })),
  router: {
    navigate: jest.fn(),
  },
}))

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));
