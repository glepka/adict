import React from 'react';
import s from './Pagination.module.css';

export default function Pagination({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };
  return (
    <nav>
      <ul className={s.pagination}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={` ${s.number} ${currentPage === number ? s.active : ''}`}
          >
            <a onClick={(e) => paginate(number, e)} className={s.link}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
