import React, { useState } from 'react';
import s from './Post.module.css';
import { useNavigate } from 'react-router';

import { deletePost } from '../../api/postsApi';
import usePostsStore from '../../store/store';
import EditPost from '../../Modals/EditPost.jsx/EditPost';

export default function Post({ data, buttons }) {
  const [editModal, setEditModal] = useState(false);
  const { posts, updatePosts } = usePostsStore();
  const navigate = useNavigate();

  const closeModal = () => {
    setEditModal(false);
  };

  const deleteThisPost = (id) => {
    deletePost(id)
      .then(() => {
        updatePosts(posts.filter((post) => post.id !== id));
      })
      .catch(console.log('Ошибка при удалении поста'));
  };

  return (
    <div className={s.post}>
      <h3 className={s.title}>{data.title}</h3>
      <p className={s.text}>{data.body}</p>
      <p className={s.author}>ID автора : {data.userId}</p>
      <p className={s.id}>ID поста: {data.id}</p>
      {buttons && (
        <div className={s.buttonContainer}>
          <button
            className={`${s.button} ${s.delete}`}
            onClick={() => {
              deleteThisPost(data.id);
            }}
          >
            Удалить
          </button>
          <button
            className={`${s.button} ${s.edit}`}
            onClick={() => {
              setEditModal(true);
            }}
          >
            Редактировать
          </button>
          <button
            className={`${s.button} ${s.more}`}
            onClick={() => {
              navigate(`/posts/${data.id}`);
            }}
          >
            Подробнее
          </button>
        </div>
      )}
      {editModal && (
        <EditPost post={data} open={editModal} onClose={closeModal} />
      )}
    </div>
  );
}
