import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostsList from './PostsList';

jest.mock('../Post/Post', () => () => <div>Post Component</div>);

describe('PostsList Component', () => {
  const mockPosts = [
    { id: 1, title: 'Post 1', body: 'Body 1', userId: 1 },
    { id: 2, title: 'Post 2', body: 'Body 2', userId: 2 },
    { id: 3, title: 'Post 3', body: 'Body 3', userId: 3 },
  ];

  test('Проверка рендера постов', () => {
    render(<PostsList buttons={true} posts={mockPosts} />);

    const postElements = screen.getAllByText(/Post Component/i);
    expect(postElements.length).toBe(mockPosts.length);
  });

  test('Проверка логики поиска', () => {
    render(<PostsList buttons={true} posts={mockPosts} />);
    const searchInput = screen.getByPlaceholderText(/Поиск/i);
    fireEvent.change(searchInput, { target: { value: 'Post 1' } });
    const postElements = screen.getAllByText(/Post Component/i);
    expect(postElements.length).toBe(1);
    expect(screen.queryByText(/Post 2/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Post 3/i)).not.toBeInTheDocument();
  });
});
