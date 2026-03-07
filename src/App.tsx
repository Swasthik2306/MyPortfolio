import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// future imports for sections/pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
