const BookList = (props) => {

    const books = props.books;
    const title = props.title;
    const handleRemove = props.handleRemove;
    
    return (
        <div>
            <div><h3>{title}</h3></div>
            {
                books.map((book) => (
                    <div className="book-preview" key={book.id}>
                        <h4>{book.title}</h4>
                        <p>Written By {book.author}</p>
                        <p><small>{book.published}</small></p>
                        <button className="btn btn-primary" onClick={()=>handleRemove(book.id)}>Remove</button>
                    </div>
                ))
            }
        </div>

    );
}

export default BookList;