import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const covertBookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === covertBookId);
  console.log(singleBook);
  const {
    image,
    bookName,
    author,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoreDB(id);
  }

  return (
    <div className="md:flex items-center gap-12 m-3">
      <div className="p-[73px] bg-gray-200 rounded-2xl flex-1">
        <img src={image} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-4xl font-bold">{bookName}</h3>
        <p className="text-[20px] font-medium">By: {author}</p>
        <div className="border border-gray-200 mt-5"></div>
        <div className="mt-2">{tags.find((tag) => tag)}</div>
        <div className="border border-gray-200 mt-2"></div>
        <div className="mt-5">
          <p>
            <span className="font-medium">review:</span>
            {review}
          </p>
        </div>
        <div className="mt-5">
          <p className="flex gap-5">
            <span className="font-medium">Tags: </span>
            <div className="flex gap-3">
              {tags.map((tag) => (
                <p className="text-[#90EE90]">{tag}</p>
              ))}
            </div>
          </p>
        </div>
        <div className="border border-gray-200 mt-5"></div>
        <div className="mt-5">
          <p>
            Number of Pages: <span className="font-medium">{totalPages}</span>
          </p>
          <p>
            Publisher: <span className="font-medium">{publisher}</span>
          </p>
          <p>
            Year of Publishing:{" "}
            <span className="font-medium">{yearOfPublishing}</span>
          </p>
          <p>
            Rating: <span className="font-medium">{rating}</span>
          </p>
        </div>
        <div className="mt-5">
        <button onClick={() => handleMarkAsRead(id)} class="btn btn-accent m-3">Mark as Read</button>
        <button class="btn btn-info m-3">Add to WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
