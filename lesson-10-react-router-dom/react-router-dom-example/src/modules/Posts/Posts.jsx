import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import { getPosts } from './../../shared/api/posts';

const Posts = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
    
                const result = await getPosts();
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...result]
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                    }
                })
            }
        };

        fetchPosts();
    }, [setState]);

    const {items, loading, error} = state;

    const elements = items.map(({id, title}) => <li key={id}>
        <Link to={`/posts/${id}`}>{title}</Link>
    </li>)

    return (
        <div>
            <ol>{elements}</ol>
            {loading && <p>...load posts</p>}
            {error && <p>...Posts load failed</p>}
        </div>
        
    )
}

export default Posts;