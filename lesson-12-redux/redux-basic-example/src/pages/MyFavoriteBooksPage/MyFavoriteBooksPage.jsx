import { useSelector } from "react-redux";

import { getfavoriteBooks } from "../../redux/selectors";

const MyFavoriteBooksPage = () => {
    const books = useSelector(getfavoriteBooks);

    const elements = books.map(({id, title}) => <li key={id}>{title}</li>)
    return (
        <div className="container">
           <h2>My favorite books</h2>
           <ul>
            {elements}
           </ul>
        </div>
    )
}

export default MyFavoriteBooksPage;