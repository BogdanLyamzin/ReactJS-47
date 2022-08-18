import BookListItem from "./BookListItem";

const BookList = ({ books, removeBook }) => {

    const elements = books.map(item => <BookListItem 
                                            key={item.id} 
                                            {...item} 
                                            removeBook={() => removeBook(item.id)}  />);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default BookList;