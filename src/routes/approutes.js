import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogDetails = lazy(() => import('../pages/Blog/BlogDetails'));
const UserBlog = lazy(() => import('../pages/UserBlog'));
const Login = lazy(() => import('../pages/Login'));

export const appRoutes = [
    { name: "", path: "/", element: Home },
    { name: "", path: "/blog", element: Blog },
    { name: "", path: "/blog-details/:blogName", element: BlogDetails },
    { name: "", path: "/user-blog", element: UserBlog },
    { name: "", path: "/login", element: Login }
]