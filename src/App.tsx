import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route  path="/" Component={PatientList} />
          <Route  path="/patient-details/:id" Component={PatientDetail} />
        </Routes>
      </Router>
  );
}

export default App;
