import { useState, useEffect } from "react";

import PostsSearchForm from "./PostsSearchForm";

import Modal from "../../shared/components/Modal";

import { searchPosts } from "../../shared/services/posts";

import styles from "./posts-search.module.css";

const PostsSearch = () => {
    const [posts, setPosts] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState({
        isOpen: false,
        content: {}
    });

    useEffect(()=> {
        const fetchPosts = async ()=> {
            setPosts(prevPosts => ({
                ...prevPosts,
                loading: true,
                error: null
            }));

            try {
                const data = await searchPosts(search, page);
                setPosts(prevPosts => ({
                    ...prevPosts,
                    items: [...prevPosts.items, ...data],
                    loading: false,
                }))
            } catch (error) {
                setPosts(prevPosts => ({
                    ...prevPosts,
                    loading: false,
                    error,
                }))
            }
        }

        if(search){
            fetchPosts();
        }
    }, [page, search]);

    const changeSearch = ({ search: newSearch }) => {
        if(search !== newSearch) {
            setSearch(newSearch);
            setPosts(prevState => ({
                ...prevState,
                items: []
            }));
        }
    }

    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
    };

    const showModal = (content) => {
        setModal({
            isOpen: true,
            content,
        })
    };

    const closeModal = () => {
        setModal({
            content: {},
            isOpen: false,
        })
    };

    const {items, loading, error} = posts;
    const {isOpen, content} = modal;

    const elements = items.map(({ id, title, body }) =>
        <li onClick={() => showModal({ title, body })} className={styles.item} key={id}>
            <h4>{title}</h4>
            <p>{body}</p>
        </li>);

    return (
        <div>
            {isOpen && <Modal close={closeModal}>
                <h4>{content.title}</h4>
                <p>{content.body}</p>
            </Modal>}
            <PostsSearchForm onSubmit={changeSearch} />
            {error && <p>Не удалось загрузить посты</p>}
            <ul className={styles.list}>
                {elements}
            </ul>
            {loading && <p>...Loading</p>}
            {!loading && items.length >= 9 && <button onClick={loadMore}>Load more</button>}
        </div>
    )
}

export default PostsSearch