import axios from 'axios';

const getPosts = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts`);
};

const getPost = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

const addPost = (post) => {
  return axios.post(
    `https://jsonplaceholder.typicode.com/posts`,
    JSON.stringify(post),
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
};

const deletePost = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

const updatePost = (id) => {
  return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

const getPostComments = (id) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
};

export { getPosts, addPost, deletePost, getPostComments, getPost, updatePost };
