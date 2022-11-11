import { Route, Routes } from 'react-router-dom';
import DeviseAuth from './components/blogs/Pages/DeviseAuth';
import BlogPage from './pages/BlogPage';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route
        path="/blogs/rails-7-authentication-with-devise-gem-with-confirm-password"
        element={<DeviseAuth />}
      />
    </Routes>
  );
}
