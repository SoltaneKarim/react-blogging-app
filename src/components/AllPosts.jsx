import React, { useState, useEffect } from "react";
import PostDetails from "./PostDetails.jsx";
import OnePost from "./OnePost.jsx";
import axios from "axios";

const AllPosts = () => {
  const [displayBlog, setDisplayBlog] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [blog, setBlog] = useState({})

  useEffect(() => {
    axios.get('https://react-blogging-app.onrender.com/api/blogs')
    .then(response => {
      setBlogs(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  const displayPost = (event) => {
    blogs.map((el, key) => {
      if(event.target.innerText === el.title) {
        setDisplayBlog(true)
        setBlog(el)
        return blog
      }
    })
  }

  return (
    <div className="all-post">
      {!displayBlog && blogs.map((element, key) => (
        <PostDetails key={key} element={element} onClick={displayPost}/>
      ))}
      {displayBlog &&
        (
          <OnePost title={blog.title} author={blog.author} content={blog.body} imageUrl={blog.imageUrl} published_at={blog.published_at}/>
        )
      }
    </div>
  )
}

export default AllPosts;