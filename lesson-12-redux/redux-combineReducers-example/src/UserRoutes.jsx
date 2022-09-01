import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

const HomePage = lazy(()=> import('./pages/HomePage/HomePage'));
const MyBooksPage = lazy(()=> import('./pages/MyBooksPage/MyBooksPage'));
const MyFavoriteBooksPage = lazy(()=> import('./pages/MyFavoriteBooksPage/MyFavoriteBooksPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>....Load page</p>}>
            <Routes> 
                <Route path="/" element={<HomePage />} />
                <Route path="/my-books" element={<MyBooksPage />} />
                <Route path="/my-favorite-books" element={<MyFavoriteBooksPage />} />
        </Routes>
      </Suspense>
    )
};

export default UserRoutes;