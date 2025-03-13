import { create } from 'zustand';

const usePostsStore = create((set) => ({
  posts: [],
  updatePosts: (posts) => set(() => ({ posts: posts })),
}));

export default usePostsStore;
