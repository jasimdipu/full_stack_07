import Navbar from "../Navbar";
import BookList from "../BookListComponents/BookList";
import useEffectHook from "../useEffectHook";
// import MySelectedBookList from "../BookListComponents/MySelectedBookList";


const Home = () => {


    const  {data:books, isPending, error} = useEffectHook("http://localhost:4000/books");
    // books -> get -> total list
    // books/{id} -> get -> book details
    // books -> post -> add a new book
    // books/{id} -> delete -> delete a book



    // const [newBookList, setNewBookList] = useState(null);

    // const handleRemove = (id) => {
    //     const bookItem = books.filter(book => book.id !== id);
    //     setBooks(bookItem);
    //     setNewBookList(bookItem);
    // }

    return (
        <div>

            <div className='container'>
                {error && <div className="font-monospace text-danger fs-4">Error: {error}</div>}
                {isPending && <div className="font-monospace text-black-50">Loading...</div>}
                {books && <BookList books={books} title={"My Books List"}/>}
                {/*{books &&*/}
                {/*<BookList books={books.filter((book) => book.author === "O'Rellay")} title={"O'Rellay's Books List"}*/}
                {/*          handleRemove={handleRemove}/>}*/}
                {/*{newBookList && <MySelectedBookList newBookList={newBookList} title={"My Selected Items"}/>}*/}

            </div>
        </div>
    );
}
export default Home;