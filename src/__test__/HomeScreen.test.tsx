import { act, render } from '@testing-library/react-native';
import Home from '../app';

describe('homescreen', () => {
  it('renders input comp', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('search-input')).toBeTruthy();
  });
  
  it('renders flatlist', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('flatlist')).toBeTruthy();
  })
});
