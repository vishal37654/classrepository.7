import ReactPaginate from "react-paginate";
import Fetch from "./Fetch";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



const App=()=> {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Fetch/>}></Route>
      </Routes>

     
     </div>
    </Router>
  )
}

export default App;