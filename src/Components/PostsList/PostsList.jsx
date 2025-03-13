import React, { useMemo, useState } from 'react';
import Post from '../Post/Post';
import s from './PostsList.module.css';
import Pagination from '../Pagination/Pagination';

export default function PostsList({ buttons, posts }) {
  const [searchPost, setSearchPost] = useState('');
  const [selectAuthor, setSelectAuthor] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const selectPosts = useMemo(() => {
    if (selectAuthor) {
      return posts.filter((post) => post.userId == selectAuthor);
    } else {
      return posts;
    }
  }, [posts, selectAuthor]);

  const searchedPosts = useMemo(() => {
    if (selectPosts) {
      return selectPosts.filter((post) => post.title.includes(searchPost));
    }
    return [];
  }, [selectPosts, searchPost]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <h3>Поиск по заголовку:</h3>
      <input
        type="text"
        placeholder="Поиск"
        value={searchPost}
        onChange={(e) => {
          setSearchPost(e.target.value);
        }}
      />

      <h3>Поиск по автору:</h3>
      <select
        name="author"
        id="author"
        value={selectAuthor}
        onChange={(e) => setSelectAuthor(e.target.value)}
      >
        <option value={''}>Все</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>

      <h3>Посты: </h3>
      <ul className={s.postList}>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <Post data={post} buttons={buttons} />
          </li>
        ))}
      </ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={searchedPosts.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
