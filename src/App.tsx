import { Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />          {/* public */}
      <Route path="/discover" element={<Discover />} />
      <Route path="/*" element={<ProtectedRoute><Pages /></ProtectedRoute>} />  {/* all else behind login */}
    </Routes>
  );
}