import React from "react";


const AllPosts = () => (
  <div className="all-post">
    <div className="blog-list-item">
      <div className="blog-list-item-title">Post Title 1</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author"> John Doe, </span>
        a day ago
      </div>
      <div className="blog-list-item-lede">
        <img src="https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" alt="no content" />
      </div>
    </div>
    <div className="blog-list-item">
      <div className="blog-list-item-title">Post Title 2</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author"> John Doe, </span>
        2 days ago
      </div>
      <div className="blog-list-item-lede">
        <img src="https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" alt="no content" />
      </div>
    </div>
    <div className="blog-list-item">
      <div className="blog-list-item-title">Post Title 3</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author"> John Doe, </span>
        3 days ago
      </div>
      <div className="blog-list-item-lede">
        <img src="https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" alt="no content" />
      </div>
    </div>
  </div>
);

export default AllPosts;