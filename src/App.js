import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Add from './Components/Add';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Add/>}></Route>
          <Route path='/edit' element={<Edit/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
