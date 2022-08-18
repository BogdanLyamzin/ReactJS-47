import styles from "./posts.module.css";

const PostList = ({items}) => {
    const elements = items.map(({id, title, body}) =>
        <li className={styles.item} key={id}>
            <h4>{title}</h4>
            <p>{body}</p>
        </li>);

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default PostList;

PostList.defaultProps = {
    items: []
}

