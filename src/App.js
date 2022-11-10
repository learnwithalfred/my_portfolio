import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogPage />} />
    </Routes>
  );
}
