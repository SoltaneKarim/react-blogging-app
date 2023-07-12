import React from "react";

const PostDetails = () => (
  <div className="blog-list-item">
      <div className="blog-list-item-title">Post Title</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author"> Post Author, </span>
        a day ago
      </div>
      <div className="blog-list-item-lede">
        <img src="https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" alt="no content" />
      </div>
    </div>
);

export default PostDetails;