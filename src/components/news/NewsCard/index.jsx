import React from "react";

function NewsCard({ news }) {
  const onTagClick = (tag) => {
    window.location.replace(`http://localhost:3000/news?search=${tag}&page=1`);
  };

  return (
    <div className="card">
      <a href={news.webUrl} target="_blank" rel="noopener noreferrer">
        <div className="card-image">
          <img src={news.fields.thumbnail} alt={news.webTitle} />
        </div>
      </a>
      <div className="card-content">
        <a href={news.webUrl} target="_blank" rel="noopener noreferrer">
          <h2 className="card-title">{news.webTitle}</h2>
        </a>
        <p className="card-description">{news.fields.headline}</p>
        <div className="card-tags">
          {news.tags.slice(0, 5).map((tag) => (
            <span
              key={tag.id}
              className="tag"
              onClick={() => onTagClick(tag.webTitle)}
            >
              {tag.webTitle}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
