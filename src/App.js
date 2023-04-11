import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./blogdetails";
import NotFound from "./notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/create" element={<Create/>}></Route>
            <Route exact path="/anime/:id" element={<BlogDetails/>}></Route>
            <Route exact path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
