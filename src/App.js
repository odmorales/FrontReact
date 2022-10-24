import "./index.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Formulario from './components/formulario';
import GetPerson from './components/GetPerson';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element= { <Formulario /> } />
          <Route path="/consultar" exact element= { <GetPerson /> } />
        </Routes>
      </Router>
      {/* <GetPerson /> */}
    </div>
  );
}

export default App;
