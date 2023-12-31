import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
}

export default App;
