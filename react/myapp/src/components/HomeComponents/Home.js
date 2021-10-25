import Navbar from "../Navbar";
import {useState, useEffect} from "react";
import BookList from "../BookListComponents/BookList";
import MySelectedBookList from "../BookListComponents/MySelectedBookList";


const Home = () => {

    const [books, setBooks] = useState(null);

    // books -> get -> total list
    // books/{id} -> get -> book details
    // books -> post -> add a new book
    // books/{id} -> delete -> delete a book

    useEffect(()=>{
        fetch("http://localhost:4000/books")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooks(data)
            })
    }, []);

    const [newBookList, setNewBookList] = useState(null);

    const handleRemove = (id) => {
        const bookItem = books.filter(book => book.id !== id);
        setBooks(bookItem);
        setNewBookList(bookItem);
    }

    return (
        <div>
            <Navbar/>
            <div className='content'>
                {books && <BookList books={books} title={"My Books List"} handleRemove={handleRemove}/>}
                {books && <BookList books={books.filter((book) => book.author === "O'Rellay")} title={"O'Rellay's Books List"}
                           handleRemove={handleRemove}/>}
                {newBookList && <MySelectedBookList newBookList={newBookList} title={"My Selected Items"}/>}

            </div>
        </div>
    );
}
export default Home;