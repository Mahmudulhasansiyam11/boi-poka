import books from "../../assets/books.jpg";
const Banner = () => {
    return (
        <div>
            <div className="flex justify-around items-center p-10">
                <div>
                <h3 className="font-bold text-[30px]">Books to freshen up your bookshelf</h3>
                <button className="btn bg-[#90EE90] text-white font-bold">View The List</button>
            </div>
            <div>
                <img className="w-[400px]" src={books} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;