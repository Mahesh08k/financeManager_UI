import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import './App.css';
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./components/Dashboard";
import { Banking } from "./components/Banking";
import { PostOffice } from "./components/PostOffice";
import { ShareMarket } from "./components/ShareMarket";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path="/" element={<Dashboard />} />
          <Route path='/bank' element={<Banking />} />
          <Route path='/postoffice' element={<PostOffice />} />
          <Route path='/sharemarket' element={<ShareMarket />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
