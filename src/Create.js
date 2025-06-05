import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { createPortal } from "react-dom";

const CreatePost = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [responseMessage, setResponseMessage] = useState('');

   const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            title,
            body,
        };

        axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
        .then((response) => {
            setResponseMessage("Post created successfully!");
        })
        .catch((err) => {
            setResponseMessage("Error creating post");
        });
    }

    return (
        <div>
            <h2>Create Post Body</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br/>
                <label>Body</label>
                <textarea name="body" value={body}
                    onChange={(e) => setBody(e.target.value)} />
                <br></br>
                <button type="submit"> Create Post</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

export default CreatePost;