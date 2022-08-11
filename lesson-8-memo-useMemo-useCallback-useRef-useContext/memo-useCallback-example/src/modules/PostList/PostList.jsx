import { useState, useEffect } from "react";

import { getPosts } from "../../shared/services/posts";

import styles from "./post-list.module.css";

const PostList = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
                error: null
            }));

            try {
                const data = await getPosts(page);
                setState(prevState => ({
                    ...prevState,
                    items: [...prevState.items, ...data],
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
    }, [page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
    };

    const { items, loading, error } = state;

    const elements = items.map(({ id, title, body }) =>
        <li className={styles.item} key={id}>
            <h4>{title}</h4>
            <p>{body}</p>
        </li>);

    return (
        <>
            {error && <p>Не удалось загрузить посты</p>}
            <ul className={styles.list}>
                {elements}
            </ul>
            {loading && <p>...Loading</p>}
            {!loading && items.length >= 9 && <button onClick={loadMore}>Load more</button>}
        </>
    )
}

export default PostList