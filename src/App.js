import { Route, Routes } from 'react-router-dom';
import DeviseAuth from './components/blogs/Pages/DeviseAuth';
import BlogPage from './pages/BlogPage';
import Authorize from './components/blogs/Pages/Authorize';
import Performance from './components/blogs/Pages/Performance';
import Home from './pages/Home';
import Pagination from './components/blogs/Pages/Pagination';
import RSpec from './components/blogs/Pages/RSpec';
import RailsApi from './components/blogs/Pages/RailsApi';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route
        path="/blogs/rails-7-authentication-with-devise-gem-with-confirm-password"
        element={<DeviseAuth />}
      />
      <Route
        path="/blogs/rails-7-authorization-using-cancancan-gem"
        element={<Authorize />}
      />
      <Route
        path="/blogs/add-pagination-to-rails-7-app-using-will-paginate-gem-and-tailwind-css"
        element={<Pagination />}
      />
      <Route
        path="/blogs/rails-7-rspec-model-test-complementary-guide"
        element={<RSpec />}
      />

      <Route
        path="/blogs/fix-n1-performance-in-rails-with-bullet-gem"
        element={<Performance />}
      />

      <Route
        path="/blogs/lets-create-an-api-in-rails-7"
        element={<RailsApi />}
      />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
