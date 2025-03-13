import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import s from './PageWithPost.module.css';
import { getPost, getPostComments } from '../../api/postsApi';
import Post from '../../Components/Post/Post';
import CommnetsList from '../../Components/CommnetsList/CommnetsList';

export default function PageWithPost() {
  let params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPost(params.postId).then((res) => {
      setPost(res.data);
    });

    getPostComments(params.postId).then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <div className={s.page}>
      <Post data={post} buttons={false} />
      <CommnetsList comments={comments} addComment={setComments} />
    </div>
  );
}
