import axios from "axios";
import React, { useEffect, useState } from "react";


const ShowPost = () => {
    const [data, setData] = useState([]);
    const [error,setError] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [form, setForm] = useState({ title: '', body: '' });
    const [editingPost, setEditingPost] = useState(null);


    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch(error) {
            setError(error.message);
        }
    };

    const handlerDelete = async (id) => {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setResponseMessage("Deleted");
            setData(data.filter(post => post.id !== id));
        } catch(error) {
            setError(error.message);
        }
    };

    const viewPost = (id) => {
        const post = data.find(p => p.id === id);
        setEditingPost(id);
        setForm({ title: post.title, body: post.body });
      };


      const handleUpdate = async () => {
        try {
          const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${editingPost}`, form);
          setResponseMessage("Post updated");
    
          setData(data.map(post => post.id === editingPost ? { ...post, ...form } : post));
          setEditingPost(null);
          setForm({ title: '', body: '' });
        } catch (error) {
          setError(error.message);
        }
      };

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
            <h2>Post Details</h2>

            {editingPost && (
                <div style={{ marginBottom: '20px' }}>
                <h3>Update Post ID: {editingPost}</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <br />
                <textarea
                    placeholder="Body"
                    value={form.body}
                    onChange={(e) => setForm({ ...form, body: e.target.value })}
                ></textarea>
                <br />
                <button onClick={handleUpdate}>Update</button>
                </div>
            )}

            <h2>Post Details</h2>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </thead>
                <tbody>
                {data.map((post) => (
                <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                    <button onClick={() => handlerDelete(post.id)}>Delete</button>
                    <button onClick={() => viewPost(post.id)}>View</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            {responseMessage && <p style={{ color: 'green' }}>{responseMessage}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        
    );
}

export default ShowPost;