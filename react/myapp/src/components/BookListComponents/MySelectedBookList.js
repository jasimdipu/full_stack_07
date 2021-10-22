const MySelectedBookList = (props) => {

    const newBookList = props.newBookList;
    const title = props.title;

    return (
        <div>
            <div><h3>{title}</h3></div>
            {
                newBookList.map((book) => (
                    <div className="book-preview" key={book.id}>
                        <h4>{book.title}</h4>
                        <p>Written By {book.author}</p>
                        <p><small>{book.published}</small></p>
                    </div>
                ))
            }
        </div>

    );
}

export default MySelectedBookList;