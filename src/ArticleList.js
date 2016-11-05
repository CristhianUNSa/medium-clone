import React from 'react';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Cargando...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No hay publicaciones aún
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <h2>{article.title}</h2>
          );
        })
      }
    </div>
  );
};

export default ArticleList;