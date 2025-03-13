import React from 'react';
import { Routes, Route } from 'react-router';

import Main from '../pages/Main/Main';
import PageWithPost from '../pages/PageWithPost/PageWithPost';

import s from './App.module.css';

export default function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="posts/:postId" element={<PageWithPost />} />
      </Routes>
    </div>
  );
}
