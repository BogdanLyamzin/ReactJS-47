import {useState, useEffect} from "react";

import PostList from "./PostList";
import ErrorBoundry from "../../shared/components/ErrorBoundary/ErrorBoundary";

import {getPosts} from "../../shared/services/posts";

const Posts = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchPosts = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
                error: null
            }));

            try {
                const data = await getPosts();
                setState(prevState => ({
                    ...prevState,
                    items: data,
                    loading: false
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loaing: false,
                    error,
                }))
            }
        };

        fetchPosts();
    }, [setState]);

    const {items, loading, error} = state;

    return (
        <>
            {error && <p>Не удалось загрузить посты</p>}
            <ErrorBoundry message={<p>Не удалось отрисовать посты</p>}>
                <PostList items={items}/>
            </ErrorBoundry>
            {loading && <p>...Loading</p>}
        </>
    )
}

export default Posts
