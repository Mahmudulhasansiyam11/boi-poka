// import { Book } from "lucide-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if(type === "pages"){
        const sortByPages = [...readList].sort((a,b) => a.totalPages-b.totalPages);
        setReadList(sortByPages);
    }

    if(type === "ratings"){
        const sortByRatings = [...readList].sort((a,b) => a.rating - b.rating);
        setReadList(sortByRatings);
    }
  }

  return (
    <div>
      <div className="flex justify-center mt-5">
        <details className="dropdown">
          <summary className="btn m-1">Sort By : {sort?sort:""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WhishList</Tab>
        </TabList>

        <TabPanel>
          <h2>I was Read {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map((b) => (
              <Book b={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
