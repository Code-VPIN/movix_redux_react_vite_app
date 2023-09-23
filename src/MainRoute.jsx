import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404/pageNotFound";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import SearchResult from "./pages/searchResult/SearchResult";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/:mediaType/:id" element = {<Details />} />
        <Route path="/search/:query" element = {<SearchResult />} />
        <Route path="/explore/:mediaType" element = {<Explore />} />
        <Route path="*" element = {<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
