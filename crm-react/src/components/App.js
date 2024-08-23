import Form from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableHome from "./TableHome";
import Navigation from './Navigation'
import EditDetails from "./EditDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/table" element={<TableHome />} />
            <Route path="/edit/:id" element={<EditDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
