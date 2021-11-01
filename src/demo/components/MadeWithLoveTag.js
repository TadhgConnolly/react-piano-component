/* eslint-disable no-trailing-spaces */
import React from 'react';
import './MadeWithLoveTag.css';

function Heart() {
  return <span className={'made-with-love-tag__heart'}>♥</span>;
}

export default function MadeWithLoveTag() {
  return (
    <div className={'made-with-love-tag'}>
      made with <Heart /> by {' '}
      <a className={'made-with-love-tag__author-link'}
        href={'https://github.com/TadhgConnolly'}
      >
      Tadhg
      </a>
      {' '}and{' '}
      <a className={'made-with-love-tag__author-link'}
        href={'https://github.com/JBerben'}
      >
       Josh
      </a>
    </div>
  );
}
