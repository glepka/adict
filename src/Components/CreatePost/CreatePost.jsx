import React, { useState } from 'react';
import s from './CreatePost.module.css';

import { addPost } from '../../api/postsApi';
import usePostsStore from './../../store/store';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { posts, updatePosts } = usePostsStore();

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      id: Date.now(),
      userId: Math.floor(Math.random() * 101),
    };

    addPost(newPost)
      .then(() => {
        updatePosts([...posts, newPost]);
        setTitle('');
        setBody('');
      })
      .catch(() => {
        console.log('Пост не добавлен');
      });
  };

  return (
    <form className={s.form}>
      <h2 className={s.title}>Создать свой пост</h2>
      <input
        value={title}
        type="text"
        placeholder="Заголовок"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        value={body}
        placeholder="Текст"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />

      <button className={s.button} onClick={addNewPost}>
        Создать
      </button>
    </form>
  );
}
