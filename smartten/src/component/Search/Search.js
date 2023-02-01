import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from './Search.css';
const keyAPI = 'YHKiS8PZt6nvkFcUTjEjpmnKrsqx971K';

const Search = () => {

    const [search, setSearch] = useState("");
    const [isliked, setIsLiked] = useState(false);
    const [posts, setPosts] = useState({
        url: '',
        id: '',
    }, []);

    const [postIsLiked, setPostIsLiked] = useState({
        url: '',
        id: '',
    }, []);

    const fetchPost = async () => {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${keyAPI}&q=${search}`);
        setPosts(data);
    };

    const handleSearch = (event) => {
        setSearch(event.value)
    }

    const handleLike = (postLiked) => {
        setPostIsLiked(postLiked);

    }

    useEffect(() => {
        fetchPost();
        console.log(postIsLiked)
    }, [search]);

    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="inputSearch" placeholder="Search Image" aria-label="Search Image" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" onClick={handleSearch} id="button-addon2">Search</button>
            </div>
            <div className='row'>
                {posts.data ?
                    (posts.data.map((post) => 
                        <div className='cardImage col-4 mb-5' key={post.id} >
                            <img src={post.images.original.url} className="boxImage m-2" alt="logo" />
                            <svg onClick={() => handleLike(post)} xmlns="http://www.w3.org/2000/svg" style={(postIsLiked.id==post.id) ? ({opacity: 1}) : ({opacity: 0.6})} width="30" height="30" fill="currentColor" className='bi bi-heart-fill iconLike' viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </div>
                    )) 
                    : 
                    <p>không tìm thấy kết quả</p>
                }
            </div>
        </>
    )
}

export default Search;
