import './App.css';
import Navbar from './components/navbar'
import Home from "./components/home";
import Fav from "./components/favourites";
import Addfavourites from "./components/addfavourites"
import ErrorMessage from "./components/pageNotFound"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/** here BrowseRouter and Routes are double tag where Route is self closing tag */}
      <BrowserRouter> {/** it holds all the components */}
      <Navbar /> {/** common components are written here */}
      <Routes> {/** Routes defines the number of pages */}
      {/** Route defines te path for all the components */}
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Fav />} />
        <Route path="/add" element={<Addfavourites />} />
        <Route path="*" element={<ErrorMessage/>} /> {/** means all the pages which is not found will be a route to this page. */}
      </Routes>
      </BrowserRouter>
      {/* then change the link inside the  navbar where we want to redirect by using link tag. */}
    </div>
  );
}

export default App;
