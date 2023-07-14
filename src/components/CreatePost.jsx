import React, { useState } from "react";
import axios from "axios"

function CreatePost() {
const [title,setTitle] = useState("")
const [author] = useState(window.location.search.substring(10))
const [body,setBody] = useState("")
const [imageUrl] = useState("https://cdn-uploads.gameblog.fr/img/news/425728_6464b0ee66254.jpg")

const publish = () => {
  axios.post('https://react-blogging-app.onrender.com/api/blogs', { title, author, body, imageUrl })
  .then(response => {
    return response.data
  })
  .catch(error => {
    console.error(error)
  })
} 

  return (
    <div className="blog-list-item">
    <h1 className="New-Post-Title">New Post</h1>
    <form className="New-Post-Form">
      <input 
        id="title"
        type="text"
        className="search"
        placeholder="Title"
        required
        minLength="3"
        defaultValue={title}
        onChange={(event)=>{
          setTitle(event.target.value)
        }}
      />

      <textarea
        id="content"
        className="post "
        placeholder="Content..."
        required
        minLength="20"
        defaultValue={body}
        onChange={(event)=>{
          setBody(event.target.value)
        }}
      />

      <input
        className="btn btn-secondary searchButton"
        type="button"
        value="Publish"
        onClick={publish}
      />
    </form>
  </div>
  )}



export default CreatePost;