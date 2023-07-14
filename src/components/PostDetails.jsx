import React from "react";

const PostDetails = (props) => (
  <div className="blog-list-item">
      <div className="blog-list-item-title" onClick={props.onClick}>{props.element.title}</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author"> {props.element.author}, </span>
        {props.element.published_at}
      </div>
      <div className="blog-list-item-lede">
        <img src={props.element.imageUrl} alt={props.element.title} />
        <p>{props.element.body}</p>
      </div>
    </div>
);


export default PostDetails;