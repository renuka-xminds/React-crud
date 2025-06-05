import axios from "axios";
import React, { useEffect, useState } from "react";


const ShowPost = () => {
    const [data, setData] = useState([]);
    const [error,setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch(error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
            <h2>Post Details</h2>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Body</th>
                </thead>
                <tbody>
                {data.map((post) => (
                    <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p>{error}</p>
        </div>
        
    );
}

export default ShowPost;