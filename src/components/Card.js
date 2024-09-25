import React from 'react';
import articleImage from '../assets/img/illustration-article.svg';
import avatarImage from '../assets/img/image-avatar.webp';
import './Card.css';

const Header = () => {
  return (
    <section id="card" aria-labelledby="card-title">
      <article className="card">
        <img src={articleImage} className="img-card" alt="Figura decorativa com desenhos abstratos e símbolo de codificação " />
        <p className="tag">Learning</p>
        <p className="publish-info">Published 21 Dec 2023</p>
        <h1 className='title'>HTML & CSS foundations</h1>
        <p className="text">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="presentation">
          <img src={avatarImage} alt="imagem de um homem" className='img-user' />
          <p className='name-user'>Greg Hooper</p>
        </div>
      </article>
    </section>
  );
};

export default Header;
