import React, { useState } from 'react';
import s from './CommnetsList.module.css';

export default function CommnetsList({ comments, addComment }) {
  const [commentText, setCommentText] = useState('');

  const addMyComment = (e) => {
    e.preventDefault();

    const comment = {
      body: commentText,
      id: Date.now(),
      name: Math.floor(Math.random() * 101),
    };

    addComment([...comments, comment]);
    setCommentText('');
  };

  return (
    <ul className={s.list}>
      <h3>Комментарии</h3>

      <form action="" className={s.addCommentForm}>
        <h4>Добавить комментарий:</h4>
        <textarea
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        />
        <button onClick={addMyComment} className={s.addButton}>
          Добавить
        </button>
      </form>
      {comments.map((comment) => {
        return (
          <li key={comment.id} className={s.comment}>
            <p>Комментарий: {comment.body}</p>
            <p>Автор: {comment.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
