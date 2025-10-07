import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const { image, bookId, bookName, category, rating, totalPages, publisher, tags } =
    singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-lime-100 w-96 shadow-sm p-10 rounded-2xl">
        <figure className="bg-gray-300 p-10 rounded-2xl">
          <img className="w-[164px] h-[240px]" src={image} alt="Shoes" />
        </figure>
        <div>
          <div className="flex justify-center items-center gap-5 mt-5">
            {tags.map((tag) => (
              <div>
                <p className="text-green-400">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{totalPages}</div>
          </h2>
          <p>Book By: {publisher}</p>
          <div className="mt-2">
            <div className="border border-dashed"></div>
          </div>
          <div className="card-actions justify-end mt-2">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              <div className="flex justify-center items-center gap-1">
                {rating} <Star className="w-4"></Star>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
  );
};

export default Book;
