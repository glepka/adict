import React, { useEffect } from 'react';
import CreatePost from '../../Components/CreatePost/CreatePost';
import PostsList from '../../Components/PostsList/PostsList';

import s from './Main.module.css';
import usePostsStore from '../../store/store';
import { getPosts } from '../../api/postsApi';

export default function Main() {
  const { updatePosts, posts } = usePostsStore();

  useEffect(() => {
    getPosts()
      .then((res) => {
        updatePosts(res.data);
      })
      .catch(() => {
        console.log('Посты не загружены');
      });
  }, []);

  return (
    <div className={s.main}>
      <CreatePost />
      <PostsList buttons={true} posts={posts} />
    </div>
  );
}
