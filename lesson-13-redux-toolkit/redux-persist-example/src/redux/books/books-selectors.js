export const getBooks = store => store.books;

export const getFilteredBooks = ({books = [], filter}) => {
    if(!filter){
        return books;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = books.filter(({title, author}) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        return (normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter))
    });

    return result;
}

export const getfavoriteBooks = ({books = []}) => {
    const favoriteBooks = books.filter(({favorite}) => favorite);
    return favoriteBooks;
};

