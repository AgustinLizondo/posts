// Post.test.tsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { PostProps } from '../components/Post/types';
import Post from '../components/Post';

describe('Post component renders properly', () => {
  const props: PostProps = {
    item: {
      id: 1,
      title: 'title',
      content: 'contentc',
      image: 'https://example.com/image.jpg',
      publishedAt: '2024-29-11',
      slug: 'slug',
      status: 'published',
      thumbnail: 'https://example.com/thumbnail.jpg',
      category: 'category',
      updatedAt: '2024-29-11',
      url: 'https://example.com/post',
      userId: 1
    },
    isFavorite: false,
    onFavoritePress: jest.fn(),
    onPress: jest.fn(),
  };

  it('renders title', () => {
    const { getByText } = render(<Post {...props} />);
    expect(getByText(props.item.title)).toBeTruthy();
  });

  it('renders content', () => {
    const { getByText } = render(<Post {...props} />);
    expect(getByText(props.item.content)).toBeTruthy();
  });

  it('renders image properly', () => {
    const { getByTestId } = render(<Post {...props} />);
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders publishedAt', () => {
    const { getByText } = render(<Post {...props} />);
    expect(getByText(props.item.publishedAt)).toBeTruthy();
  });

  it('calls onFavoritePress when button is pressed', () => {
    const { getByTestId } = render(<Post {...props} />);
    const favoriteButton = getByTestId('favorite-button');
    fireEvent.press(favoriteButton);
    expect(props.onFavoritePress).toHaveBeenCalledTimes(1);
  });

  it('renders the bookmark filled icon when isFavorite ', () => {
    props.isFavorite = true;
    const { getByTestId } = render(<Post {...props} />);
    expect(getByTestId('bookmark-icon')).toBeTruthy();
  });

  it('renders the bookmark outline icon when !isFavorite', () => {
    props.isFavorite = false;
    const { getByTestId } = render(<Post {...props} />);
    expect(getByTestId('bookmark-outline-icon')).toBeTruthy();
  });

  it('navigates to the post detailspage on press', async () => {
    const { getByTestId } = render(<Post {...props} />);
    const post = getByTestId('post');
    fireEvent.press(post);
    await waitFor(() => expect(props.onPress).toHaveBeenCalled());
  });

  it('calls onPress when onPress', async () => {
    const { getByTestId } = render(<Post {...props} />);
    const post = getByTestId('post');
    fireEvent.press(post);
    await waitFor(() => expect(props.onPress).toHaveBeenCalled());
  });
});