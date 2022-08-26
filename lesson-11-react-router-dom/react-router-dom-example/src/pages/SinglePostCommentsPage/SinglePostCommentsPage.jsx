import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";

import { getPostComments } from "../../shared/api/posts";

const SinglePostCommentsPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });
    const {id} = useParams();

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
    
                const result = await getPostComments(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: result,
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

    const {items} = state;

    const elements = items.map(({id, name, email, body}) => (
        <li key={id}>
            <p>Name: {name}. Email: {email}</p>
            {body}
        </li>
    ))

    return (
        <div className="container">
            <ul>{elements}</ul>
        </div>
    )
}

export default SinglePostCommentsPage;