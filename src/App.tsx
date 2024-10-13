import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import Dashboard from './screens/Dashboard';
import CalculationsCreateEdit from './screens/calculations/createEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/calculations/create' element={<CalculationsCreateEdit />} />
        <Route path='/calculations/edit/:id' element={<CalculationsCreateEdit />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
