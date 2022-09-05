import { useSelector } from "react-redux";

import { getFavoriteBooks } from "../../redux/books/books-selectors";

const MyFavoriteBooksPage = () => {
    const books = useSelector(getFavoriteBooks);

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