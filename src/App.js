import logo from "./logo.svg";
import "./App.css";
import RentBook from "./components/RentBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormsRent from "./components/FormsRent";
import UpdateDetailsRent from "./components/UpdateDetailsRent";
import Navbars from "./components/Navbars";
import StundetPage from "./components/StudentPage";
import BookPage from "./components/BookPage";
import FormBook from "./components/FormBook";
import UpdateDetailsBook from "./components/UpdateDetailsBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<StundetPage />} />
          <Route exact path="/bookpage" element={<BookPage />} />
          <Route exact path="/rentbook" element={<RentBook />} />
          <Route exact path="/form" element={<FormsRent />} />
          <Route exact path="/formbook" element={<FormBook />} />
          <Route exact path="/editrent/:id" element={<UpdateDetailsRent />} />
          <Route exact path="/editbook/:id" element={<UpdateDetailsBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
