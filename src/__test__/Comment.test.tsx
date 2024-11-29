import React from 'react';
import { render } from '@testing-library/react-native';
import Comment from '../components/Comment';

describe('Comment comp', () => {
  const props = {
    avatar: 'https://example.com/avatar.jpg',
    comment: 'comment',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@gmail.com',
    phone: '1234567890¿',
  };

  it('renders the avatar properyl', () => {
    const { getByTestId } = render(<Comment {...props} />);
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('renders the comment', () => {
    const { getByText } = render(<Comment {...props} />);
    expect(getByText(props.comment)).toBeTruthy();
  });

  it('renders the user data', () => {
    const { getByTestId } = render(<Comment {...props} />);
    expect(getByTestId('user-data')).toBeTruthy();
  });
});