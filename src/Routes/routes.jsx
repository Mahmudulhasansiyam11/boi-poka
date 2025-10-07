import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            loader: () => fetch("/booksData.json"),
            Component: Home
        },
        {
            path: "/about",
            Component: About
        },
        {
            path: "/bookDetails/:id",
            loader: () => fetch("/booksData.json"),
            Component: BookDetails
        }
    ],
    errorElement: <Error></Error>
  },
]);