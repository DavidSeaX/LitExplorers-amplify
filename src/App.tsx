import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bookshelf from './pages/Bookshelf';
// add imports for Home, Discover, ProtectedRoute/Pages as needed

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<div>Discover</div>} />
      <Route path="/bookshelf" element={<Bookshelf />} />
      {/* other routes before catch-all */}
    </Routes>
  );
}

export default App;