import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404/pageNotFound";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import SearchResult from "./pages/searchResult/SearchResult";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"

const MainRoute = () => {
  return (
    <BrowserRouter>
    {/* <Header /> */}
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/:mediaType/:id" element = {<Details />} />
        <Route path="/search/:query" element = {<SearchResult />} />
        <Route path="/explore/:mediaType" element = {<Explore />} />
        <Route path="*" element = {<PageNotFound />} />
      </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default MainRoute;
