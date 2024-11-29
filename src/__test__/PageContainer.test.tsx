import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import PageContainer from '../components/PageContainer';

describe('PageContainer comp', () => {
  it('renders', () => {
    const { getByTestId } = render(<PageContainer />);
    expect(getByTestId('container')).toBeTruthy();
  });

  it('render children', () => {
    const children = <Text>Hello World!</Text>;
    const { getByText } = render(<PageContainer>{children}</PageContainer>);
    expect(getByText('Hello World!')).toBeTruthy();
  });

  it('adds className to default one', () => {
    const className = 'my-class';
    const { getByTestId } = render(<PageContainer className={className} />);
    expect(getByTestId('container').props.className).toContain(className);
  });

  it('applies styles', () => {
    const style = { backgroundColor: 'red' };
    const { getByTestId } = render(<PageContainer style={style} />);
    expect(getByTestId('container').props.style.backgroundColor).toBe(style.backgroundColor);
  });
});