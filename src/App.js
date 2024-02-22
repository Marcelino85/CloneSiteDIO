import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { Home } from "./Pages/home";
import { Login } from "./Pages/login";
import { Feed } from "./Pages/feed";
// import { Test } from "./Pages";



function App() {
  return (
    <Router>
     <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />     
        <Route path="/feed" element={<Feed />} />     
        {/* <Route path="/test" element={<Test />} />      */}
            
      </Routes>
    </Router>
  );
}

export default App;
