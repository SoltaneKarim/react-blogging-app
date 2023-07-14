import React from "react";

const OnePost = (props) => {
  return (
    <div className="blog-list-item" >
      <div className="blog-list-item-title">{props.title}</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author">{props.author}, </span>
        {props.published_at}
      </div>
      <div className="blog-list-item-lede">
        <img src={props.imageUrl} alt="no content" />
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default OnePost;