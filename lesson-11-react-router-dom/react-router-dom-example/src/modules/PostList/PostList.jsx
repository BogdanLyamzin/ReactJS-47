import { Link, useLocation } from "react-router-dom";

const PostList = ({items}) => {
    const location = useLocation();

    const elements = items.map(({id, title}) => <li key={id}>
                <Link state={{from: location}} to={`/posts/${id}`}>{title}</Link>
        </li>);

    return <ol>{elements}</ol>
}

export default PostList;

PostList.defaultProps = {
    items: []
}