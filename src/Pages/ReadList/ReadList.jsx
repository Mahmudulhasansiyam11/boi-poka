// import { Book } from "lucide-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {

    const [readList, setReadList] = useState([]);

    const data = useLoaderData();
    // console.log(data);

    useEffect(()=>{
        const storedBookData = getStoredBook();
        const ConvertedStoredBook = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => ConvertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    },[])

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WhishList</Tab>
        </TabList>

        <TabPanel>
          <h2>I was Read {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
            readList.map(b => <Book b={b.bookId} singleBook={b}></Book>)
          }
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
