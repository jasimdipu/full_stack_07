import Navbar from "../Navbar";
import {useState} from "react";
import BookList from "../BookListComponents/BookList";
import MySelectedBookList from "../BookListComponents/MySelectedBookList";


const Home = () => {

    const [books, setBooks] = useState([
        {
            id: 1,
            title: "Hands on Machine Learning",
            author: "O'Rellay",
            book_details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            published: "Published"
        },
        {
            id: 2,
            title: "Easy to Learn Python",
            author: "Amajon",
            book_details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            published: "Published"
        },
        {
            id: 3,
            title: "Deep Learning",
            author: "O'Rellay",
            book_details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            published: "Waiting for published"
        },
        {
            id: 4,
            title: "Learn IELTS",
            author: "Brithish Council",
            book_details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            published: "Published"
        },
        {
            id: 5,
            title: "Deep dive on Math",
            author: "Oxford",
            book_details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            published: "Waiting for published"
        },
    ]);

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
                <BookList books={books} title={"My Books List"} handleRemove={handleRemove}/>
                <BookList books={books.filter((book) => book.author === "O'Rellay")} title={"O'Rellay's Books List"}
                          handleRemove={handleRemove}/>
                {newBookList && <MySelectedBookList newBookList={newBookList} title={"My Selected Items"}/>}
            </div>
        </div>
    );
}
export default Home;