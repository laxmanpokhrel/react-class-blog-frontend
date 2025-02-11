import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetails = lazy(() => import('./pages/Blog/BlogDetails'));
const UserBlog = lazy(() => import('./pages/UserBlog'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <div className="bg-blue-100 p-4 rounded-2xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:blogName" element={<BlogDetails />} />
        <Route path="/user-blog" element={<UserBlog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
