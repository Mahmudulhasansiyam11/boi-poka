import { Suspense } from "react";
import Book from "../Book/Book";


const Books = ({data}) => {

    return (
        <div>
            <h3 className='text-3xl text-center p-6'>Books</h3>
            <Suspense fallback={<h3>Loading...</h3>}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  bg-white">
                 {
                data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
            }
            </div>
            </Suspense>
        </div>
    );
};

export default Books;