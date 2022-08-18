import { useState, useEffect, useRef } from "react";

const PostsSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search: ""
    });

    const searchRef = useRef(null);

    useEffect(()=> {
        searchRef.current.focus();
    }, [])

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({
            search: ""
        })
    }

    const {search} = state;

    return (
        <form onSubmit={handleSubmit}>
            <input ref={searchRef} value={search} name="search" onChange={handleChange} type="text" placeholder="Поиск" required />
            <button type="submit">Поиск</button>
        </form>
    )
}

export default PostsSearchForm;