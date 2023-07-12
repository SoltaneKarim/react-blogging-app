import React from "react";

const OnePost = () => (
  <div className="blog-list-item" >
    <div className="blog-list-item-title">Post Title</div>
    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author"> Post Author, </span>
      some time ago
    </div>
    <div className="blog-list-item-lede"> Post Content.. </div>
  </div>
);

export default OnePost;