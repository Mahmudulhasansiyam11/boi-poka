import { Star } from "lucide-react";


const Book = ({singleBook}) => {

    console.log(singleBook)
    const {image, bookName, category, rating} = singleBook;

    return (
        <div className="card bg-lime-100 w-96 shadow-sm p-10 rounded-2xl">
  <figure className="bg-gray-300 p-10 rounded-2xl">
     <img className="w-[164px] h-[240px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">
        <div className="flex justify-center items-center gap-1">
            {rating} <Star className="w-4"></Star>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Book;