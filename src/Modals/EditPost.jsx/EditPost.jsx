import React, { useState } from 'react';
import s from './EditPost.module.css';
import usePostsStore from '../../store/store';
import { updatePost } from '../../api/postsApi';

export default function EditPost({ post, onClose }) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const { posts, updatePosts } = usePostsStore();

  const editPost = (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
      id: post.id,
      userId: post.userId,
    };

    const newPostsArray = posts;
    newPostsArray[post.id - 1] = newPost;

    updatePost(post.id)
      .then(() => {
        updatePosts([...newPostsArray]);
      })
      .catch(() => {
        console.log('Пост не обновлен');
      })
      .finally(() => {
        onClose();
      });
  };

  const closeModal = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={s.overlay}>
      <form action="" className={s.form}>
        <h3>Редактировать пост</h3>
        <h4>Заголовок:</h4>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <h4>Текст:</h4>
        <textarea
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <button onClick={editPost} className={`${s.button} ${s.edit}`}>
          Редактировать
        </button>
        <button onClick={closeModal} className={`${s.button} ${s.cancel}`}>
          Отменить
        </button>
      </form>
    </div>
  );
}
